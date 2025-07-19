import HelpingComponent from "@/components/section/helping"
import { AlertCircle } from "lucide-react"

export default function WashingtonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-black">
              Washington
            </h1>
            <div className="flex gap-4">
              <select className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-blue-300 transition-colors">
                <option>Select by Location</option>
              </select>
            </div>
          </div>
        </div>

        {/* No Listings Message */}
        <div className="flex flex-col items-center justify-center text-slate-500 py-20">
          <AlertCircle className="w-16 h-16 mb-4 text-blue-400" />
          <p className="text-xl font-medium">No available rental houses.</p>
        </div>
      </section>

      <HelpingComponent />
    </div>
  )
}
