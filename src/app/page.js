import RecentListings from "@/components/section/recentlisting";
import ServiceComponent from "@/components/section/services";
import Works from "@/components/section/works";

import Image from "next/image";
import LocationSearch from "@/components/section/locationsearch";
import TestimonialsCarousel from "@/components/atom/CrouselEffect";
import HelpingComponent from "@/components/section/helping";

export default function Home() {

  const stats=[
    {value:22,label:"Houses"},
    {value:10,label:"Apartments"},
    {value:145,label:"satisfied Client"},
    {value:29,label:"Happy Owners"},
    
    
  ];
  return (
    <>
    <div className="relative h-screen w-full text-white pt-16">
      
      <Image
        src="/img3.jpg" 
        alt="Dream Home"
        fill
        className="brightness-40 object-cover"
  
        priority
      />

  
      <div className="absolute inset-0 bg-opacity-50" />

     
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h3 className="text-sm md:text-base tracking-widest uppercase mb-2">
          A Place to Call Home
        </h3>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Rent Your Dream Home
        </h1>
        <p className="max-w-2xl text-sm md:text-lg text-gray-200 mb-6">
          Discover the perfect home away from home in our diverse selection of
          rentals. Choose the accommodation that best suits your needs.
        </p>
       <a
       href="#recent-listings"
        className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded font-semibold inline-block"
        >
  Recent Listings
</a>

      </div>
    </div>

    <section className="py-10 px-3 sm:px-3 lg:px-4">
      <div className="grid gird-cols-2 md:grid-cols-4 gap-1 text-center  py-4">
        {stats.map((stat,index) => (
          <div
          key={index}
          className={`px-2 ${index !==0 }`}
          >
            <p className="text-4xl font-medium text-[#2d1d0e]">{stat.value}</p>
              <p className="mt-2 text-md text-[#2d1d0e]">{stat.label}</p>
               </div>
        ))}
        </div>

        <div id="recent-listings">
          <RecentListings/>
          </div>
          <div>
            <ServiceComponent></ServiceComponent>
          </div>
          <div>
            <Works/>
            
            
          </div>
          <div>
            <LocationSearch/>
            
          </div>
          <div>
            <TestimonialsCarousel></TestimonialsCarousel>
          </div>
          <div>
            <HelpingComponent></HelpingComponent>
          </div>

         

                 



   

    </section>
    </>
  );
}
