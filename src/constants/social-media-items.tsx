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
    href: "https://wa.me/5541998099108?text=Ola%20Gabriel.%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20com%20voce.",
    label: "whatsapp",
    icon: <WhatsappIcon />,
  },
];
