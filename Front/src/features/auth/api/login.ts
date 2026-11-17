import { apiClient } from "../../../shared/api/client";
import type { AuthTokens } from "./tokenStorage";

export interface LoginPayload {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export async function loginUser(payload: LoginPayload): Promise<AuthTokens> {
  const { data } = await apiClient.post<AuthTokens>("/api/Account/login", {
    email: payload.email,
    password: payload.password,
    rememberMe: payload.rememberMe ?? false,
  });
  return data;
}