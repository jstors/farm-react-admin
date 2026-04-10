import { LOGIN_PATH } from '@/router/const';
import { useSessionStore } from '@/store/session';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

const REFRESH_BUFFER_MS = 30 * 1000;

export default function useRouterGuard(callback?: () => void) {
  const location = useLocation();
  const go = useNavigate();
  const tokens = useSessionStore((state) => state.tokens);
  const refresh = useSessionStore((state) => state.refresh);
  const logout = useSessionStore((state) => state.logout);

  useEffect(() => {
    let cancelled = false;

    const checkSession = async () => {
      if (location.pathname === LOGIN_PATH) return;

      if (!tokens?.accessToken) {
        go(LOGIN_PATH);
        callback?.();
        return;
      }

      if (tokens.expiresAt - Date.now() <= REFRESH_BUFFER_MS) {
        try {
          await refresh();
        } catch {
          if (cancelled) return;
          await logout();
          go(LOGIN_PATH);
          callback?.();
        }
      }
    };

    void checkSession();

    return () => {
      cancelled = true;
    };
  }, [callback, go, location.pathname, logout, refresh, tokens]);
}
