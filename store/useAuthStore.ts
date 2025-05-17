import { create } from "zustand";

type AuthStore = {
  isLoggedIn: boolean;
  accessToken: string | null;
  nickname: string | null;
  setAuth: (token: string, nickname: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => {
  const isBrowser = typeof window !== "undefined";

  return {
    isLoggedIn: isBrowser ? !!localStorage.getItem("accessToken") : false,
    accessToken: isBrowser ? localStorage.getItem("accessToken") : null,
    nickname: null,

    setAuth: (token, nickname) => {
      if (isBrowser) {
        localStorage.setItem("accessToken", token);
      }
      set({ accessToken: token, isLoggedIn: true, nickname });
    },

    logout: () => {
      if (isBrowser) {
        localStorage.removeItem("accessToken");
      }
      set({ accessToken: null, isLoggedIn: false });
    },
  };
});
