import { ReactNode } from "react";
import { ButtonProps as FlowbiteButtonProps } from "flowbite-react";

export type ButtonProps = {
  children: ReactNode;
} & FlowbiteButtonProps;
