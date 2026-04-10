import { runLifecycleHook } from '@/core/extensions/lifecycle';
import type { AuthPayload, AuthResponse, RegisterPayload, UserProfile } from './types';

interface PersistUser {
  id: string;
  username: string;
  passwordHash: string;
  role: 'admin' | 'editor' | 'viewer';
}

const USER_DB_KEY = 'farm_admin_mock_users';
const TOKEN_TTL_MS = 30 * 60 * 1000;

const defaultUsers: PersistUser[] = [
  {
    id: '1',
    username: 'farm',
    // demo account password hash for initial local mock login
    passwordHash: '8d969eef6ecad3c29a3a629280e686cff8fabd30b9f3f5b6a7f58b8b5d6f3f44',
    role: 'admin',
  },
];

const rolePermissionMap: Record<PersistUser['role'], string[]> = {
  admin: ['dashboard:view', 'profile:view', 'role:view', 'menu:view', 'audit:view', 'plugin:insight:view', 'admin:all'],
  editor: ['dashboard:view', 'profile:view', 'plugin:insight:view'],
  viewer: ['dashboard:view', 'profile:view'],
};

const saveUsers = (users: PersistUser[]) => {
  localStorage.setItem(USER_DB_KEY, JSON.stringify(users));
};

const hex = (buffer: ArrayBuffer) => {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
};

const hashPassword = async (password: string) => {
  const input = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest('SHA-256', input);
  return hex(digest);
};

const getUsers = async () => {
  const raw = localStorage.getItem(USER_DB_KEY);
  if (!raw) {
    saveUsers(defaultUsers);
    return defaultUsers;
  }

  const users = JSON.parse(raw) as Array<PersistUser & { password?: string }>;
  let changed = false;
  const normalized: PersistUser[] = [];

  for (const user of users) {
    if (user.passwordHash) {
      normalized.push({ id: user.id, username: user.username, passwordHash: user.passwordHash, role: user.role });
      continue;
    }

    if (user.password) {
      changed = true;
      normalized.push({
        id: user.id,
        username: user.username,
        passwordHash: await hashPassword(user.password),
        role: user.role,
      });
    }
  }

  if (changed) {
    saveUsers(normalized);
  }

  return normalized;
};

const toProfile = (user: PersistUser): UserProfile => ({
  id: user.id,
  username: user.username,
  displayName: user.username,
  email: user.username.includes('@') ? user.username : undefined,
  role: user.role,
  permissions: rolePermissionMap[user.role],
});

const createTokens = (userId: string) => ({
  accessToken: `access_${userId}_${Date.now()}`,
  refreshToken: `refresh_${userId}_${Date.now()}`,
  expiresAt: Date.now() + TOKEN_TTL_MS,
});

const sleep = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

export const authApi = {
  async login(payload: AuthPayload): Promise<AuthResponse> {
    await sleep();
    const users = await getUsers();
    const passwordHash = await hashPassword(payload.password);
    const user = users.find((item) => item.username === payload.username && item.passwordHash === passwordHash);
    if (!user) {
      throw new Error('用户名或密码错误');
    }
    await runLifecycleHook('auth:login');
    return { user: toProfile(user), tokens: createTokens(user.id) };
  },

  async register(payload: RegisterPayload): Promise<AuthResponse> {
    await sleep();
    const users = await getUsers();
    if (users.some((item) => item.username === payload.username)) {
      throw new Error('账号已存在');
    }

    const created: PersistUser = {
      id: String(Date.now()),
      username: payload.username,
      passwordHash: await hashPassword(payload.password),
      role: 'viewer',
    };
    const nextUsers = [...users, created];
    saveUsers(nextUsers);
    await runLifecycleHook('auth:login');
    return { user: toProfile(created), tokens: createTokens(created.id) };
  },

  async refresh(refreshToken: string) {
    await sleep(200);
    if (!refreshToken?.startsWith('refresh_')) {
      throw new Error('refresh token 无效');
    }
    const userId = refreshToken.split('_')[1];
    return createTokens(userId);
  },

  async logout() {
    await sleep(100);
    await runLifecycleHook('auth:logout');
    return true;
  },
};
