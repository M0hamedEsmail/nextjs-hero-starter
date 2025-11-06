"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";

// Logo component with developer initials
const Logo = () => {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
      ME
    </div>
  );
};

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Navigation menu items with links
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "GitHub", href: "https://github.com/m0hamedesmail" },
    { name: "NPM Profile", href: "https://www.npmjs.com/~m0hamedesmail" },
    { name: "This Package", href: "https://www.npmjs.com/package/next-hero-starter" },
  ];

  return (
    <Navbar 
      isBordered 
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen} 
      maxWidth="full"
    >
      {/* Mobile menu toggle */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"} 
        />
      </NavbarContent>

      {/* Mobile brand */}
      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          <Logo />
          <p className="ml-2 font-bold text-inherit">m0hamedesmail</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop navigation */}
      <NavbarContent className="hidden gap-4 sm:flex" justify="start">
        <NavbarBrand>
          <Logo />
          <p className="ml-2 font-bold text-inherit">m0hamedesmail</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop menu items */}
      <NavbarContent className="hidden gap-6 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="https://github.com/m0hamedesmail" target="_blank">
            GitHub
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="https://www.npmjs.com/~m0hamedesmail" target="_blank">
            NPM Profile
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="https://www.npmjs.com/package/next-hero-starter" target="_blank">
            This Package
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item.href}
              size="lg"
              target={item.href.startsWith("http") ? "_blank" : undefined}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

