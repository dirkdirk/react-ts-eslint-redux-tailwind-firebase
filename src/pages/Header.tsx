import { FC } from "react";
import Logo from "../components/icons-logo/Logo";
import UserMenu from "../components/user-settings/UserMenu";

const Header: FC = () => {
  return (
    <div className="p-4 flex flex-row justify-between items-center bg-header dark:bg-dark-header">
      <Logo />
      <div className="text-4xl tracking-widest whitespace-nowrap font-thin">
        Todo4Life
      </div>
      <UserMenu />
    </div>
  );
};

export default Header;
