'use client'

import { CommandIcon } from 'lucide-react'
import { MenuContent } from '@/components/menu-content'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'

const NavBar = () => {
    return (
        <header className='sticky top-0 hidden max-[1000px]:flex items-center justify-between bg-zinc-50 border-b border-solid border-gray-200 p-3'>
            <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="ghost" size="icon" title="Toggle drawer">
                        <CommandIcon size={16} />
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="h-[80%]">
                    <div className="overflow-y-auto p-4">
                        <MenuContent />
                    </div>
                </DrawerContent>
            </Drawer>
        </header>
    )
}


export default NavBar