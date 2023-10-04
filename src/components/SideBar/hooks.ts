import CartIcon from "@/components/Icons/CartIcon";
import MainIcon from "@/components/Icons/MainIcon";
import MenuIcon from "@/components/Icons/MenuIcon";
import { createElement } from "react";
import { useLocation } from "react-router";

export const useLinks = () => {
  const { pathname } = useLocation();

  const links = [
    {
      to: "/",
      name: "Main",
      icon: createElement(MainIcon),
    },
    {
      to: "/menu",
      name: "Menu",
      icon: createElement(MenuIcon),
    },
    {
      to: "/cart",
      name: "Cart",
      icon: createElement(CartIcon),
    },
  ].map((link) => {
    return {
      ...link,
      isActive: link.to === pathname,
    };
  });

  return {
    links,
  };
};
