import { DisclosureContext } from "@/context/disclosure-context";
import { DisclosureProps } from "@/types/disclosure-props";
import { useContext } from "react";

export const useDisclosure = (): DisclosureProps => {
  const context = useContext(DisclosureContext);
  if (!Object.keys(context).length) {
    throw new Error(
      "useDisclosure deve ser utilizado dentro de um DisclosureProvider"
    );
  }
  return context;
};
