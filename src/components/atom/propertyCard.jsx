import Image from "next/image"
import { Users, Bed } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function RentalPropertyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content - About Section */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6">About this Rental</h1>

            {/* Property Details */}
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-5 h-5" />
                <span>2 Guests</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Bed className="w-5 h-5" />
                <span>1 Bedroom</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Welcome to our stylish and spacious apartment. This two-bedroom gem offers a modern and comfortable
                retreat for up to four guests.
              </p>

              <p>
                Upon entering, you'll be greeted by a tastefully furnished living room, featuring a cozy sofa, a large
                TV, and a dining area with seating for four. The open-concept layout seamlessly connects the living room
                with the fully equipped kitchen, boasting top-of-the-line appliances and all the essentials for
                preparing delicious meals.
              </p>

              <p>
                The master bedroom features a comfortable queen-sized bed, while the second bedroom offers a cozy double
                bed. Both bedrooms come with ample storage space and are designed to ensure a restful night's sleep.
              </p>

              <p>Don't miss out on this fantastic opportunity. Book your stay in our apartment today!</p>
            </div>

            {/* Property Images */}
            <div className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/img44.jpg"
                    alt="Modern kitchen and dining area"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/img45.jpg"
                    alt="Stylish living room"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/img46.jpg"
                    alt="Comfortable bedroom"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Card */}
          <div className="lg:col-span-1">
            <Card className="top-8 shadow-lg border-gray-200">
              <CardContent className="p-6">
                {/* Pricing */}
<div className="mb-6 flex flex-col items-center text-center">
  <img
    src="/brokerimg2.png"
    alt="Broker"
    className="w-30 h-30 rounded-full object-cover border border-gray-300 mb-2"
  />
  <div className="text-lg font-semibold text-gray-900">Justin Kane</div>
  <div className="text-sm text-gray-600 font-medium">Broker</div>
  <div className="mt-1 text-sm text-green-600 font-medium">✔ Verified Broker</div>
  <div className="text-sm text-gray-500">📍 Mumbai, India</div>
  <div className="mt-2 text-xs text-gray-600 px-4">
    Helping you find your perfect home in the city.
  </div>
</div>


                {/* Booking Form */}
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors"
                    />
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-colors">
                    Book Appointment
                  </Button>
                </form>

                {/* Questions Link */}
                <div className="mt-6 text-center">
                  <button className="text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors">
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
