"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import CoffeeLogo from "./icons/CoffeeLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/order", label: "Order" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* <Coffee className="h-6 w-6 text-gray-900" /> */}
          <CoffeeLogo className=" text-gray-900" />
          <span className="font-semibold text-lg text-gray-900">
            Brew-Bite Cafe
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative text-sm font-medium transition-colors",
                  isActive
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                )}
              >
                {link.label}

                {/* Active underline */}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 right-0 mx-auto h-[2px] w-6 rounded-full bg-orange-500" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
