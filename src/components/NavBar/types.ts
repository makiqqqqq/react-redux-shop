import { ReactElement } from "react";

export type Link = {
  name: string;
  icon: ReactElement;
  isActive?: boolean;
  to: string;
};
