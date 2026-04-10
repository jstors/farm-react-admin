import type { AuditLogEntry, Role } from './types';

export const adminApi = {
  async getRoles(): Promise<Array<{ role: Role; description: string }>> {
    return [
      { role: 'admin', description: '系统管理员' },
      { role: 'editor', description: '内容维护' },
      { role: 'viewer', description: '只读用户' },
    ];
  },

  async getMenuPermissions() {
    return [
      { path: '/', permission: 'dashboard:view' },
      { path: '/profile', permission: 'profile:view' },
      { path: '/admin/roles', permission: 'role:view' },
      { path: '/admin/menu-permissions', permission: 'menu:view' },
      { path: '/admin/audit', permission: 'audit:view' },
    ];
  },

  async getAuditLogs(): Promise<AuditLogEntry[]> {
    return [
      { id: '1', action: 'LOGIN', operator: 'farm', createdAt: new Date().toISOString() },
      { id: '2', action: 'VIEW_DASHBOARD', operator: 'farm', createdAt: new Date().toISOString() },
    ];
  },
};
