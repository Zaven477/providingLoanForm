import { Outlet } from "react-router";

export const Header = () => {
  return (
    <div>
      <header className="bg-[#00BFFF] h-[60px]"></header>
      <Outlet />
    </div>
  );
};
