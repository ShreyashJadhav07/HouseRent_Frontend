import HelpingComponent from "@/components/section/helping"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Bed } from "lucide-react"
import Link from "next/link"

const listing = [
  {
    id: 19,
    title: "Luxury Retreat",
    location: "Pacific, Seattle",
    price: 2700,
    guests: 2,
    bedrooms: 2,
    image: "/img29.jpg",
     href:"/propertylis/propertylis17"
  },
  {
    id: 20,
    title: "Modern Chic",
    location: "Murray Hill, Seattle",
    price: 2100,

    bedrooms: 1,
    image: "/img28.jpg",
     href:"/propertylis/propertylis18"
  },
  {
    id: 21,
    title: "Panoramic Views",
    location: "Biltmore, Seattle",
    price: 1100,

    bedrooms: 2,
    image: "/img27.jpg",
     href:"/propertylis/propertylis19"
  },
 

]
export default function ListingsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-black">
              All Listings
            </h1>
          <Link
              href="/locations"
              >

              <Button className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded font-semibold  ">
                See By Locations
              </Button>
              </Link>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {listing.map((item) => (
            <Link 
            key={item.id}
            href={item.href}
            >
            <Card
              
              className="group cursor-pointer border-0 shadow-none bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Featured Badge */}
                <div className="relative">
                 
                  
                  {/* Property Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-6 space-y-4">
                  {/* Guests and Bedrooms */}
                  <div className="flex items-center gap-6 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-500" />
                 
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-blue-500" />
                      <span className="font-medium">
                        {item.bedrooms} Bedroom{item.bedrooms > 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Location */}
                  <p className="text-slate-500 text-sm font-medium tracking-wide">
                    {item.location}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 pt-2">
                    <span className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                      ${item.price} / night
                    </span>
              
                  </div>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>
      </section>
<div className="flex justify-center gap-4 mt-5 mb-7">
  <Link
    href="/listings/listings2"
 className=" bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded font-semibold inline-block"
  >
    Previous
  </Link>
  <Link
    href="/listings/listings3"
 className=" bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded font-semibold inline-block"
  >
    Next
  </Link>
</div>


      <HelpingComponent/>
    </div>
  )
}