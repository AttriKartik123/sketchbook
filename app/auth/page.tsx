"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle authentication logic here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-[#F5E6D3]">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-light text-gray-900">
                {isLogin ? "Welcome Back" : "Create Account"}
              </CardTitle>
              <p className="text-gray-600">{isLogin ? "Sign in to your account" : "Join our artistic community"}</p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-full"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
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

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <Input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-full"
                    />
                  </div>
                )}

                <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  {isLogin ? "Sign In" : "Create Account"}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-2 text-gray-900 font-medium hover:underline"
                  >
                    {isLogin ? "Sign up" : "Sign in"}
                  </button>
                </p>
              </div>

              {isLogin && (
                <div className="mt-4 text-center">
                  <button className="text-sm text-gray-600 hover:underline">Forgot your password?</button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
