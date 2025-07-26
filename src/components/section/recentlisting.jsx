import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Bed } from "lucide-react"
import Link from "next/link"

const listings = [
  {
    id: 1,
    title: "Luxury Retreat",
    location: "Pacific, Denver",
    price: 2700,
   
    bedrooms: 3,
    image: "/img4.jpg",
     href:"/propertylis/propertylis1"
  },
  {
    id: 2,
    title: "Modern Chic",
    location: "Murray Hill, Denver",
    price: 2100,
   
    bedrooms: 3,
    image: "/img6.jpg",
    href:"/propertylis/propertylis2"
  },
  {
    id: 3,
    title: "Panoramic Views",
    location: "Biltmore, Denver",
    price: 1100,
   
    bedrooms: 2,
    image: "/img7.jpg",
    href:"/propertylis/propertylis3"
  },
  {
    id: 4,
    title: "Seaside Paradise",
    location: "La Jolla,Los Angeles",
    price: 1000,
 
    bedrooms: 4,
    image: "/img5.jpg",
    href:"/propertylis/propertylis4"
  },
]

export default function RecentListings() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">
      
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8 md:mb-12">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Recent Listings</h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
            We aim to make the rental process straightforward and transparent, ensuring that you find the perfect home
            and have a positive experience from start to finish.
          </p>
        </div>
        <Link
        href={"/listings"}
        className="cursor-pointer hover:scale-105 transition-transform duration-300"
        >

      <p className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent cursor-pointer">
  {"< SEE ALL LISTINGS"}
    </p>

        </Link>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {listings.map((listing) => (
          <Link
          key={listing.id}
          href={listing.href}
          >
          <Card
           
            className="group cursor-pointer border-0 shadow-none hover:shadow-lg transition-shadow duration-300"
          >
            <CardContent className="p-0">
              
              <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 968px) 100vw, (max-width: 12000px) 50vw, 25vw"
                />
              </div>

             
              <div className="space-y-3">
                
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-blue-500" />
                
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4 text-blue-500" />
                    <span>
                      {listing.bedrooms} Bedroom{listing.bedrooms > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>

             
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  {listing.title}
                </h3>

              
                <p className="text-gray-600 text-sm">{listing.location}</p>

                
                <p className="text-gray-900 font-medium">
                  <span className="text-lg 900 group-hover:text-blue-700 transition-colors duration-300">${listing.price} / night</span>
                  <span className="text-gray-600"> </span>
                </p>
              </div>
            </CardContent>
          </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}


