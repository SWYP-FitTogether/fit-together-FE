import { getProfile } from "@/utils/profile";
import { useQuery } from "@tanstack/react-query";

export function useGetProfile() {
  return useQuery({
    queryFn: getProfile,
    queryKey: ["profile"],
  });
}
