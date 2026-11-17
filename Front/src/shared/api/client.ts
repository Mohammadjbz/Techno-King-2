import axios from "axios";
import { BASE_URL } from "./base";
import { tokenStorage } from "../../features/auth/api/tokenStorage";

export const apiClient = axios.create({ baseURL: BASE_URL });

apiClient.interceptors.request.use((config) => {
  const token = tokenStorage.getAccess();
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});
