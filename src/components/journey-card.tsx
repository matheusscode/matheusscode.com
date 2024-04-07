import { FC } from 'react'


type JourneyCardProps = {
    title?: string
    description?: string
    image?: {
        url: string
        title: string
        description: string
        width: string | number
        height: string | number
    }
    index?: number
}

const JourneyCard: FC<JourneyCardProps> = ({ title, image, index }) => {
    return (
        <div className="word-break-word flex flex-col h-[400px]">
            <span className="font-semibold tracking-tight">{title}</span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi illo voluptate neque, odit enim, labore a perspiciatis eum expedita itaque quod pariatur nesciunt perferendis impedit?</p>
            {image?.url && (
                <div className="mt-2.5 overflow-hidden rounded-xl bg-white">
                    <img
                        src={image.url}
                        alt={image.title || image.description}
                        width={image.width}
                        height={image.height}
                        className="animate-reveal"
                    />
                </div>
            )}
        </div>
    )
}

export default JourneyCard
