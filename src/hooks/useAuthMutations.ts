import type { AuthPayload, RegisterPayload } from '@/api/types';
import { useSessionStore } from '@/store/session';
import { useMutation } from '@tanstack/react-query';

export const useLoginMutation = () => {
  const login = useSessionStore((state) => state.login);
  return useMutation({ mutationFn: (payload: AuthPayload) => login(payload) });
};

export const useRegisterMutation = () => {
  const register = useSessionStore((state) => state.register);
  return useMutation({ mutationFn: (payload: RegisterPayload) => register(payload) });
};
