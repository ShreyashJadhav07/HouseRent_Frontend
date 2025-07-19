"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Home, Menu, Twitter, Facebook, Instagram } from "lucide-react"
import { useState } from "react"

const navigationItems = [
  { name: "HOME", href: "/" },
  { name: "LISTINGS", href: "/listings" },
  { name: "LOCATIONS", href: "/locations" },
  { name: "WISHLIST", href: "/wishlist"},
  { name: "PREMIUM", href: "/premium" },
  { name: "ABOUT US", href: "/about" },


  { name: "CONTACT US", href: "/contact" },
]

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <header
      className={`top-0 left-0 w-full z-50 transition-all duration-300
        ${isHome ? "absolute bg-transparent text-white" : "bg-white text-black shadow"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6" />
            <span className="text-xl font-semibold">HomeEasy</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors 
                  ${isHome ? "hover:text-gray-300" : "hover:text-gray-700"}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className={`transition-colors 
                  ${isHome ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"}`}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden hover:bg-gray-100 
                  ${isHome ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"}`}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-white text-black border-l border-gray-200"
            >
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="flex items-center space-x-2 mb-6">
                  <Home className="h-6 w-6" />
                  <span className="text-xl font-semibold">Rentalz</span>
                </Link>

                <nav className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium hover:text-gray-700 transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="flex items-center space-x-4 pt-6 border-t border-gray-300">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      className="hover:text-gray-700 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
