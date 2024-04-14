"use client";

import { useDisclosure } from "@/hooks/disclosure";
import PostCard from "./post-card";
import { ScrollArea } from "./ui/scroll-area";

const PostList = () => {
  const { handleNonExpansionPostList, isExpandPostList } = useDisclosure();

  return (
    <ScrollArea
      data-active={isExpandPostList}
      className="max-[800px]:hidden max-[800px]:data-[active=true]:flex gap-2 p-4 flex-col h-screen max-[800px]:min-w-full min-w-[400px] bg-zinc-50 border-r border-solid border-gray-200"
    >
      <div className="p-4 border-b border-solid border-gray-200"></div>
      <div className="py-4 flex flex-col gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <PostCard
            onClick={handleNonExpansionPostList}
            href="/bookmarks/Lorem-ipsum-dolor-sit-amet."
            key={item}
          />
        ))}
      </div>
    </ScrollArea>
  );
};

export default PostList;
