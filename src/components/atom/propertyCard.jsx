

import Image from "next/image"
import { Users, Bed } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { api, ENDPOINT } from "@/lib/api"
import { toast } from "sonner"
import { useDispatch, useSelector } from "react-redux"
import { userLoggedInDetails } from "@/redux/userSlice"
import { useRouter } from "next/navigation"

export default function RentalPropertyPage({
  brokerId,
  brokerImage,
  brokerName,
  brokerLocation,
  propertyId,
  title,
  location,
  image,
  price,
  guest,
  bedrooms,
}) {
  const [isLoading, setLoading] = useState(false)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const userData=useSelector((state) => state.user)
  const dispatch=useDispatch()
  const router=useRouter();

  const handleBookAppointment = async () => {

    if (!fullName || !email || !phone) {
      toast.error("Please fill all fields.")
      return
    }
    if(!userData.isLoggedIn){
      toast("Please Login to Book Appointment");
      router.push("/login")
      return
    }

    try {
      setLoading(true)
      const payload = {
        fullName,
        email,
        phone,
        propertyId,
        brokerId,
        brokerName,
        brokerLocation,
        propertyTitle: title, 
        location,
        image,
        price,
        guest,
        bedrooms
      }
   

      const res = await api.post(ENDPOINT.bookAppointment, payload)

      if (res.data.status === "success") {
      
        dispatch(userLoggedInDetails(res.data.user))
        toast.success("Broker Will Sent Confirmation  to your  email.")
        setFullName("")
        setEmail("")
        setPhone("")
      } else {
        toast.error(res.data.message || "Failed to book appointment")
      }
    } catch (error) {
      console.error("Booking error:", error)
      toast.error("Something went wrong. Try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6">About this Rental</h1>

           
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-5 h-5" />
                <span>{guest || 2} Guests</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Bed className="w-5 h-5" />
                <span>{bedrooms || 1} Bedroom{bedrooms > 1 ? "s" : ""}</span>
              </div>
            </div>

         
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Welcome to our stylish and spacious apartment. This two-bedroom gem offers a modern and comfortable
                retreat for up to four guests.
              </p>
              <p>
                The open-concept layout seamlessly connects the living room with the fully equipped kitchen, boasting top-of-the-line appliances.
              </p>
              <p>
                Both bedrooms come with ample storage space and are designed to ensure a restful night's sleep.
              </p>
              <p>Don't miss out on this fantastic opportunity. Book your stay in our apartment today!</p>
            </div>

         
            <div className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["/img44.jpg", "/img45.jpg", "/img46.jpg"].map((img, i) => (
                  <div key={i} className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt="Apartment view"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

       
          <div className="lg:col-span-1">
            <Card className="top-8 shadow-lg border-gray-200">
              <CardContent className="p-6">
                
                <div className="mb-6 flex flex-col items-center text-center">
                  <img
                    src={brokerImage}
                    alt="Broker"
                    className="w-30 h-30 rounded-full object-cover border border-gray-300 mb-2"
                  />
                  <div className="text-lg font-semibold text-gray-900">{brokerName}</div>
                  <div className="text-sm text-gray-600 font-medium">Broker</div>
                  <div className="mt-1 text-sm text-green-600 font-medium">✔ Verified Broker</div>
                  <div className="text-sm text-gray-500">📍 {brokerLocation}</div>
                  <div className="mt-2 text-xs text-gray-600 px-4">
                    Helping you find your perfect home in the city.
                  </div>
                </div>

             
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <Button
                    onClick={handleBookAppointment}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium"
                    disabled={isLoading}
                  >
                    {isLoading ? "Booking..." : "Book Appointment"}
                  </Button>
                </form>

               
                <div className="mt-6 text-center">
                  <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                    HAVE QUESTIONS?
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
