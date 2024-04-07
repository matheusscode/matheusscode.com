import {
  CustomLinkProps,
  NavigationLinkProps,
} from "@/types/navigation-link-props";
import {
  ArmchairIcon,
  ArrowUpRight,
  BookmarkIcon,
  GithubIcon,
  Home,
  InstagramIcon,
  LinkedinIcon,
  NavigationIcon,
  PencilLineIcon,
  SparklesIcon,
  TwitterIcon,
  Wand2Icon,
  YoutubeIcon,
} from "lucide-react";

export const PAGE_LINKS: CustomLinkProps[] = [
  {
    id: 1,
    path: "/",
    label: "Home",
    iconLeft: SparklesIcon,
  },
  {
    id: 2,
    path: "/writing",
    label: "Writing",
    iconLeft: PencilLineIcon,
  },
  {
    id: 3,
    path: "/journey",
    label: "Journey",
    iconLeft: NavigationIcon,
  },
  {
    id: 4,
    path: "/stack",
    label: "Stack",
    iconLeft: Wand2Icon,
  },
  {
    id: 5,
    path: "/workspaces",
    label: "Workspaces",
    iconLeft: ArmchairIcon,
  },
  {
    id: 6,
    path: "/bookmarks",
    label: "Bookmarks",
    iconLeft: BookmarkIcon,
  },
];

export const SOCIAL_LINKS: CustomLinkProps[] = [
  {
    id: 1,
    path: "https://github.com/matheusscode",
    label: "Github",
    iconLeft: GithubIcon,
    iconRight: ArrowUpRight,
  },
  {
    id: 1,
    path: "https://www.linkedin.com/in/matheussfigueiredo/",
    label: "Linkedin",
    iconLeft: LinkedinIcon,
    iconRight: ArrowUpRight,
  },
  {
    id: 1,
    path: "https://www.instagram.com/matheusscode/",
    label: "Instagram",
    iconLeft: InstagramIcon,
    iconRight: ArrowUpRight,
  },
  {
    id: 1,
    path: "https://www.youtube.com/channel/UCiH_b6nMZNRYvRB86ApXKNA",
    label: "Youtube",
    iconLeft: YoutubeIcon,
    iconRight: ArrowUpRight,
  },
  {
    id: 1,
    path: "https://twitter.com/matheussdev3",
    label: "X (Twitter)",
    iconLeft: TwitterIcon,
    iconRight: ArrowUpRight,
  },
];
