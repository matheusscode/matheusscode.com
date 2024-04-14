"use client";

import { ComponentProps, FC, ReactNode } from "react";
import { IconButton } from "./ui/icon-button";
import { cn } from "@/lib/utils";

type SpeedDialProps = ComponentProps<"button"> & {
  icon: ReactNode;
};

const SpeedDial: FC<SpeedDialProps> = ({ icon, className, ...props }) => {
  return (
    <div className={cn("fixed bottom-4 right-4", className)}>
      <div className="relative w-full h-full">
        <IconButton
          {...props}
          size="icon"
          className="bg-neutral-950"
          icon={icon}
        />
      </div>
    </div>
  );
};

export default SpeedDial;
