import { useAuthStore } from "@/store/useAuthStore";
import {
  IKakaoLoginRequest,
  IKakaoLoginResponse,
  IOnboardInfo,
} from "@/types/auth";
import { FetchErrorType } from "@/types/type";
import { login, logout, setOnboard, skipOnboard } from "@/utils/auth";
import { queryClient } from "@/utils/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useKakaoLogin = () => {
  const navigate = useRouter();
  const { setAuth } = useAuthStore();
  const { mutate, isError, isPending } = useMutation<
    IKakaoLoginResponse,
    FetchErrorType,
    IKakaoLoginRequest
  >({
    mutationFn: login,
    onSuccess: async (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      setAuth(data.accessToken, data.nickname, data.email);
      if (data.newUser) {
        navigate.push("/onboard");
      }
      if (!data.newUser) {
        navigate.push("/board");
      }
    },
    onError: (err) => {
      throw Error(err.info?.message);
    },
  });

  return {
    mutate,
    isError,
    isPending,
  };
};

export const useLogout = () => {
  const navigate = useRouter();
  const { logout: authLogout } = useAuthStore();
  const { mutate, isError, isPending } = useMutation<unknown, FetchErrorType>({
    mutationFn: logout,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      authLogout();
      navigate.push("/");
    },
    onError: (err) => {
      throw Error(err.info?.message);
    },
  });

  return {
    mutate,
    isError,
    isPending,
  };
};

export const useOnboad = () => {
  const navigate = useRouter();
  const { mutate, isError, isPending } = useMutation<
    IKakaoLoginResponse,
    FetchErrorType,
    IOnboardInfo
  >({
    mutationFn: setOnboard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate.push("/board");
    },
    onError: (err) => {
      throw Error(err.info?.message);
    },
  });

  return {
    mutate,
    isError,
    isPending,
  };
};

export const useSkipOnboad = () => {
  const navigate = useRouter();
  const { mutate, isError, isPending } = useMutation<unknown, FetchErrorType>({
    mutationFn: skipOnboard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate.push("/board");
    },
    onError: (err) => {
      throw Error(err.info?.message);
    },
  });

  return {
    mutate,
    isError,
    isPending,
  };
};
