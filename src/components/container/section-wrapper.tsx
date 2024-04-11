import { cn } from "@/lib/utils";
import { ComponentProps, FC } from "react";

type SectionWrapperProps = ComponentProps<"div">;

const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("py-4 px-12 bg-yellow w-full h-full", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
