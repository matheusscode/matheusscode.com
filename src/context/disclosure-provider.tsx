"use client";

import { ReactNode, useState } from "react";
import { DisclosureContext } from "./disclosure-context";
import { DisclosureProps } from "@/types/disclosure-props";
import { usePathname, useRouter } from "next/navigation";

export default function DisclosureProvider({
  children,
}: {
  children: ReactNode;
}) {
  const navigate = useRouter();
  const pathname = usePathname();

  const [isExpandPostList, setIsExpandPostList] = useState<boolean>(true);

  const handleNonExpansionPostList = () => {
    setIsExpandPostList(false);
  };

  const handleExpansionPostList = () => {
    setIsExpandPostList(true);

    if (pathname === "writing") {
      navigate.push("/writing");
    } else {
      navigate.push("/bookmarks");
    }
  };

  const disclosureContextValues: DisclosureProps = {
    isExpandPostList,
    handleExpansionPostList,
    handleNonExpansionPostList,
  };

  return (
    <DisclosureContext.Provider value={disclosureContextValues}>
      {children}
    </DisclosureContext.Provider>
  );
}
