import { cn } from "@/lib/utils"
import { NavigationLinkProps } from "@/types/navigation-link-props"
import Link, { LinkProps } from "next/link"
import { FC } from "react"



const NavigationLink: FC<NavigationLinkProps & Omit<LinkProps, "href">> = ({ isActive, params, isCount = false, ...props }) => {

    const { iconLeft: IconLeft, iconRight: IconRight, label, path, id } = params

    return (
        <Link {...props} href={path} data-active={isActive} target={isCount ? "" : "_blank"} className={cn(
            'group flex items-center justify-between rounded-lg p-2 data-[active=true]:bg-black data-[active=true]:text-white hover:bg-gray-200'
        )}  >
            <span className="flex items-center gap-2 w-full">
                {IconLeft && <IconLeft size={18} />}
                <span data-active={isActive} className={cn('font-medium text-md tracking-tight data-[active=true]:text-white')}>{label}</span>
            </span>
            {isCount && <span
                data-active={isActive}
                className={cn(
                    'hidden h-6 w-6 place-content-center rounded border border-gray-200 bg-gray-100 text-xs font-medium text-gray-500 transition-colors duration-200 group-hover:border-gray-300 lg:grid data-[active=true]:border-gray-600 data-[active=true]:bg-gray-700 data-[active=true]:text-gray-200 data-[active=true]:group-hover:border-gray-600'
                )}>
                {id}
            </span>}
            {IconRight && <IconRight size={22} />}
        </Link>
    )
}


export default NavigationLink