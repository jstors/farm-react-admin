import { runLifecycleHook } from '@/core/extensions/lifecycle';
import type { AuthPayload, AuthResponse, RegisterPayload, UserProfile } from './types';

interface PersistUser {
  id: string;
  username: string;
  password: string;
  role: 'admin' | 'editor' | 'viewer';
}

const USER_DB_KEY = 'farm_admin_mock_users';
const TOKEN_TTL = 1000 * 60 * 30;

const defaultUsers: PersistUser[] = [{ id: '1', username: 'farm', password: '123456', role: 'admin' }];

const rolePermissionMap: Record<PersistUser['role'], string[]> = {
  admin: ['dashboard:view', 'profile:view', 'role:view', 'menu:view', 'audit:view', 'plugin:insight:view', 'admin:all'],
  editor: ['dashboard:view', 'profile:view', 'plugin:insight:view'],
  viewer: ['dashboard:view', 'profile:view'],
};

const getUsers = () => {
  const raw = localStorage.getItem(USER_DB_KEY);
  if (!raw) {
    localStorage.setItem(USER_DB_KEY, JSON.stringify(defaultUsers));
    return defaultUsers;
  }
  return JSON.parse(raw) as PersistUser[];
};

const saveUsers = (users: PersistUser[]) => {
  localStorage.setItem(USER_DB_KEY, JSON.stringify(users));
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
  expiresAt: Date.now() + TOKEN_TTL,
});

const sleep = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

export const authApi = {
  async login(payload: AuthPayload): Promise<AuthResponse> {
    await sleep();
    const users = getUsers();
    const user = users.find((item) => item.username === payload.username && item.password === payload.password);
    if (!user) {
      throw new Error('用户名或密码错误');
    }
    await runLifecycleHook('auth:login');
    return { user: toProfile(user), tokens: createTokens(user.id) };
  },

  async register(payload: RegisterPayload): Promise<AuthResponse> {
    await sleep();
    const users = getUsers();
    if (users.some((item) => item.username === payload.username)) {
      throw new Error('账号已存在');
    }

    const created: PersistUser = {
      id: String(Date.now()),
      username: payload.username,
      password: payload.password,
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
