import { Monitor, Wind, Dumbbell, WashingMachine, Waves, Car, Wifi } from "lucide-react"

export default function AminitesComponent() {
  const amenities = [
    {
      icon: Monitor,
      label: "TV",
    },
    {
      icon: Wind,
      label: "Air Conditioning",
    },
    {
      icon: Dumbbell,
      label: "Gym",
    },
    {
      icon: WashingMachine,
      label: "Washing Machine",
    },
    {
      icon: Waves,
      label: "Pool",
    },
    {
      icon: Car,
      label: "Garage",
    },
    {
      icon: Wifi,
      label: "Wifi",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
       
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Amenities</h2>

       
        <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
          You can find detailed information about each rental, including photos, amenities, location, and rental terms.
        </p>

      
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 md:gap-12">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon
            return (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 group-hover:shadow-md transition-shadow duration-200">
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-gray-700" />
                </div>
                <span className="text-sm md:text-base font-medium text-gray-700 text-center">{amenity.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
