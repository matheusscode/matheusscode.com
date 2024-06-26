import { cn } from "@/lib/utils";
import { ComponentProps, FC } from "react";

type SectionContainerProps = ComponentProps<"section">;

const SectionContainer: FC<SectionContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      {...props}
      className={cn(
        "flex flex-col h-full max-w-5xl w-full mx-auto pt-24 max-[1000px]:px-4 px-8 pb-16",
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
