"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup logic here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail("")
  }

  return (
    <section className="py-16 bg-[#F5E6D3]">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="space-y-4">
            <Mail className="w-12 h-12 mx-auto text-gray-700" />
            <h2 className="text-3xl font-light text-gray-900">Stay Inspired</h2>
            <p className="text-gray-700 text-lg">
              Subscribe to our newsletter for the latest artwork, tutorials, and exclusive offers.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white border-gray-300 focus:border-gray-900"
            />
            <Button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white px-8" disabled={isSubmitted}>
              {isSubmitted ? "Subscribed!" : "Subscribe"}
            </Button>
          </form>

          {isSubmitted && (
            <p className="text-green-600 font-medium">Thank you for subscribing! Check your email for confirmation.</p>
          )}
        </div>
      </div>
    </section>
  )
}
