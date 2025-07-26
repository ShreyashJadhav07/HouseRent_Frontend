import Image from 'next/image';
import Link from 'next/link';

const listing = [
  { id: 1, title: "Denver", location: "Denver", image: "/img30.jpg",href:"/locations/Denver"},
  { id: 2, title: "Seattle", location: "Seattle", image: "/img36.jpg",href:"/locations/Seattle"},
  { id: 3, title: "New York", location: "New York", image: "/img32.jpg",href:"/locations/NewYork"},
  { id: 4, title: "LosAngeles", location: "LosAngeles", image: "/img31.jpg", href:"locations/LosAngeles" },
];

export default function LocationSearch() {
  return (
    <section className="px-4 py-10">
  
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-[#2d1d0e]">
          Search By Location
        </h2>
        <p className="text-gray-600 mt-2">
          Find properties in your favorite cities
        </p>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {listing.map((listing) => (
          <Link
          key={listing.id}
          href={listing.href}
          
          >
         
          <div
           
            className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg group"
          >
            <Image
              src={listing.image}
              alt={listing.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
              sizes="(max-width: 968px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute bottom-0 left-0 w-full bg-opacity-50 text-white px-4 py-2">
              <h3 className="text-lg font-semibold">{listing.title}</h3>
            </div>
          </div>
           </Link>
        ))}
      </div>
    </section>
  );
}


