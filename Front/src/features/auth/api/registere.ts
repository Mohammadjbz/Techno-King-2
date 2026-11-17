import { apiClient } from "../../../shared/api/client";
import type { AuthTokens } from "./tokenStorage";

export interface RegisterPayload { userName: string; email: string; password: string; }

export interface AuthResponse {
  message: string;
  data: AuthTokens;
}

export async function registerUser(payload: RegisterPayload): Promise<AuthResponse> {
  const { data } = await apiClient.post<AuthResponse>("/api/Account/register", payload);
  return data;
}