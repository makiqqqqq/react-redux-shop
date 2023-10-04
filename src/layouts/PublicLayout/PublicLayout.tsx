import { FC, PropsWithChildren } from "react";

const PublicLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="bg-green-900">{children}</div>;
};

export default PublicLayout;
