'use client'

import { useEffect, useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { api, ENDPOINT } from '@/lib/api'

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await api.get(ENDPOINT.getWishlist)
        setWishlist(res.data)
      } catch (err) {
        console.error('Failed to fetch wishlist:', err)
      }
    }
    fetchWishlist()
  }, [])

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-gray-500">No items in wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-500">{item.location}</p>
                <p className="text-purple-600 font-bold">₹{item.price.toLocaleString()}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
