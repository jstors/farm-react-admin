import { authApi } from '@/api/auth';
import type { AuthPayload, RegisterPayload, UserProfile } from '@/api/types';
import { create } from 'zustand';

export interface SessionTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

const SESSION_KEY = 'farm_admin_session';

interface SessionState {
  user: UserProfile | null;
  tokens: SessionTokens | null;
  loading: boolean;
  hydrated: boolean;
  setSession: (user: UserProfile, tokens: SessionTokens) => void;
  login: (payload: AuthPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  refresh: () => Promise<void>;
  logout: () => Promise<void>;
  hasPermission: (permission?: string) => boolean;
  bootstrap: () => void;
}

const persistSession = (session: Pick<SessionState, 'user' | 'tokens'>) => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
};

const clearSession = () => {
  localStorage.removeItem(SESSION_KEY);
};

const readSession = (): Pick<SessionState, 'user' | 'tokens'> | null => {
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Pick<SessionState, 'user' | 'tokens'>;
  } catch {
    return null;
  }
};

export const useSessionStore = create<SessionState>((set, get) => ({
  user: null,
  tokens: null,
  loading: false,
  hydrated: false,

  setSession: (user, tokens) => {
    set({ user, tokens, hydrated: true });
    persistSession({ user, tokens });
  },

  login: async (payload) => {
    set({ loading: true });
    try {
      const result = await authApi.login(payload);
      get().setSession(result.user, result.tokens);
    } finally {
      set({ loading: false });
    }
  },

  register: async (payload) => {
    set({ loading: true });
    try {
      const result = await authApi.register(payload);
      get().setSession(result.user, result.tokens);
    } finally {
      set({ loading: false });
    }
  },

  refresh: async () => {
    const current = get().tokens;
    if (!current?.refreshToken) {
      throw new Error('没有可用的刷新令牌，用户可能需要重新登录');
    }
    const tokens = await authApi.refresh(current.refreshToken);
    const user = get().user;
    if (!user) {
      throw new Error('用户会话不存在，认证状态可能已被清理');
    }
    get().setSession(user, tokens);
  },

  logout: async () => {
    try {
      await authApi.logout();
    } finally {
      clearSession();
      set({ user: null, tokens: null, hydrated: true });
    }
  },

  hasPermission: (permission) => {
    if (!permission) return true;
    const user = get().user;
    if (!user) return false;
    return user.permissions.includes('admin:all') || user.permissions.includes(permission);
  },

  bootstrap: () => {
    const current = readSession();
    if (current?.user && current?.tokens) {
      set({ user: current.user, tokens: current.tokens, hydrated: true });
      return;
    }
    set({ hydrated: true });
  },
}));
