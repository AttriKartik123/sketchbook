"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { ProductShowcase } from "../../components/Product-showcase"

const allProducts = [
  {
    id: "1",
    title: "Portrait Collection",
    image: "/placeholder.svg?height=400&width=400",
    category: "Sketches",
    price: "₹2500",
  },
  {
    id: "2",
    title: "Nature Studies",
    image: "/placeholder.svg?height=400&width=400",
    category: "Drawings",
    price: "₹1500",
  },
  {
    id: "3",
    title: "Custom Portraits",
    image: "/placeholder.svg?height=400&width=400",
    category: "Commission",
    price: "From ₹2000",
  },
  {
    id: "4",
    title: "Landscape Sketches",
    image: "/placeholder.svg?height=400&width=400",
    category: "Sketches",
    price: "₹2300",
  },
  {
    id: "5",
    title: "Animal Studies",
    image: "/placeholder.svg?height=400&width=400",
    category: "Drawings",
    price: "₹1100",
  },
  {
    id: "6",
    title: "Abstract Art",
    image: "/placeholder.svg?height=400&width=400",
    category: "Modern",
    price: "₹2655",
  },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredProducts, setFilteredProducts] = useState(allProducts)

  const categories = ["all", "Sketches", "Drawings", "Commission", "Modern"]

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    filterProducts(query, selectedCategory)
  }

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    filterProducts(searchQuery, category)
  }

  const filterProducts = (query: string, category: string) => {
    let filtered = allProducts

    if (query) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()),
      )
    }

    if (category !== "all") {
      filtered = filtered.filter((product) => product.category === category)
    }

    setFilteredProducts(filtered)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-8 text-center">Search Artwork</h1>

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for artwork, sketches, portraits..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-gray-900 rounded-lg"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`capitalize ${
                  selectedCategory === category
                    ? "bg-gray-900 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category === "all" ? "All Categories" : category}
              </Button>
            ))}
          </div>
        </div>

        {/* Search Results */}
        <div className="mb-8">
          <p className="text-gray-600 text-center">
            {filteredProducts.length} {filteredProducts.length === 1 ? "result" : "results"} found
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <ProductShowcase products={filteredProducts} backgroundColor="bg-white" />
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500 mb-4">No artwork found matching your search.</p>
            <p className="text-gray-400">Try adjusting your search terms or browse all categories.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
