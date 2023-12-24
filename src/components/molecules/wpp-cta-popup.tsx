"use client";

import WhatsappIcon from "@/assets/whatsapp-icon.svg";
export interface WppCtaPopupProps {}

export default function WppCtaPopup({}: WppCtaPopupProps) {
  return (
    <div className="fixed bottom-8 right-5 bg-green-500 z-[99] p-4 rounded-full rounded-bl-sm">
      <a
        target="_blank"
        href="https://wa.me/5541998099108?text=Ola%20Gabriel.%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20com%20voce."
      >
        <WhatsappIcon className="w-5 h-5 md:w-10 md:h-10" />
      </a>
    </div>
  );
}
