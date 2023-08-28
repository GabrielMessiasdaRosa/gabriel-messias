"use client";

import { menuItems } from "@/constants/menu-items";
import { socialMediaItems } from "@/constants/social-media-items";

export interface FooterContentProps {}

export default function FooterContent({}: FooterContentProps) {
  return (
    <div className="flex justify-between flex-1">
      <div className="flex-1 border-l-2 border-primary-500 pl-2 space-y-10">
        {menuItems.map((item, index) => (
          <a
            key={`${item.label}-footer-${index}`}
            className="flex w-fit"
            href={item.href}
            target="_blank"
          >
            <h5 className="text-primary-500 transition-all hover:-translate-y-1 hover:text-white font-prompt text-lg lg:text-xl hover-effect">
              {item.label}
            </h5>
          </a>
        ))}
      </div>
      <div className="flex-1 border-l-2 border-primary-500 pl-2 space-y-10">
        {socialMediaItems.map((item, index) => (
          <div key={`${item.label}-footer-${index}`} className="w-fit">
            <a className="flex w-fit" href={item.href} target="_blank">
              <div className="w-8 h-8">{item.icon}</div>
              <h5 className="text-primary-500 transition-all hover:-translate-y-1 hover:text-white font-prompt text-lg lg:text-xl hover-effect">
                {item.label}
              </h5>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
