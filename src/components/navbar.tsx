"use client";

import NavbarItem, { NavbarItemProps } from "@/components/navbar-item";
import { MotionValue, useTransform } from "framer-motion";
import React, { useRef } from "react";
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
      className="backdrop-blur-3xl bg-transparent"
    >
      <NavbarBrand>
        <div>
          <p>Gabriel Messias da Rosa</p>
          <sup>desenvolvedor front-end</sup>
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
      </NavbarMenu>
    </NUINavbar>
  );
}

const menuItems: NavbarItemProps["item"][] = [
  {
    href: "/",
    label: "~/Home",
  },
  {
    href: "/contato",
    label: "~/Contato",
  },
  {
    href: "/projetos",
    label: "~/Projetos",
  },
];
