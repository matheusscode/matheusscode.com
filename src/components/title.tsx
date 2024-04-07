import { ComponentProps, FC } from "react"

type TitleProps = ComponentProps<"h1">

const Title: FC<TitleProps> = ({ children, ...props }) => {
    return (
        <h1 {...props} className="text-3xl font-bold tracking-tight font-sans">
            {children}
        </h1>
    )
}

export default Title