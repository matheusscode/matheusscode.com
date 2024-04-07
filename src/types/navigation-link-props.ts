import { LucideIcon } from "lucide-react";

export type CustomLinkProps = {
  label: string;
  path: string;
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  id?: number | string;
};

export type NavigationLinkProps = {
  isActive?: boolean;
  params: CustomLinkProps;
  isCount?: boolean;
};
