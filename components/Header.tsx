import Link from "next/link"
import { Search, User, Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full bg-[#F5E6D3] border-b border-[#E5D4C1]">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Left spacer for balance */}
          <div className="flex-1"></div>

          {/* Centered Navigation Links */}
          <div className="flex items-center justify-center space-x-8">
            <Link href="/" className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors">
              Shop
            </Link>
            <Link href="/blogs" className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors">
              Blogs
            </Link>
            <Link href="/contact" className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center justify-end space-x-4 flex-1">
            <Button asChild variant="ghost" size="icon" className="text-gray-800 hover:text-gray-600">
              <Link href="/auth">
                <User className="h-5 w-5" />
                <span className="sr-only">User account</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-gray-800 hover:text-gray-600">
              <Link href="/search">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-gray-800 hover:text-gray-600">
              <Link href="/wishlist">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-gray-800 hover:text-gray-600">
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Shopping cart</span>
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
