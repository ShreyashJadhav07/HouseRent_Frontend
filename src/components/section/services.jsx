import Image from "next/image"
import { Home } from "lucide-react"

export default function ServiceComponent() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white rounded-full shadow-sm">
              <Home className="w-8 h-8 text-gray-700" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform offers a wide variety of houses, giving customers plenty of options to choose from based on
            their budget.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Fully Furnished */}
          <div className="text-center">
            <div className="mb-6">
              <Image
                src="/img10.jpg"
                alt="Modern furnished dining room with wooden table and chairs"
                width={400}
                height={300}
                className="rounded-2xl object-cover w-full h-64"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fully Furnished</h3>
            <p className="text-gray-600 leading-relaxed">
              Our fully furnished rental houses are equipped with everything you need, from appliances to furniture.
            </p>
          </div>

          {/* Accessible Locations */}
          <div className="text-center">
            <div className="mb-6">
              <Image
                src="/img8.jpg"
                alt="Modern suburban neighborhood with colorful houses and green spaces"
                width={400}
                height={300}
                className="rounded-2xl object-cover w-full h-64"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Accessible Locations</h3>
            <p className="text-gray-600 leading-relaxed">
              All our properties are located in prime areas to provide you with easy access to all of the necessary
              amenities.
            </p>
          </div>

          {/* Competitive Prices */}
          <div className="text-center">
            <div className="mb-6">
              <Image
                src="/img9.jpg"
                alt="Small house model with magnifying glass on architectural plans"
                width={400}
                height={300}
                className="rounded-2xl object-cover w-full h-64"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Competitive Prices</h3>
            <p className="text-gray-600 leading-relaxed">
              We offer affordable rental rates with no hidden charges for all our high-quality rental listings on our
              platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
