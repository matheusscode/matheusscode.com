import { FC } from "react";

export type JourneyDataProps = {
  title?: string;
  description?: string;
  image?: {
    url: string;
    title: string;
    description: string;
    width: string | number;
    height: string | number;
  };
  index?: number;
};

export type JourneyCardProps = {
  content: JourneyDataProps;
};

const JourneyCard: FC<JourneyCardProps> = ({ content }) => {
  return (
    <div className="word-break-word flex flex-col gap-2 h-auto pb-14">
      <h1 className="font-semibold tracking-tight text-xl">{content.title}</h1>
      <p>{content.description}</p>
      {content.image?.url && (
        <div className="mt-2.5 overflow-hidden rounded-xl bg-white">
          <img
            src={content.image.url}
            alt={content.image.title}
            width={content.image.width}
            height={content.image.height}
            className="animate-reveal"
          />
        </div>
      )}
    </div>
  );
};

export default JourneyCard;
