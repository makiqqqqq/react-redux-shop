import { GetUserResponseParams } from "@/api/models/user-model.ts";
import AvatarBlock from "@/components/AvatarBlock";
import Button from "@/components/Button";
import LogOutIcon from "@/components/Icons/LogOutIcon";
import { useGetUserApi } from "@/hooks/useGetUserApi.tsx";
import SideBar from "../../components/SideBar";
import { AppDispatch } from "@/store";
import { userActions } from "@/store/user/userSlice.ts";
import { FC, PropsWithChildren } from "react";
import { useDispatch } from "react-redux";
const UserLayouts: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isLoading } = useGetUserApi();

  const { logout, setUser } = userActions;
  const handleLogout = () => {
    dispatch(logout());
    dispatch(
      setUser({
        user: {} as GetUserResponseParams,
      }),
    );
  };

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          {isLoading ? <>Loading...</> : <AvatarBlock {...user} />}
          <SideBar />
          <div className="absolute bottom-5">
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
              <Button className="p-1" onClick={handleLogout}>
                <LogOutIcon />
                <span className="flex-1 ml-3 whitespace-nowrap">Log out</span>
              </Button>
            </a>
          </div>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">{children}</div>
    </>
  );
};

export default UserLayouts;
