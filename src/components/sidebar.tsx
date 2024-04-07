'use client'

import Link from "next/link"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Separator } from "./ui/separator"
import { PAGE_LINKS, SOCIAL_LINKS } from "@/constants/rounting"
import RenderLinks from "./render-links"



const SideBar = () => {
    return (
        <aside className="max-w-[314px] h-screen max-[1000px]:hidden flex flex-col gap-4 sticky top-0 w-full bg-zinc-50 border-r border-solid border-gray-200 p-3">
            <Link href="/" className="link-card inline-flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md">
                <Avatar >
                    <AvatarImage src="https://avatars.githubusercontent.com/u/99546472?v=4" alt="devmatolo" />
                </Avatar>
                <div className="flex flex-col">
                    <h1 className="font-semibold tracking-tight text-sm">Matheus Figueiredo</h1>
                    <span className="text-gray-600 text-sm">Software Engineer</span>
                </div>
            </Link>
            <nav>
                <RenderLinks data={PAGE_LINKS} hasCount />
            </nav>
            <Separator className="my-2" />
            <nav >
                <RenderLinks data={SOCIAL_LINKS} title="Online" />
            </nav>
        </aside >
    )
}

export default SideBar