"use client";

import React from "react";
import { Link, NavbarItem as NUINavbarItem } from "./next-ui-exports";

export interface NavbarItemProps {
  item: {
    href: string;
    label: string;
  };
}

export default function NavbarItem({ item }: NavbarItemProps) {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    setIsActive(item.href === window.location.pathname);
  }, []);

  return (
    <NUINavbarItem
      key={item.label}
      className="active:scale-95"
      isActive={isActive}
    >
      <Link className="hover:text-primary-800 text-primary-500" href={item.href}>
        {item.label}
      </Link>
    </NUINavbarItem>
  );
}
