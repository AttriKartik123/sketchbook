/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { supabase } from "@/lib/supabase"
import { toast } from "sonner"
import { useEffect, useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCartStore } from "@/lib/store/cartStore"

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

interface ProductCardProps {
  product: Product
  viewMode: "grid" | "list"
}

const allProducts: Product[] = [
  {
    id: "1",
    title: "Elegant Portrait Study",
    price: 45,
    originalPrice: 60,
    image: "/Final4.png?height=400&width=400",
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
    image: "/FinalA.png?height=400&width=400",
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
    image: "/Final770.png?height=400&width=400",
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
    image: "/Final8.png?height=400&width=400",
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
    image: "/mockup4.jpg?height=400&width=400",
    category: "Nature",
    description: "Detailed botanical illustration of delicate flowers and leaves.",
    inStock: true,
    featured: false,
    tags: ["botanical", "flowers", "nature", "detailed"],
  },
  {
    id: "6",
    title: "Urban Architecture",
    price: 40,
    image: "/FinalDE.png?height=400&width=400",
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
    image: "/Final10.png?height=400&width=400",
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
    image: "/mockup3.jpg?height=400&width=400",
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

  useEffect(() => {
  const fetchCart = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    const { data, error } = await supabase.from("cart_items").select("product_id, quantity").eq("user_id", user.id)
    if (!error && data) useCartStore.getState().setCart(data)
  }

  fetchCart()
}, [])

  useEffect(() => {
    let filtered = allProducts

    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

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
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    setProducts(filtered)
  }, [selectedCategory, sortBy, searchQuery])

 function handleSearchChange(query: string) {
  setSearchQuery(query)
}

function handleCategoryChange(category: string) {
  setSelectedCategory(category)
}

function handleSortChange(value: string) {
  setSortBy(value)
}

  function filterAndSortProducts(): void {
    throw new Error("Function not implemented.")
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
          className={
            viewMode === "grid"
              ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-6"
          }
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
)}
function ProductCard({ product, viewMode }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [adding, setAdding] = useState(false)

  const incrementCartCount = useCartStore((state) => state.increment) // ✅ Zustand hook

  const addToCart = async () => {
    setAdding(true)
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      toast.error("Please login to add items to cart")
      setAdding(false)
      return
    }

    const { error } = await supabase.from("cart_items").insert({
      user_id: user.id,
      product_id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: 1,
    })

    setAdding(false)

    if (error) {
      toast.error("Failed to add to cart")
      console.error("Cart insert error:", error.message)
    } else {
      toast.success(`${product.title} added to cart`)
      incrementCartCount() // ✅ ✅ ✅ UPDATE ZUSTAND COUNT HERE
    }
  }

  const toggleWishlist = () => setIsWishlisted(!isWishlisted)

  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-all">
      <div className="relative aspect-square">
        <Image src={product.image} alt={product.title} fill className="object-cover rounded-lg" />
        {product.featured && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
            Featured
          </span>
        )}
        <button onClick={toggleWishlist} className="absolute top-2 right-2 p-2 bg-white rounded-full">
          <Heart
            className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"}`}
          />
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <div className="flex items-center gap-2 my-2">
          <span className="text-xl font-semibold">${product.price}</span>
          {product.originalPrice && (
            <span className="line-through text-sm text-gray-400">${product.originalPrice}</span>
          )}
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <Link href={`/shop/${product.id}`}>View Details</Link>
          </Button>
          <Button
            onClick={addToCart}
            disabled={!product.inStock || adding}
            size="sm"
            className="flex-1 bg-gray-900 text-white hover:bg-gray-800"
          >
            {adding ? (
              <span className="animate-pulse">Adding...</span>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4 mr-1" /> Add
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
