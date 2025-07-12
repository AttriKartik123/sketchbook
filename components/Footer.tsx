import Link from "next/link"
import { Instagram, Facebook, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-light">Sketchbook Studio</h3>
            <p className="text-gray-400 leading-relaxed">
              A vision by Kartik Artist. Creating beautiful sketches and artwork that inspire and captivate.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/shop" className="block text-gray-400 hover:text-white transition-colors">
                Shop
              </Link>
              <Link href="/blogs" className="block text-gray-400 hover:text-white transition-colors">
                Blogs
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Categories</h4>
            <div className="space-y-2">
              <Link href="/portraits" className="block text-gray-400 hover:text-white transition-colors">
                Portraits
              </Link>
              <Link href="/landscapes" className="block text-gray-400 hover:text-white transition-colors">
                Landscapes
              </Link>
              <Link href="/sketches" className="block text-gray-400 hover:text-white transition-colors">
                Sketches
              </Link>
              <Link href="/custom" className="block text-gray-400 hover:text-white transition-colors">
                Custom Work
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Connect</h4>
            <div className="space-y-4">
              <p className="text-gray-400">
                <Mail className="inline w-4 h-4 mr-2" />
                hello@sketchbookstudio.com
              </p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sketchbook Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
