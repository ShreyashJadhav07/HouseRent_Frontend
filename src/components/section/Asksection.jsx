import { Lightbulb } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AskSection() {
  const faqData = [
    {
      id: "item-1",
      question: "What Types Of Houses Are Available For Rent?",
      answer:
           "We offer a wide range of rental properties including apartments, single-family homes, townhouses, and luxury villas. You can filter listings based on location, price, number of bedrooms, and amenities to find the perfect match for your lifestyle and budget.",
    },
    {
      id: "item-2",
      question: "What Is The Rental Application Process?",
      answer:
           "To apply for a rental property, you'll need to complete an online application form, provide valid ID, proof of income, and undergo a background and credit check. Once your application is approved, you’ll be contacted to proceed with the lease signing and deposit payment.",
    },
    {
      id: "item-3",
      question: "What Are Your Rental Rates?",
      answer:
          "Rental rates vary depending on the property type, location, size, and included amenities. You can view the monthly rent and any additional fees (e.g., utilities, parking, or pet fees) directly on each listing. We also offer flexible options for short-term and long-term leases.",
    },
    {
      id: "item-4",
      question: "What Are The Lease Terms?",
      answer:
             "Most properties offer 6-month or 12-month lease agreements. Some listings may allow month-to-month or short-term rentals. Lease terms, including renewal options and termination policies, are clearly outlined in the listing and can be discussed with the landlord or property manager before signing.",
    },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 md:py-16 lg:py-20">
      {/* Header Section */}
      <div className="text-center mb-12 md:mb-16">
        <div className="flex justify-center mb-6">
          <div className="p-3 rounded-full bg-gray-100">
            <Lightbulb className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get The Answers You Need</h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Take a moment to browse through the topics below and reach out to our dedicated customer support team.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-gray-200 rounded-lg px-6 py-2 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-gray-800 font-medium text-base md:text-lg py-4 hover:no-underline [&[data-state=open]>svg]:rotate-90">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm md:text-base leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
