import { useAuthStore } from "@/store/useAuthStore";
import {
  IKakaoLoginRequest,
  IKakaoLoginResponse,
  IOnboardInfo,
} from "@/types/auth";
import { FetchErrorType } from "@/types/type";
import { login, setOnboard } from "@/utils/auth";
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
      setAuth(data.accessToken);
      navigate.push("/onboard");
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
