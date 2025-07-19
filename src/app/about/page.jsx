import Image from "next/image"
import { Home, Target, Handshake } from "lucide-react"
import AskSection from "@/components/section/Asksection"

export default function AboutComponent() {
  return (
    <>
   
    <section className="bg-stone-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-stone-600 tracking-wider uppercase">ABOUT US</p>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 leading-tight">What We Stand For</h2>
            </div>

            <div className="space-y-8">
              {/* Quality Homes */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center">
                    <Home className="w-6 h-6 text-stone-700" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-stone-800">Quality Homes</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Whether you're looking for a stunning apartment, a cozy vacation home, or a unique property, our
                    platform has got you covered.
                  </p>
                </div>
              </div>

              {/* Excellent Services */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center">
                    <Target className="w-6 h-6 text-stone-700" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-stone-800">Excellent Services</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Our team is committed to ensuring that your experience on our platform is smooth, enjoyable, and
                    hassle-free.
                  </p>
                </div>
              </div>

              {/* Trusted Name */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-stone-700" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-stone-800">Trusted Name</h3>
                  <p className="text-stone-600 leading-relaxed">
                    We have been in the business for years, ensuring the satisfaction of our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-200">
              <Image
                src="/img3.jpg"
                alt="Modern interior design with wooden staircase and contemporary furniture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-stone-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 leading-tight">
            Rent With Us Today
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
            We offer top-quality house rentals to make your stay comfortable and unforgettable.
          </p>
        </div>

        {/* Wide Selection Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-200 shadow-lg">
              <Image
                src="/img38.jpg"
                alt="Modern living room with contemporary furniture and large windows"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 leading-tight">Wide Selection of Houses</h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              We offer a wide variety of houses, giving customers plenty of options to choose from based on their
              preferences and budget.
            </p>
          </div>
        </div>

        {/* Affordable Rates Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 leading-tight">Affordable Rates</h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Our house rentals are priced competitively and reasonably, helping customers find the right house within
              their budget without compromising on quality.
            </p>
          </div>

          {/* Image */}
          <div className="relative lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-200 shadow-lg">
              <Image
                src="/img39.jpg"
                alt="Professional real estate agent holding house model"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <AskSection/>



     </>

  )
}