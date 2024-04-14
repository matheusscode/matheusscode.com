import { createContext } from "react";
import { DisclosureProps } from "@/types/disclosure-props";

export const DisclosureContext = createContext<DisclosureProps>(
  {} as DisclosureProps
);
