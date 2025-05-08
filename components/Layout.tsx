"use client";

import { queryClient } from "@/utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto h-dvh w-[375px]">{children}</div>
    </QueryClientProvider>
  );
}
