"use client";

import GithubIcon from "@/assets/github-icon.svg";
import LinkedinIcon from "@/assets/linkedin-icon.svg";
import WhatsappIcon from "@/assets/whatsapp-icon.svg";

import { SocialMediaItemType } from "@/types/social-media-items";

export const socialMediaItems: SocialMediaItemType[] = [
  {
    href: "https://www.linkedin.com/in/gabriel-messias-rosa/",
    label: "linkedIn",
    icon: <LinkedinIcon />,
  },
  {
    href: "https://github.com/GabrielMessiasdaRosa",
    label: "github",
    icon: <GithubIcon />,
  },
  {
    href: "https://www.linkedin.com/in/gabriel-messias-rosa/",
    label: "whatsapp",
    icon: <WhatsappIcon />,
  },
];
