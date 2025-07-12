"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, ArrowLeft, Star, Minus, Plus, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// This would typically come from a database
const getProduct = (id: string) => {
  const products = {
    "1": {
      id: "1",
      title: "Elegant Portrait Study",
      price: 45,
      originalPrice: 60,
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "Portraits",
      description:
        "A beautiful pencil portrait capturing delicate features and emotions. This piece showcases the subtle interplay of light and shadow, bringing life to the subject through careful attention to detail.",
      longDescription: `This elegant portrait study represents hours of careful observation and skilled craftsmanship. Created using premium graphite pencils on high-quality paper, this artwork captures not just the physical likeness but the essence and personality of the subject.

      The piece demonstrates advanced techniques in portraiture, including:
      • Precise facial proportions and anatomy
      • Sophisticated shading and tonal values  
      • Careful attention to texture and detail
      • Emotional depth and character expression

      Perfect for art collectors, portrait enthusiasts, or anyone who appreciates the timeless beauty of traditional drawing techniques.`,
      inStock: true,
      featured: true,
      tags: ["portrait", "pencil", "woman", "elegant"],
      dimensions: '11" x 14"',
      medium: "Graphite on paper",
      year: "2024",
      rating: 4.8,
      reviews: 12,
      specifications: {
        Medium: "Graphite pencil on premium drawing paper",
        Size: '11" x 14" (28cm x 36cm)',
        Paper: "Acid-free, archival quality",
        Frame: "Not included",
        Signed: "Yes, by the artist",
        Certificate: "Certificate of authenticity included",
      },
    },
  }

  return products[id as keyof typeof products] || products["1"]
}

const relatedProducts = [
  {
    id: "2",
    title: "Nature's Serenity",
    price: 35,
    image: "/placeholder.svg?height=300&width=300",
    category: "Landscapes",
  },
  {
    id: "3",
    title: "Custom Pet Portrait",
    price: 80,
    image: "/placeholder.svg?height=300&width=300",
    category: "Custom",
  },
  {
    id: "4",
    title: "Abstract Expression",
    price: 55,
    image: "/placeholder.svg?height=300&width=300",
    category: "Abstract",
  },
]

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const addToCart = () => {
    console.log("Added to cart:", { product, quantity })
    // Handle add to cart logic
  }

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    // Handle wishlist logic
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-gray-900">
              Shop
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.title}</span>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="text-gray-600 hover:text-gray-900">
            <Link href="/shop">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Link>
          </Button>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image Thumbnails */}
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? "border-gray-900" : "border-gray-200"
                    }`}
                  >
                    <Image src={image || "/placeholder.svg"} alt={`View ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">{product.category}</p>
                <h1 className="text-3xl font-light text-gray-900 mb-4">{product.title}</h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-medium text-gray-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded">
                      Save ${product.originalPrice - product.price}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Specifications */}
              <div className="border-t pt-6">
                <h3 className="font-medium text-gray-900 mb-3">Specifications</h3>
                <div className="space-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-gray-600">{key}:</span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-900">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:bg-gray-50">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-gray-50">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={addToCart}
                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button
                    onClick={toggleWishlist}
                    variant="outline"
                    className={`bg-transparent ${isWishlisted ? "border-red-500 text-red-500" : ""}`}
                  >
                    <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>

                {!product.inStock && <p className="text-red-600 text-sm">This item is currently out of stock.</p>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light text-gray-900 mb-6">About This Artwork</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              {product.longDescription.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">You Might Also Like</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/shop/${relatedProduct.id}`}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-square">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">{relatedProduct.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{relatedProduct.category}</p>
                  <p className="text-lg font-medium text-gray-900">${relatedProduct.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
