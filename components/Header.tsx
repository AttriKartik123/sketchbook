"use client"
import Link from "next/link"
import { Search, User, Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/store/cartStore"

export function Header() {
  const cartCount = useCartStore((state) => state.cartCount)

  return (
    <header className="w-full bg-[#F5E6D3] border-b border-[#E5D4C1]">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex-1"></div>

          <div className="flex items-center justify-center space-x-8">
            <Link href="/" className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors">Home</Link>
            <Link href="/shop" className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors">Shop</Link>
            <Link href="/blogs" className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors">Blogs</Link>
            <Link href="/contact" className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors">Contact</Link>
          </div>

          <div className="flex items-center justify-end space-x-4 flex-1">
            <Button asChild variant="ghost" size="icon" className="text-gray-800 hover:text-gray-600">
              <Link href="/auth"><User className="h-5 w-5" /><span className="sr-only">User</span></Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-gray-800 hover:text-gray-600">
              <Link href="/search"><Search className="h-5 w-5" /><span className="sr-only">Search</span></Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-gray-800 hover:text-gray-600">
              <Link href="/wishlist"><Heart className="h-5 w-5" /><span className="sr-only">Wishlist</span></Link>
            </Button>

            {/* 🛒 Cart Icon with badge */}
            <Button asChild variant="ghost" size="icon" className="relative text-gray-800 hover:text-gray-600">
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Shopping cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
