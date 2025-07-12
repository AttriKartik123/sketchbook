"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "general",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      projectType: "general",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#F5E6D3] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-light text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next artistic project.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">Send us a Message</h2>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800">Thank you for your message! We'll get back to you within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="custom-portrait">Custom Portrait</option>
                    <option value="commission">Art Commission</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="workshop">Workshop/Teaching</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white flex items-center justify-center gap-2"
                  disabled={isSubmitted}
                >
                  <Send className="h-4 w-4" />
                  {isSubmitted ? "Message Sent!" : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-8">Contact Information</h2>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-gray-600 mt-1" />
                        <div>
                          <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                          <p className="text-gray-600">hello@sketchbookstudio.com</p>
                          <p className="text-gray-600">commissions@sketchbookstudio.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-gray-600 mt-1" />
                        <div>
                          <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                          <p className="text-gray-600">+1 (555) 123-4567</p>
                          <p className="text-sm text-gray-500">Available Mon-Fri, 9AM-6PM EST</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-gray-600 mt-1" />
                        <div>
                          <h3 className="font-medium text-gray-900 mb-1">Studio Location</h3>
                          <p className="text-gray-600">123 Artist Lane</p>
                          <p className="text-gray-600">Creative District, NY 10001</p>
                          <p className="text-sm text-gray-500">By appointment only</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Clock className="h-6 w-6 text-gray-600 mt-1" />
                        <div>
                          <h3 className="font-medium text-gray-900 mb-1">Response Time</h3>
                          <p className="text-gray-600">Within 24 hours</p>
                          <p className="text-sm text-gray-500">We typically respond same day</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Follow Our Journey</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="hover:bg-gray-900 hover:text-white bg-transparent">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-gray-900 hover:text-white bg-transparent">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-gray-900 hover:text-white bg-transparent">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  See our latest work and behind-the-scenes content on social media.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Quick Answers</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="font-medium text-gray-900 mb-2">How long do custom portraits take?</h3>
                <p className="text-gray-600 text-sm">
                  Custom portraits typically take 2-3 weeks, depending on complexity and current queue.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-medium text-gray-900 mb-2">Do you work internationally?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! We ship worldwide and work with clients globally through digital communication.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-medium text-gray-900 mb-2">What's your commission process?</h3>
                <p className="text-gray-600 text-sm">
                  We start with a consultation, create sketches for approval, then complete the final artwork.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-medium text-gray-900 mb-2">Can I visit your studio?</h3>
                <p className="text-gray-600 text-sm">
                  Studio visits are available by appointment. Please contact us to schedule a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
