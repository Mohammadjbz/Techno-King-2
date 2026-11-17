const ACCESS = "accessToken";
const REFRESH = "refreshToken";
const EXPIRES = "accessTokenExpiration";

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiration: string;
}

export const tokenStorage = {
  save(t: AuthTokens) {
    localStorage.setItem(ACCESS, t.accessToken);
    localStorage.setItem(REFRESH, t.refreshToken);
    localStorage.setItem(EXPIRES, t.accessTokenExpiration);
  },

  getAccess: () => localStorage.getItem(ACCESS),
  getRefresh: () => localStorage.getItem(REFRESH),
  clear() {
    localStorage.removeItem(ACCESS);
    localStorage.removeItem(REFRESH);
    localStorage.removeItem(EXPIRES);
  },
};
