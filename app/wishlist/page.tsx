"use client"

import { useState } from "react"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/ui/button"
import { Heart, ShoppingCart, X } from "lucide-react"
import Image from "next/image"

interface WishlistItem {
  id: string
  title: string
  image: string
  price: string
  category: string
}

const initialWishlistItems: WishlistItem[] = [
  {
    id: "1",
    title: "Portrait Collection",
    image: "/placeholder.svg?height=400&width=400",
    price: "$45",
    category: "Sketches",
  },
  {
    id: "2",
    title: "Nature Studies",
    image: "/placeholder.svg?height=400&width=400",
    price: "$35",
    category: "Drawings",
  },
  {
    id: "3",
    title: "Custom Portraits",
    image: "/placeholder.svg?height=400&width=400",
    price: "From $80",
    category: "Commission",
  },
]

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(initialWishlistItems)

  const removeFromWishlist = (id: string) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id))
  }

  const addToCart = (item: WishlistItem) => {
    // Handle add to cart logic here
    console.log("Added to cart:", item)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="h-8 w-8 text-red-500 fill-current" />
            <h1 className="text-4xl font-light text-gray-900">My Wishlist</h1>
            <span className="text-gray-500">({wishlistItems.length} items)</span>
          </div>

          {wishlistItems.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-light text-gray-600 mb-4">Your wishlist is empty</h2>
              <p className="text-gray-500 mb-8">Save items you love to your wishlist</p>
              <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white">
                <a href="/shop">Continue Shopping</a>
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                    >
                      <X className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>

                  <div className="p-4">
                    <div className="mb-3">
                      <h3 className="text-lg font-medium text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">{item.category}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xl font-medium text-gray-900">{item.price}</span>
                      <Button
                        onClick={() => addToCart(item)}
                        size="sm"
                        className="bg-gray-900 hover:bg-gray-800 text-white"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
