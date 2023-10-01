import { clsx } from "clsx";
import { FC } from "react";
import { Link } from "react-router-dom";
import { NavBarLinkProps } from "./types.ts";
const NavBarLink: FC<NavBarLinkProps> = ({ name, icon, isActive, ...other }) => {
  return (
    <li key={name}>
      <Link
        {...other}
        className={clsx("flex items-center p-2 text-gray-900 rounded-lg group", isActive && "bg-gray-200")}
      >
        {icon}
        <span className="flex-1 ml-3 whitespace-nowrap">{name}</span>
      </Link>
    </li>
  );
};

export default NavBarLink;
