import { cn } from "@/lib/utils"
import { ComponentProps, FC } from "react"

type TitleProps = ComponentProps<"h1">

const Title: FC<TitleProps> = ({ children, className, ...props }) => {
    return (
        <h1 {...props} className={cn("text-3xl font-bold tracking-tight font-sans", className)}>
            {children}
        </h1>
    )
}

export default Title