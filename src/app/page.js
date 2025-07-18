import RecentListings from "@/components/section/recentlisting";
import ServiceComponent from "@/components/section/services";
import Works from "@/components/section/works";
import Image from "next/image";

export default function Home() {

  const stats=[
    {value:136,label:"Houses"},
    {value:79,label:"Apartments"},
    {value:843,label:"satisfied Guest"},
    {value:265,label:"Happy Owners"},
    
    
  ];
  return (
    <>
    <div className="relative h-screen w-full text-white">
      {/* Background image */}
      <Image
        src="/img3.jpg" // replace with your own image path
        alt="Dream Home"
        fill
        className="brightness-40 object-cover"
  
        priority
      />

      {/* Overlay to darken the image for better text visibility */}
      <div className="absolute inset-0 bg-opacity-50" />

      {/* Content over image */}
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
        <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded font-semibold">
          Recent Listings
        </button>
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

        <div>
          <RecentListings/>
          </div>
          <div>
            <ServiceComponent></ServiceComponent>
          </div>
          <div>
            <Works/>
          </div>


   

    </section>
    </>
  );
}
