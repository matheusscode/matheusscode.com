
import Link from "next/link"
import { Card, CardDescription, CardTitle } from "./ui/card"
import { FC } from "react"

type PostCardProps = {
    href: string
}

const PostCard: FC<PostCardProps> = ({ href }) => {


    return (
        <Link className="flex flex-col gap-1 select-none cursor-pointer transition-all hover:bg-gray-200 w-full p-2" href={`${href}`}>
            <Card className="p-0  bg-transparent border-none shadow-none">
                <CardTitle className="text-[0.974rem] font-normal tracking-normal">
                    Lorem ipsum dolor sit amet consectetur.
                </CardTitle>
                <CardDescription className="text-[0.954rem] ">
                    October 06, 2023 * 52.123 views
                </CardDescription>
            </Card>
        </Link>
    )
}

export default PostCard