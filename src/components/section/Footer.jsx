import Link from "next/link"
import { Home, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    main: [
      { name: "Home", href: "/" },
      { name: "Listings", href: "/listings" },
      { name: "Listing Single", href: "/listing" },
      { name: "Locations", href: "/locations" },
    ],
    info: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Blog", href: "/blog" },
      { name: "Amenities", href: "/amenities" },
    ],
    others: [
      { name: "List Your Place", href: "/list-property" },
      { name: "Instructions", href: "/instructions" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
    utilities: [
      { name: "Style Guide", href: "/style-guide" },
      { name: "Licenses", href: "/licenses" },
      { name: "Password", href: "/password" },
      { name: "404", href: "/404" },
    ],
  }

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Social Media */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <Home className="w-6 h-6 text-white" />
              <span className="text-xl font-semibold">HomeEasy</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Main Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Main</h3>
            <ul className="space-y-4">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Info</h3>
            <ul className="space-y-4">
              {footerLinks.info.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Others Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Others</h3>
            <ul className="space-y-4">
              {footerLinks.others.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Utilities Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Utilities</h3>
            <ul className="space-y-4">
              {footerLinks.utilities.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            {/* Copyright */}
            <div>© HomeEasy. All Rights Reserved.</div>


          </div>
        </div>
      </div>
    </footer>
  )
}
