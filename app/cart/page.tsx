/* eslint-disable @next/next/no-html-link-for-pages */
"use client"

import { useState } from "react"
import { Header } from "../../components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Plus, Minus, X } from "lucide-react"
import Image from "next/image"

interface CartItem {
  id: string
  title: string
  image: string
  price: number
  quantity: number
  category: string
}

const initialCartItems: CartItem[] = [
  {
    id: "1",
    title: "Portrait Collection",
    image: "/placeholder.svg?height=400&width=400",
    price: 45,
    quantity: 1,
    category: "Sketches",
  },
  {
    id: "2",
    title: "Nature Studies",
    image: "/placeholder.svg?height=400&width=400",
    price: 35,
    quantity: 2,
    category: "Drawings",
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(id)
      return
    }
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeFromCart = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 15
  const total = subtotal + shipping

  const handleCheckout = () => {
    // Handle checkout logic here
    console.log("Proceeding to checkout")
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <ShoppingCart className="h-8 w-8 text-gray-700" />
            <h1 className="text-4xl font-light text-gray-900">Shopping Cart</h1>
            <span className="text-gray-500">({cartItems.length} items)</span>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-light text-gray-600 mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Add some beautiful artwork to your cart</p>
              <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white">
                <a href="/shop">Continue Shopping</a>
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 flex gap-4">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={120}
                        height={120}
                        className="rounded-lg object-cover"
                      />

                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wide">{item.category}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 text-gray-400 hover:text-gray-600"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 border border-gray-300 rounded hover:bg-gray-50"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 border border-gray-300 rounded hover:bg-gray-50"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <span className="text-lg font-medium text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">Order Summary</h2>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="text-gray-900">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    {shipping === 0 && <p className="text-sm text-green-600">Free shipping on orders over $100!</p>}
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-medium">
                        <span className="text-gray-900">Total</span>
                        <span className="text-gray-900">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <Button onClick={handleCheckout} className="w-full bg-gray-900 hover:bg-gray-800 text-white mb-4">
                    Proceed to Checkout
                  </Button>

                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <a href="/shop">Continue Shopping</a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
