import { create } from "zustand";

type AuthStore = {
  isLoggedIn: boolean;
  accessToken: string | null;
  nickname: string | null;
  email: string | null;
  setAuth: (token: string, nickname: string, email: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => {
  const isBrowser = typeof window !== "undefined";

  return {
    isLoggedIn: isBrowser ? !!localStorage.getItem("accessToken") : false,
    accessToken: isBrowser ? localStorage.getItem("accessToken") : null,
    nickname: isBrowser ? localStorage.getItem("nickname") : null,
    email: isBrowser ? localStorage.getItem("email") : null,

    setAuth: (token, nickname, email) => {
      if (isBrowser) {
        localStorage.setItem("accessToken", token);
        localStorage.setItem("nickname", nickname);
        localStorage.setItem("email", email);
      }
      set({ accessToken: token, isLoggedIn: true, nickname, email });
    },

    logout: () => {
      if (isBrowser) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("nickname");
        localStorage.removeItem("email");
      }
      set({
        accessToken: null,
        isLoggedIn: false,
        nickname: null,
        email: null,
      });
    },
  };
});
