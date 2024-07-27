import Link, { LinkProps } from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { FC } from "react";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

type ProjectCardProps = Omit<LinkProps, "href"> & {
  href: string;
  className?: string;
};

const ProjectCard: FC<ProjectCardProps> = ({ href, className, ...props }) => {
  return (
    <Link
      {...props}
      className={cn(
        "flex flex-col gap-2 h-auto select-none cursor-pointer transition-all bg-white hover:bg-gray-50 border border-solid border-neutral-400/10 rounded-md w-full p-2 pb-0",
        className
      )}
      href={`${href}`}
    >
      <Card className="!p-0 bg-transparent border-none shadow-none">
        <CardHeader className="p-0">
          <img
            className="w-full object-cover h-44"
            src="https://www.pixeden.com/media/k2/galleries/1457/001-abstract-geometric-presentation-device-UI-scene-project-psd-graphic-web.jpg"
            alt="adas"
          />
        </CardHeader>
        <Separator />
        <div className="flex flex-col pt-2 gap-2">
          <CardTitle className="text-[0.954rem] font-normal tracking-normal">
            Lorem ipsum dolor sit amet consectetur.
          </CardTitle>
          <CardDescription className="text-[0.954rem] line-clamp-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            voluptas minima veritatis vel cupiditate amet doloribus maiores
            aliquid, quo tempore quod nihil culpa optio eum.
          </CardDescription>
          <div className="flex gap-2">
            {["Next.js", "TailwindCSS"].map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </div>
          <CardDescription className="text-[0.954rem]">
            October 06, 2023 * 52.123 views
          </CardDescription>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;
