"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { accessToken } = useAuthStore();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!accessToken) {
      router.replace("/login");
    } else {
      setChecked(true);
    }
  }, [router, accessToken]);

  if (!checked) return null;

  return <>{children}</>;
}
