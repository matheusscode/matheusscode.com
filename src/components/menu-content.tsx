import Link from 'next/link'

import { PAGE_LINKS, SOCIAL_LINKS } from '@/constants/rounting'
import RenderLinks from './render-links'
import { Separator } from './ui/separator'
import { Avatar, AvatarImage } from './ui/avatar'

export const MenuContent = () => {
    return (
        <div className="flex w-full flex-col text-sm">
            <div className="flex flex-col gap-4">
                <Link href="/" className="link-card inline-flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md">
                    <Avatar >
                        <AvatarImage src="https://avatars.githubusercontent.com/u/99546472?v=4" alt="devmatolo" />
                    </Avatar>
                    <div className="flex flex-col">
                        <h1 className="font-semibold tracking-tight text-sm">Matheus Figueiredo</h1>
                        <span className="text-gray-600 text-sm">Software Engineer</span>
                    </div>
                </Link>
                <RenderLinks data={PAGE_LINKS} hasCount />
            </div>
            <Separator className="my-2" />
            <div className="flex flex-col gap-2 text-sm">
                <RenderLinks data={SOCIAL_LINKS} title="Online" />
            </div>
        </div>
    )
}
