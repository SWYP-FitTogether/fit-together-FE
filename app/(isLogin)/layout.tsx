import RequireAuth from "@/components/RequireAuth";
import React from "react";

const IsLoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <RequireAuth>{children}</RequireAuth>;
};

export default IsLoginLayout;
