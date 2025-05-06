import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="w-[375px] h-dvh mx-auto">
      <Outlet />
    </div>
  );
};

export default Layout;
