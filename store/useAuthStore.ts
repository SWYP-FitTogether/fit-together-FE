import { create } from "zustand";

type AuthStore = {
  isLoggedIn: boolean;
  accessToken: string | null;
  setAuth: (token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => {
  const isBrowser = typeof window !== "undefined";

  return {
    isLoggedIn: isBrowser ? !!localStorage.getItem("accessToken") : false,
    accessToken: isBrowser ? localStorage.getItem("accessToken") : null,

    setAuth: (token) => {
      if (isBrowser) {
        localStorage.setItem("accessToken", token);
      }
      set({ accessToken: token, isLoggedIn: true });
    },

    logout: () => {
      if (isBrowser) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("link");
      }
      set({ accessToken: null, isLoggedIn: false });
    },
  };
});
