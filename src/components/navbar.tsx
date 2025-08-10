"use client";

import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a href={href || "#"} className="flex items-center gap-2 font-medium">
        {children}
      </a>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "About Us",
    children: [
      { name: "Mission and Purpose", href: "/mission" },
      { name: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    name: "Resources",
    children: [
      { name: "For professionals", href: "/resources/professionals" },
      { name: "For patients/general public", href: "/resources/patients" },
      {
        name: "For prospective and current GC students",
        href: "/resources/students",
      },
    ],
  },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const [isScrolling, setIsScrolling] = React.useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isSolid = !isHome || isScrolling;

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color={isSolid ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/"
          className={`text-lg font-bold cursoer-pointer ${
            isSolid ? "text-blue-gray-900" : "text-white"
          }`}
        >
          GCAN Logo
        </Link>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isSolid ? "text-gray-900" : "text-white"
          }`}
        >
          {NAV_MENU.map((item) =>
            item.children ? (
              <li key={item.name}>
                <Menu
                  allowHover
                  placement="bottom-start"
                  offset={{ mainAxis: 10 }}
                >
                  <MenuHandler>
                    <button className="flex items-center gap-1 font-medium">
                      <span>{item.name}</span>
                      <ChevronDownIcon className="h-4 w-4" />
                    </button>
                  </MenuHandler>
                  <MenuList className="min-w-[14rem]">
                    {item.children.map((child) => (
                      <MenuItem key={child.name} className="p-0">
                        <a href={child.href} className="block px-3 py-2">
                          {child.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </li>
            ) : (
              <NavItem key={item.name} href={item.href}>
                <span>{item.name}</span>
              </NavItem>
            )
          )}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          <Button color={isScrolling ? "gray" : "white"} variant="text">
            Donate
          </Button>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-2 text-gray-900">
            {NAV_MENU.map((item) => (
              <li key={item.name}>
                {item.href ? (
                  <a href={item.href} className="block py-2 font-medium">
                    {item.name}
                  </a>
                ) : (
                  <div className="py-2 font-semibold">{item.name}</div>
                )}
                {item.children && (
                  <ul className="ml-4 mt-1 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <li key={child.name}>
                        <a href={child.href} className="block py-1 text-sm">
                          - {child.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <a href="/contact-us" target="_blank">
              <Button color="gray">Donate</Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
