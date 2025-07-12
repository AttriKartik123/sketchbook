import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Product {
  id: string
  title: string
  image: string
  category?: string
  price?: string
}

interface ProductShowcaseProps {
  products: Product[]
  title?: string
  backgroundColor?: string
}

export function ProductShowcase({
  products,
  title = "Featured Products",
  backgroundColor = "bg-gray-50",
}: ProductShowcaseProps) {
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">{title}</h2>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-light text-gray-900">{product.title}</h3>

        {product.category && <p className="text-sm text-gray-600 uppercase tracking-wide">{product.category}</p>}

        {product.price && <p className="text-lg font-medium text-gray-900">{product.price}</p>}

        <div className="pt-2">
          <Button
            variant="ghost"
            className="bg-transparent border-b border-gray-900 rounded-none px-0 py-1 text-base font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            View More
          </Button>
        </div>
      </div>
    </div>
  )
}
