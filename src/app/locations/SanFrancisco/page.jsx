import HelpingComponent from "@/components/section/helping"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Bed } from "lucide-react"
import Link from "next/link"

const listing = [
 {
    id: 18,
    title: "Historic Charm",
    location: "Savannah, San Francisco",
    price: 1800,
    bedrooms: 2,
    image:  "/img26.jpg",
    href:"/propertylis/propertylis16"
  },

]

export default function sanFranciscoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-12">
      <section className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">
    
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-black">
            SanFrancisco
            </h1>
            <div className="flex gap-4">
              <Link
              href="/locations"
              >

              <Button className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded font-semibold  ">
                See By Locations
              </Button>
              </Link>
              
             
            </div>
          </div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {listing.map((item) => (
            <Link
              key={item.id}
              href={item.href}
            >
            <Card
              key={item.id}
              className="group cursor-pointer border-0 shadow-none bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-0">
               
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                   
                  </div>
                  
                 
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                <div className="p-6 space-y-4">
           
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

                
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                    {item.title}
                  </h3>

                  
                  <p className="text-slate-500 text-sm font-medium tracking-wide">
                    {item.location}
                  </p>

                 
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
      
      <HelpingComponent/>
    </div>
  )
}