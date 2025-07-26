"use client"

import React, { useState } from "react"

import { toast } from "sonner"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import { api, ENDPOINT } from "@/lib/api"
import { updateUserPremium } from "@/redux/userSlice"
import { useRazorpay } from "react-razorpay"
import { LucideLoader2 } from "lucide-react"
import SpecialOfferCard from "@/components/atom/SpecialOfferCard"

const offers = [
  {
    title: "Premium Monthly",
    features: [
      "Exclusive access to top listings",
      "Priority 24/7 support",
      "Tour Guide Videos",
      "Verified badge",
    ],
    price: "499",
    originalPrice: "999",
    discountLabel: "50% OFF",
    duration: "1 Month",
  },
]

function Subscription() {
  const [activePrice, setActivePrice] = useState("")
  const userData = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const router = useRouter()
  const { Razorpay } = useRazorpay()
  const [loading, setLoading] = useState(false)

  const handlePaymentClick = async () => {
    if (activePrice === "") {
      toast("Select a plan to subscribe")
      return
    }
    if (!userData.isLoggedIn) {
      toast("Login to Buy Subscription")
      router.push("/login")
      return
    }
    try {
      setLoading(true)
      const res = await api.post(`${ENDPOINT.payment}`, {
        email: userData.user?.email,
        amount: activePrice,
      })

      const options = {
        key: process.env.NEXT_PUBLIC_KEY_ID ?? "",
        amount: res.data.amount,
        currency: "INR",
        name: "HomeEasy Premium",
        description: "HomeEasy Premium Subscription",
        order_id: res.data.orderId,
        handler: async function (response) {
          toast(`Payment Successful: ${response.razorpay_order_id}`)
          try {
            const updatePremium = await api.patch(ENDPOINT.updatePremium, {
              email: userData.user?.email,
            })
            if (updatePremium.status === 200) {
              dispatch(updateUserPremium(true))
              toast("Premium access granted successfully")
            }
          } catch (err) {
            console.error(err)
            
          }
        },
      }

      const rzp1 = new Razorpay(options)
      rzp1.on("payment.failed", function (response) {
        toast("Payment failed: " + response.error.reason)
      })
      rzp1.open()
        dispatch(updateUserPremium(true))
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen from-purple-600 to-pink-500 flex flex-col items-center justify-center px-4">


      <div className="w-full max-w-4xl from-purple-600 to-pink-500 rounded-3xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Choose a Premium Plan</h2>
          <p className="text-gray-600 mt-1">
            Select the plan that suits your needs and get started instantly.
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full md:gap-6 gap-4 justify-center items-stretch cursor-pointer">
          {offers.map((offer, index) => (
            <SpecialOfferCard
              key={index}
              title={offer.title}
              features={offer.features}
              price={offer.price}
              originalPrice={offer.originalPrice}
              discountLabel={offer.discountLabel}
              duration={offer.duration}
              isActive={activePrice === offer.price}
              onClick={() => setActivePrice(offer.price)}
            />
          ))}
        </div>

        <div className="mt-6 text-center cursor-pointer">
          <button
            className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 text-white font-semibold rounded-full hover:opacity-90 transition"
            onClick={handlePaymentClick}
          >
            Continue & Pay
            {loading && <LucideLoader2 className="animate-spin ml-2 w-4 h-4 inline-block" />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscription
