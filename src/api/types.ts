export type Role = 'admin' | 'editor' | 'viewer';

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email?: string;
  role: Role;
  permissions: string[];
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

export interface AuthPayload {
  username: string;
  password: string;
}

export interface RegisterPayload {
  username: string;
  password: string;
}

export interface AuthResponse {
  user: UserProfile;
  tokens: AuthTokens;
}

export interface AuditLogEntry {
  id: string;
  action: string;
  operator: string;
  createdAt: string;
}
