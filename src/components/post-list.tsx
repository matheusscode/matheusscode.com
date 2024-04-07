import PostCard from "./post-card"
import { ScrollArea } from "./ui/scroll-area"



const PostList = () => {
    return (
        <ScrollArea className="flex gap-2 p-4 flex-col h-screen min-w-[400px] bg-zinc-50 border-r border-solid border-gray-200">
            <div className="p-4 border-b border-solid border-gray-200">

            </div>
            <div className="py-4 flex flex-col gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
                    <PostCard href="/bookmarks/Lorem-ipsum-dolor-sit-amet." key={item} />
                ))}

            </div>
        </ScrollArea>

    )
}

export default PostList