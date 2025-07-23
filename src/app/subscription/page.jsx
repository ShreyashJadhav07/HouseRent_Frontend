"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, Bed, FolderLockIcon } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AminitesComponent from "@/components/section/Aminites";

// Sample data for premium properties
const forSaleListings = [
  {
    id: 101,
    title: "Lakeview Mansion",
    location: "Lake Tahoe, California",
    price: 1250000,
    bedrooms: 5,
    image: "/luximg1.jpg",
    href:"/premiumpropertlis/salePropertyls1",

  },
  {
    id: 102,
    title: "Modern Skyline Condo",
    location: "Manhattan, New York",
    price: 980000,
    bedrooms: 3,
   image: "/luximg2.jpg",
    href:"/premiumpropertlis/salePropertyls2",
  },
  {
    id: 103,
    title: "Countryside Villa",
    location: "Napa Valley, California",
    price: 875000,
    bedrooms: 4,
    image: "/luximg3.jpg",
    href:"/premiumpropertlis/salePropertyls3",
    
  },

];

export default function ForSaleListings() {
  const userData = useSelector((state) => state.user);



  if (!userData.user?.isPremium) {
    return (
   <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 px-6">
      <div className="max-w-2xl text-center">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4">
            Premium Membership
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Access Required
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Unlock exclusive features and listings with our Premium Membership
          </p>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-2xl">🏠</span>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Premium Properties</h3>
                <p className="text-gray-600 text-sm">Access to premium properties for sale and investment</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-2xl">🎥</span>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Video Tours</h3>
                <p className="text-gray-600 text-sm">Watch detailed video tours of premium homes</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-2xl">🔑</span>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Early Access</h3>
                <p className="text-gray-600 text-sm">Early access to hot listings before others</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-2xl">📞</span>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Direct Contact</h3>
                <p className="text-gray-600 text-sm">Direct contact with verified property brokers</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-2xl">📝</span>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Exclusive Offers</h3>
                <p className="text-gray-600 text-sm">View owner-only offers and special deals</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
          Buy Premium
        </button>

        <p className="text-gray-500 text-sm mt-4">
          30-day money-back guarantee • Cancel anytime
        </p>
      </div>
    </div>

    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <section className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            🏠 Premium Properties For Sale
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {forSaleListings.map((item) => (
            <Link key={item.id} href={item.href}>
              <Card className="group cursor-pointer border-0 shadow-none bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full shadow-lg">
                        FOR SALE
                      </span>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-6 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Bed className="w-4 h-4 text-green-500" />
                        <span className="font-medium">
                          {item.bedrooms} Bedroom{item.bedrooms > 1 ? "s" : ""}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-medium tracking-wide">
                      {item.location}
                    </p>
                    <div className="flex items-baseline gap-1 pt-2">
                      <span className="text-2xl font-bold text-slate-900 group-hover:text-green-700 transition-colors duration-300">
                        ${item.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
         <AminitesComponent></AminitesComponent>
      </section>
     
    </div>
  );
}
