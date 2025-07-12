"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "How long does it take to complete a custom portrait?",
    answer:
      "Custom portraits typically take 2-3 weeks to complete, depending on the complexity and size of the artwork. We'll provide you with regular updates throughout the process and ensure every detail meets your expectations.",
  },
  {
    id: "2",
    question: "What materials do you use for your sketches?",
    answer:
      "We use high-quality graphite pencils, charcoal, and premium paper to ensure longevity and rich detail in every piece. All materials are acid-free and archival quality to preserve your artwork for years to come.",
  },
  {
    id: "3",
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide! Shipping costs vary by location and artwork size. All pieces are carefully packaged with protective materials to ensure they arrive in perfect condition. Tracking information is provided for all shipments.",
  },
  {
    id: "4",
    question: "Can I request modifications to my custom artwork?",
    answer:
      "We offer up to 2 rounds of revisions for custom pieces to ensure you're completely satisfied with the final result. We'll work closely with you throughout the process to capture exactly what you envision.",
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Everything you need to know about our artwork and services</p>
          </div>

          <div className="space-y-4">
            {faqData.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-medium text-gray-900 pr-4">{item.question}</h3>
                  {openItems.includes(item.id) ? (
                    <Minus className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  )}
                </button>

                {openItems.includes(item.id) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
