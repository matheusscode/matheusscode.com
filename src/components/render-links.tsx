"use client";

import NavigationLink from "@/components/navigation-link";
import { CustomLinkProps } from "@/types";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface RenderLinksProps {
  data: CustomLinkProps[];
  title?: string;
  hasCount?: boolean;
}
const RenderLinks: FC<RenderLinksProps> = ({
  data,
  hasCount = false,
  title,
}) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {title && (
        <h1 className="text-[0.82rem] font-semibold p-2 text-gray-500">
          {title}
        </h1>
      )}
      <ul className="flex flex-col gap-1">
        {data.map((link) => (
          <NavigationLink
            key={link.id}
            isCount={hasCount}
            params={link}
            isActive={pathname === link.path}
          />
        ))}
      </ul>
    </nav>
  );
};

export default RenderLinks;
