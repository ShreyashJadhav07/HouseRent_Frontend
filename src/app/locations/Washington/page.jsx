import HelpingComponent from "@/components/section/helping"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

export default function WashingtonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">
        
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-black">
              Washington
            </h1>
           <div className="flex gap-4">
              <Link
              href="/locations"
              >

              <Button className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded font-semibold  ">
                See By Locations
              </Butto>
              </Link>
              
             
            </div>
          </div>
        </div>

      
        <div className="flex flex-col items-center justify-center text-slate-500 py-20">
          <AlertCircle className="w-16 h-16 mb-4 text-blue-400" />
          <p className="text-xl font-medium">No available rental houses.</p>
        </div>
      </section>

      <HelpingComponent />
    </div>
  )
}
