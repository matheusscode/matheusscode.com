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
      {...props}
      className={cn(
        "py-4 px-12 max-[1000px]:px-4 bg-yellow w-full h-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
