import { useSessionStore } from '@/store/session';
import type React from 'react';
import { Navigate } from 'react-router';
import { LOGIN_PATH } from './const';

const ProtectedRoute = ({ permission, children }: { permission?: string; children: React.ReactNode }) => {
  const hasPermission = useSessionStore((state) => state.hasPermission);
  const user = useSessionStore((state) => state.user);

  if (!user) {
    return <Navigate to={LOGIN_PATH} replace />;
  }

  if (!hasPermission(permission)) {
    return <div>无权限访问该页面</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
