"use client";

import { menuItems } from "@/constants/menu-items";
import { useState } from "react";
import NavbarItem from "../molecules/navbar-item";
import {
  Navbar as NUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
} from "../next-ui-exports";
export interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  

  return (
    <NUINavbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      data-te-smooth-scroll-init
      data-te-easing="easeInOutQuart"
      className="backdrop-blur-3xl bg-black flex"
    >
      <NavbarBrand>
        <div className="flex gap-2 items-center">
          <p className="font-major-mono font-extrabold text-4xl">GMR</p>
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem item={item} key={index} />
        ))}
      </NavbarContent>
      <NavbarMenuToggle
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarMenu className="bg-black">
        {menuItems.map((item, index) => (
          <NavbarItem
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            item={item}
            key={`${item}` + `${index}`}
          />
        ))}
      </NavbarMenu>
    </NUINavbar>
  );
}
