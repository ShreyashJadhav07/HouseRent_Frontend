import Image from "next/image"

export default function AllLocations() {
  const locations = [
    {
      name: "Denver",
      image: "/img30.jpg",
      alt: "Denver city skyline at sunset",
    },
    {
      name: "Los Angeles",
      image: "/img31.jpg",
      alt: "Los Angeles downtown with palm trees",
    },
    {
      name: "New York City",
     image: "/img32.jpg",
      alt: "Statue of Liberty in New York",
    },
    {
      name: "Phoenix",
      image: "/img33.jpg",
      alt: "Phoenix desert landscape with cactus",
    },
    {
      name: "San Diego",
      image: "/img34.jpg",
      alt: "San Diego coastline and beach",
    },
    {
      name: "San Francisco",
     image: "/img35.jpg",
      alt: "Golden Gate Bridge in San Francisco",
    },
    {
      name: "Seattle",
      image: "/img36.jpg",
      alt: "Seattle skyline with Space Needle",
    },
    {
      name: "Washington",
      image: "/img37.jpg",
      alt: "Washington DC Jefferson Memorial",
    },
  ]

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Locations</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Explore our curated selection of remarkable rental destinations below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {locations.map((location, index) => (
          <div
            key={location.name}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={location.image || "/placeholder.svg"}
              alt={location.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-xl font-semibold">{location.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
