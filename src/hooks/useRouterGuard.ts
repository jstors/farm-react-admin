import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { LOGIN_PATH, TOKEN_KEY } from '@/config/const';
import { getCookie } from '@/utils/cookie';

export default function useRouterGuard(callback?: () => void) {
  const location = useLocation();
  const go = useNavigate();

  useEffect(() => {
    console.log('🤖 == useEffect == location:', location);
    if (location.pathname !== LOGIN_PATH) {
      const token = getCookie(TOKEN_KEY);
      if (!token) {
        go(LOGIN_PATH);
        callback?.();
      }
    }
  }, [location]);
}
