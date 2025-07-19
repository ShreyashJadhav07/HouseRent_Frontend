import HelpingComponent from "@/components/section/helping"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Bed } from "lucide-react"
import Link from "next/link"

const listing = [
  {
    id: 1,
    title: "Luxury Retreat",
    location: "Pacific, Denver",
    price: 270000,
   
    bedrooms: 3,
    image: "/img4.jpg",
    href:"/propertylis/propertylis1"
  },
  {
    id: 2,
    title: "Modern Chic",
    location: "Murray Hill, Denver",
    price: 210000,
   
    bedrooms: 3,
    image: "/img6.jpg",
      href:"/propertylis/propertylis2"
  },
  {
    id: 3,
    title: "Panoramic Views",
    location: "Biltmore, Denver",
    price: 110000,
   
    bedrooms: 2,
    image: "/img7.jpg",
      href:"/propertylis/propertylis3"
  },
  {
    id: 4,
    title: "Seaside Paradise",
    location: "La Jolla, San Los Angeles",
    price: 1000000,
 
    bedrooms: 4,
    image: "/img5.jpg",
      href:"/propertylis/propertylis4"
  },
  {
    id: 9,
    title: "Mountain Escape",
    location: "Aspen, Colorado",
    price: 45000,
    
    bedrooms: 3,
    image: "/img15.jpg",
      href:"/propertylis/propertylis5"
  },
  {
    id: 10,
    title: "Urban Oasis",
    location: "Downtown, Chicago",
    price: 32000,
 
    bedrooms: 2,
    image: "/img16.jpg",
      href:"/propertylis/propertylis6"
  },
  {
    id: 11,
    title: "Beachfront Villa",
    location: "Malibu, California",
    price: 85000,
  
    bedrooms: 4,
    image: "/img17.jpg",
      href:"/propertylis/propertylis7"
  },
  {
    id: 12,
    title: "Historic Charm",
    location: "Savannah, Georgia",
    price: 18000,

    bedrooms: 2,
    image: "/img18.jpg",
      href:"/propertylis/propertylis8"
  },
]

export default function ListingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-black">
              All Listings
            </h1>
            <div className="flex gap-4">
              
              <select className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-blue-300 transition-colors">
                <option>Select by Location</option>
              </select>
            </div>
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
              // key={item.id}
              className="group cursor-pointer border-0 shadow-none bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Featured Badge */}
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full shadow-lg">
                      ★ FEATURED
                    </span>
                  </div>
                  
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
                      ${item.price}
                    </span>
                   
                  </div>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>
      </section>
      <div className="flex justify-center mt-1 mb-5">
 <Link
    href="/listings/listings2"
    className="px-5 py-2 border border-gray-300 rounded-md bg-white text-black font-medium shadow-sm hover:bg-gray-100 transition"
  >
    Next
  </Link>
</div>
      <HelpingComponent/>
    </div>
  )
}