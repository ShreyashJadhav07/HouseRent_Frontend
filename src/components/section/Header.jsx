"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";
import ProfileSheet from "../atom/ProfileSheet";

export const navigationItems = [
  { name: "HOME", href: "/" },
  { name: "LISTINGS", href: "/listings" },
  { name: "LOCATIONS", href: "/locations" },
  { name: "WISHLIST", href: "/watchlist" },
  { name: "PREMIUM", href: "/premium" },
  { name: "ABOUT US", href: "/about" },
  { name: "CONTACT US", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white text-black shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 " />
            <span className="text-xl font-semibold text-fuchsia-600 ">HomeEasy</span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8  text-fuchsia-600">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors "
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* ProfileSheet */}
          <div className="ml-4">
            <ProfileSheet />
          </div>
        </div>
      </div>
    </header>
  );
}