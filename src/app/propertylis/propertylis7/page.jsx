"use client"
import Image from "next/image"
import { MapPin, Star } from "lucide-react"
import RentalPropertyPage from "@/components/atom/propertyCard"
import { api, ENDPOINT } from "@/lib/api"
import { toast } from "sonner"

const handleAddToWishlist = async () => {
  const listing = {
     id: 11,
    title: "Beachfront Villa",
    location: "Malibu, New York",
    price: 8500,
  
    bedrooms: 4,
    image: "/img17.jpg",
  }
  
  try {
 
   
    const userCheck = await api.get(ENDPOINT.user);
 
    
  
    const res = await api.post(ENDPOINT.addToWishlist, listing);
   
    
    if (res.data.status === "success") {
      toast("Added to wishlist successfully!");
    } else {
      toast("Failed to add to wishlist");
    }
  } catch (err) {
    console.error('Full error object:', err);
    console.error('Error response:', err.response?.data);
    console.error('Error status:', err.response?.status);
    
    if (err.response?.status === 401) {
      toast.error("Please login first to add items to wishlist");
    } else {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  }
}



export default function LuxuryRetreatListing() {
  return (
    <>
  
    <div className="min-h-screen bg-white pt-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500 uppercase tracking-wide">
            <span className="hover:text-gray-700 cursor-pointer">HOME</span>
            <span>/</span>
            <span className="hover:text-gray-700 cursor-pointer">LISTINGS</span>
            <span>/</span>
            <span className="text-gray-700">New York</span>
          </div>
        </nav>

       
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">Beachfront Villa</h1>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-lg">Malibu, NewYork</span>
            </div>
          </div>

       
           <div className="bg-purple-600 text-white px-4 py-2 rounded-sm flex items-center" onClick={handleAddToWishlist}>
                   <Star className="w-4 h-4 mr-2 fill-current" />
                   <span className="text-sm font-medium tracking-wide cursor-pointer">Add To WishList</span>
                 </div>
            </div>

   
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[600px]">
         
          <div className="lg:col-span-8 h-64 sm:h-80 lg:h-full">
            <div className="relative h-full rounded-lg overflow-hidden">
              <Image
                src="/img40.jpg"
                alt="Modern luxury house exterior"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
           
            <div className="relative h-64 lg:h-[145px]">
              <div className="relative h-full rounded-lg overflow-hidden">
                <Image
                  src="/img41.jpg"
                  alt="Modern bedroom interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

           
            <div className="relative h-64 lg:h-[145px]">
              <div className="relative h-full rounded-lg overflow-hidden">
                <Image
                  src="/img42.jpg"
                  alt="Contemporary living room"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          
            <div className="relative h-64 lg:h-[145px]">
              <div className="relative h-full rounded-lg overflow-hidden">
                <Image
                  src="/img41.jpg"
                  alt="Luxury marble bathroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

        
            <div className="relative h-64 lg:h-[145px]">
              <div className="relative h-full rounded-lg overflow-hidden">
                <Image
                  src="/img42.jpg"
                  alt="Modern kitchen with island"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

           <RentalPropertyPage
                        brokerId="687fccfcacdbea444f5e43d1"
                        brokerImage="/brokerimg4.png"
                        brokerName="Smith paul"
                        brokerLocation="New York, USA"
                        propertyId={11}
                        title= "Beachfront villa"
                        location= "Malibu, New York"
                        image="/img17.jpg"
                        price={85000}
                        guest={2}
                        bedrooms={4}
                        
                        />

     
    </>
  )
}
