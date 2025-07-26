// 'use client'

// import { useEffect, useState } from 'react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Users, Bed } from 'lucide-react'
// import { api, ENDPOINT } from '@/lib/api'

// export default function WishlistPage() {
//   const [wishlist, setWishlist] = useState([])

//   useEffect(() => {
//     const fetchWishlist = async () => {
//       try {
//         const res = await api.get(ENDPOINT.getWishlist)
//         console.log('Wishlist response:', res.data)
//         setWishlist(res.data.data || [])
//       } catch (err) {
//         console.error('Failed to fetch wishlist:', err)
//         setWishlist([])
//       }
//     }
//     fetchWishlist()
//   }, [])

//   return (
//     <div className="max-w-7xl mx-auto p-8">
//       <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
//       {wishlist.length === 0 ? (
//         <p className="text-gray-500">No items in wishlist.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {wishlist.map((item) => (
//             <Card
//               key={item.id}
//               className="group cursor-pointer border-0 shadow-none bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 rounded-2xl overflow-hidden"
//             >
//               <CardContent className="p-0">
//                 {/* Featured Badge */}
//                 <div className="relative">
//                   <div className="absolute top-4 left-4 z-10">
//                     <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full shadow-lg">
//                       ★ FEATURED
//                     </span>
//                   </div>
                  
//                   {/* Property Image */}
//                   <div className="relative aspect-[4/3] overflow-hidden">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </div>
//                 </div>

//                 {/* Property Details */}
//                 <div className="p-6 space-y-4">
//                   {/* Guests and Bedrooms */}
//                   <div className="flex items-center gap-6 text-sm text-slate-600">
//                     <div className="flex items-center gap-2">
//                       <Users className="w-4 h-4 text-blue-500" />
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Bed className="w-4 h-4 text-blue-500" />
//                       <span className="font-medium">
//                         {item.bedrooms} Bedroom{item.bedrooms > 1 ? "s" : ""}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
//                     {item.title}
//                   </h3>

//                   {/* Location */}
//                   <p className="text-slate-500 text-sm font-medium tracking-wide">
//                     {item.location}
//                   </p>

//                   {/* Price */}
//                   <div className="flex items-baseline gap-1 pt-2">
//                     <span className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
//                       ${item.price}
//                     </span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }
'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Bed, FolderLock } from 'lucide-react'
import { api, ENDPOINT } from '@/lib/api'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export default function WishlistPage() {
  const userData = useSelector((state) => state.user)
  const [wishlist, setWishlist] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchWishlist = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const res = await api.get(ENDPOINT.getWishlist)
      console.log('Wishlist response:', res.data)
      setWishlist(res.data.data || [])
    } catch (error) {
      console.error('Wishlist fetch error:', error)
      setError(error.response?.data?.message || 'Failed to load wishlist')
      setWishlist([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (userData.isLoggedIn) {
      fetchWishlist()
    } else {
      setLoading(false)
    }
  }, [userData.isLoggedIn])

  // Show login required if not authenticated
  if (!userData.isLoggedIn) {
    return (
      <div className="min-h-screen bg-white">
        <section className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <FolderLock className="w-20 h-20 mx-auto mb-6 text-slate-400" strokeWidth={1.2} />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Login Required</h2>
            <p className="text-slate-600 mb-8 max-w-md mx-auto text-lg">
              You need to be logged in to view your wishlist. Please sign in to access your saved properties.
            </p>
         <Link 
             href="/login"
             className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold inline-block transition-colors"
           >
  Login
</Link>

          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-black">
            Your Wishlist
          </h1>
          <p className="text-slate-600 mt-4 text-lg">
            {wishlist.length} {wishlist.length === 1 ? 'property' : 'properties'} in your wishlist
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
            <p className="text-red-600 mb-4">Error: {error}</p>
            <Button 
              onClick={fetchWishlist}
              variant="outline"
              className="border-red-300 text-red-600 hover:bg-red-50"
            >
              Try Again
            </Button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && wishlist.length === 0 && (
          <div className="text-center py-16">
            <FolderLock className="w-16 h-16 mx-auto mb-6 text-slate-400" strokeWidth={1.2} />
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Your wishlist is empty</h3>
            <p className="text-slate-600 mb-8 text-lg">Start adding properties to your wishlist to see them here</p>
            <Link 
              href="/listings"
              className={cn(buttonVariants(), "bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold")}
            >
              Browse Properties
            </Link>
          </div>
        )}

        {/* Wishlist Grid */}
        {!loading && !error && wishlist.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wishlist.map((item) => (
              <Card
                key={item.id || item._id}
                className="group cursor-pointer border-0 shadow-none bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 rounded-2xl overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Featured Badge */}
                  <div className="relative">
                  
                    
                    {/* Property Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.target.src = '/placeholder-property.jpg' // Add fallback image
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="p-6 space-y-4">
                    {/* Guests and Bedrooms */}
                    <div className="flex items-center gap-6 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Bed className="w-4 h-4 text-blue-500" />
                        <span className="font-medium">
                          {item.bedrooms} Bedroom{item.bedrooms > 1 ? "s" : ""}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Location */}
                    <p className="text-slate-500 text-sm font-medium tracking-wide">
                      {item.location}
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 pt-2">
                      <span className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                        ${item.price} 
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}