import { Search, Mail, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HelpingComponent() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">We're Here To Help</h2>

        {/* Services Grid */}
        <div className="space-y-12">
          {/* Discover Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left min-w-[120px]">
              <div className="w-16 h-16 rounded-full border-2 border-gray-900 flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Discover</h3>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-gray-700 text-lg leading-relaxed">
                With our intuitive search and filtering options, locating your dream rental has never been easier
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
              href="/listings"
              className="cursor-pointer"
              >
              <Button variant="ghost" className="text-gray-900 hover:text-gray-700 font-medium group cursor-pointer">
                VIEW LISTINGS
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
            </div>
          </div>

          {/* Inquire Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left min-w-[120px]">
              <div className="w-16 h-16 rounded-full border-2 border-gray-900 flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Inquire</h3>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-gray-700 text-lg leading-relaxed">
                Our dedicated team is here to answer any questions you may have and provide any additional information.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/contactUS"
              className="cursor-pointer"
              >
              <Button variant="ghost" className="text-gray-900 hover:text-gray-700 font-medium group cursor-pointer">
                CONTACT US
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
            </div>
          </div>

          {/* List Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left min-w-[120px]">
              <div className="w-16 h-16 rounded-full border-2 border-gray-900 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">List</h3>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-gray-700 text-lg leading-relaxed">
                No matter the type of property you own, our platform connects you with a global community of renters
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
              href="/contactUS"
              >
              
              <Button variant="ghost" className="text-gray-900 hover:text-gray-700 font-medium group cursor-pointer">
                APPLY & EARN
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
