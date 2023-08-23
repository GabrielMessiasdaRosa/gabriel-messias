"use client";

import React from "react";
import NavbarItem, { NavbarItemProps } from "./navbar-item";
import {
  Navbar as NUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
} from "./next-ui-exports";
export interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <NUINavbar
      onMenuOpenChange={() => setIsMenuOpen(!isMenuOpen)}
      shouldHideOnScroll
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
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden "
      />
      <NavbarMenu className="bg-black">
        {menuItems.map((item, index) => (
          <NavbarItem item={item} key={`${item}` + `${index}`} />
        ))}
        <NavbarItem item={{ href: "#projects", label: "projects" }} />
      </NavbarMenu>
    </NUINavbar>
  );
}

const menuItems: NavbarItemProps["item"][] = [
  {
    href: "/",
    label: "~/home",
  },
  {
    href: "/#projects",
    label: "~/trajetoria",
  },
  {
    href: "/#contato",
    label: "~/contato",
  },
];
