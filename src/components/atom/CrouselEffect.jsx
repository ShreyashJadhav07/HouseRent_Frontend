import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    quote:
      "I had a wonderful experience renting a house through Rentalz. The process was simple and efficient. The house was beautiful and well-maintained.",
    name: "Jane B.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    quote:
      "They were professional and helped me find the perfect home for me and my family. The house was in great condition and located in a convenient location.",
    name: "Isabella R.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    quote:
      "The staff assisted me throughout the entire process of renting a house. The property that I rented was clean, modern, and conveniently located.",
    name: "David G.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    quote:
      "Outstanding service from start to finish. The team was responsive, knowledgeable, and made the entire rental process stress-free. Highly recommend!",
    name: "Sarah M.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    quote:
      "Found my dream apartment within days of contacting them. The virtual tours were excellent and saved me so much time. Great communication throughout.",
    name: "Michael T.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 6,
    quote:
      "Exceptional customer service and attention to detail. They understood exactly what I was looking for and delivered beyond my expectations.",
    name: "Emily Chen",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 7,
    quote:
      "The rental process was seamless and transparent. No hidden fees, clear communication, and a beautiful property that exceeded all my expectations.",
    name: "Robert K.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 8,
    quote:
      "As a first-time renter, I was nervous about the process. The team guided me every step of the way and made it incredibly easy and comfortable.",
    name: "Lisa Park",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 9,
    quote:
      "Quick response times, professional service, and a fantastic selection of properties. They made relocating to a new city so much easier for my family.",
    name: "James Wilson",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 10,
    quote:
      "The quality of properties and level of service is unmatched. They truly care about finding the right fit for each client. Will definitely use again!",
    name: "Amanda Foster",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialsCarousel() {
  return (
    <div className="w-full py-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <MessageCircle className="w-12 h-12 text-slate-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">What People Are Saying..</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                  <CardContent className="p-8 flex flex-col h-full">
                    {/* Author Info - image at top */}
                    <div className="flex flex-col items-center mb-6">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover border-4 border-white shadow-md mb-2"
                      />
                      <cite className="text-slate-800 font-semibold text-lg not-italic">
                        {testimonial.name}
                      </cite>
                      <p className="text-slate-500 text-sm">Verified Customer</p>
                    </div>


                    {/* Testimonial Text */}
                    <blockquote className="text-slate-700 text-lg leading-relaxed mb-4 flex-grow text-left">
                      {testimonial.quote}
                    </blockquote>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative translate-y-0 left-0" />
            <CarouselNext className="relative translate-y-0 right-0" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}
