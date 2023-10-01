import AvatarBlock from "@/components/AvatarBlock";
import LogOutIcon from "@/components/Icons/LogOutIcon";
import NavBar from "@/components/NavBar";
import { FC, PropsWithChildren } from "react";

const UserLayouts: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <AvatarBlock email="example@g.com" userName="Maki Qqqqq" />
          <NavBar />
          <div className="absolute bottom-5">
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
              <LogOutIcon />
              <span className="flex-1 ml-3 whitespace-nowrap">Log out</span>
            </a>
          </div>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">{children}</div>
    </>
  );
};

export default UserLayouts;
