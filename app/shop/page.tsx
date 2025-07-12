"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Grid, List, Heart, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Product {
  id: string
  title: string
  price: number
  originalPrice?: number
  image: string
  category: string
  description: string
  inStock: boolean
  featured: boolean
  tags: string[]
}

const allProducts: Product[] = [
  {
    id: "1",
    title: "Elegant Portrait Study",
    price: 45,
    originalPrice: 60,
    image: "/placeholder.svg?height=400&width=400",
    category: "Portraits",
    description: "A beautiful pencil portrait capturing delicate features and emotions.",
    inStock: true,
    featured: true,
    tags: ["portrait", "pencil", "woman", "elegant"],
  },
  {
    id: "2",
    title: "Nature's Serenity",
    price: 35,
    image: "/placeholder.svg?height=400&width=400",
    category: "Landscapes",
    description: "Peaceful landscape sketch showcasing natural beauty and tranquility.",
    inStock: true,
    featured: false,
    tags: ["landscape", "nature", "trees", "peaceful"],
  },
  {
    id: "3",
    title: "Custom Pet Portrait",
    price: 80,
    image: "/placeholder.svg?height=400&width=400",
    category: "Custom",
    description: "Personalized pet portrait created from your favorite photo.",
    inStock: true,
    featured: true,
    tags: ["custom", "pet", "commission", "personalized"],
  },
  {
    id: "4",
    title: "Abstract Expression",
    price: 55,
    image: "/placeholder.svg?height=400&width=400",
    category: "Abstract",
    description: "Modern abstract sketch with flowing lines and dynamic composition.",
    inStock: true,
    featured: false,
    tags: ["abstract", "modern", "dynamic", "artistic"],
  },
  {
    id: "5",
    title: "Botanical Study",
    price: 30,
    image: "/placeholder.svg?height=400&width=400",
    category: "Nature",
    description: "Detailed botanical illustration of delicate flowers and leaves.",
    inStock: false,
    featured: false,
    tags: ["botanical", "flowers", "nature", "detailed"],
  },
  {
    id: "6",
    title: "Urban Architecture",
    price: 40,
    image: "/placeholder.svg?height=400&width=400",
    category: "Architecture",
    description: "Architectural sketch capturing the essence of urban design.",
    inStock: true,
    featured: false,
    tags: ["architecture", "urban", "building", "design"],
  },
  {
    id: "7",
    title: "Family Portrait Commission",
    price: 120,
    image: "/placeholder.svg?height=400&width=400",
    category: "Custom",
    description: "Custom family portrait capturing precious moments and relationships.",
    inStock: true,
    featured: true,
    tags: ["family", "custom", "commission", "portrait"],
  },
  {
    id: "8",
    title: "Still Life Collection",
    price: 25,
    image: "/placeholder.svg?height=400&width=400",
    category: "Still Life",
    description: "Classic still life study with everyday objects and careful shading.",
    inStock: true,
    featured: false,
    tags: ["still life", "objects", "classic", "shading"],
  },
]

const categories = ["All", "Portraits", "Landscapes", "Custom", "Abstract", "Nature", "Architecture", "Still Life"]
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "name", label: "Name A-Z" },
]

export default function ShopPage() {
  const [products, setProducts] = useState(allProducts)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("featured")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)

  const filterAndSortProducts = () => {
    let filtered = allProducts

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "name":
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "featured":
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
    }

    setProducts(filtered)
  }

  // Update products when filters change
  useState(() => {
    filterAndSortProducts()
  })

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setTimeout(filterAndSortProducts, 0)
  }

  const handleSortChange = (sort: string) => {
    setSortBy(sort)
    setTimeout(filterAndSortProducts, 0)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setTimeout(filterAndSortProducts, 0)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#F5E6D3] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-light text-gray-900 mb-4">Art Shop</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover our collection of original sketches, custom portraits, and artistic creations
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search artwork..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  className={
                    selectedCategory === category
                      ? "bg-gray-900 text-white"
                      : "border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white bg-transparent"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Sort and View Options */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <div className="flex border border-gray-300 rounded-md">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={`rounded-r-none ${viewMode === "grid" ? "bg-gray-900 text-white" : ""}`}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={`rounded-l-none ${viewMode === "list" ? "bg-gray-900 text-white" : ""}`}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {products.length} of {allProducts.length} products
            {searchQuery && ` for "${searchQuery}"`}
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {products.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 mb-4">No products found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchQuery("")
                  setTimeout(filterAndSortProducts, 0)
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div
              className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-6"}
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product} viewMode={viewMode} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

interface ProductCardProps {
  product: Product
  viewMode: "grid" | "list"
}

function ProductCard({ product, viewMode }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const addToCart = () => {
    console.log("Added to cart:", product)
    // Handle add to cart logic
  }

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    // Handle wishlist logic
  }

  if (viewMode === "list") {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 flex gap-6 hover:shadow-md transition-shadow">
        <div className="relative w-48 h-48 flex-shrink-0">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover rounded-lg"
          />
          {product.featured && (
            <span className="absolute top-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded">Featured</span>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
              <span className="text-white font-medium">Out of Stock</span>
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-1">{product.title}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wide">{product.category}</p>
              </div>
              <button onClick={toggleWishlist} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
              </button>
            </div>
            <p className="text-gray-600 mb-4">{product.description}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-medium text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm" className="bg-transparent">
                <Link href={`/shop/${product.id}`}>View Details</Link>
              </Button>
              <Button
                onClick={addToCart}
                disabled={!product.inStock}
                size="sm"
                className="bg-gray-900 hover:bg-gray-800 text-white"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.featured && (
          <span className="absolute top-3 left-3 bg-gray-900 text-white text-xs px-2 py-1 rounded">Featured</span>
        )}
        <button
          onClick={toggleWishlist}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
        </button>
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-medium">Out of Stock</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-lg font-medium text-gray-900 mb-1">{product.title}</h3>
          <p className="text-sm text-gray-500 uppercase tracking-wide">{product.category}</p>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-medium text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
            <Link href={`/shop/${product.id}`}>View Details</Link>
          </Button>
          <Button
            onClick={addToCart}
            disabled={!product.inStock}
            size="sm"
            className="flex-1 bg-gray-900 hover:bg-gray-800 text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
