"use client";

import { NavbarItemType } from "@/types/navbar-item-type";
import Link from "next/link";
import React from "react";
import { NavbarItem as NUINavbarItem } from "./next-ui-exports";

export interface NavbarItemProps {
  item: NavbarItemType;
  onClick?: () => void;
}

export default function NavbarItem({ item, onClick }: NavbarItemProps) {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    setIsActive(item.href === window.location.pathname);
  }, []);

  return (
    <NUINavbarItem
      key={item.label}
      onClick={onClick}
      className="active:scale-95"
      isActive={isActive}
    >
      <Link
        className="transition-all text-primary-500 hover-effect hover:text-white "
        href={item.href}
      >
        {item.label}
      </Link>
    </NUINavbarItem>
  );
}
