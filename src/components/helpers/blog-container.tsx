"use client";

import React, { ComponentProps, ElementType, FC } from "react";
import { BookmarkIcon, PencilLineIcon } from "lucide-react";
import { useDisclosure } from "@/hooks/disclosure";
import SpeedDial from "../speed-dial";
import { IconButton } from "../ui/icon-button";

type BlogContainerProps = ComponentProps<"div"> & {
  icon: "writing" | "bookmarks";
};

const BlogContainer: FC<BlogContainerProps> = ({
  children,
  icon,
  ...props
}) => {
  const { handleExpansionPostList } = useDisclosure();
  let Icon: ElementType = React.Fragment;

  if (icon === "bookmarks") {
    Icon = BookmarkIcon;
  } else if (icon === "writing") {
    Icon = PencilLineIcon;
  }

  return (
    <div {...props} className="relative w-full h-full">
      <IconButton
        className="hidden max-[800px]:block"
        onClick={handleExpansionPostList}
        icon={<Icon />}
      />
      {children}
    </div>
  );
};

export default BlogContainer;
