import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ArtworkItem {
  id: string
  title: string
  image: string
  description?: string
  setting: "green" | "neutral" | "warm"
}

interface ArtworkGalleryProps {
  artworks: ArtworkItem[]
  title?: string
}

export function ArtworkGallery({ artworks, title }: ArtworkGalleryProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">{title}</h2>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {artworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ArtworkCardProps {
  artwork: ArtworkItem
}

function ArtworkCard({ artwork }: ArtworkCardProps) {
  const getBackgroundClass = (setting: string) => {
    switch (setting) {
      case "green":
        return "bg-gradient-to-br from-green-100 to-green-200"
      case "neutral":
        return "bg-gradient-to-br from-gray-100 to-gray-200"
      case "warm":
        return "bg-gradient-to-br from-amber-50 to-orange-100"
      default:
        return "bg-gray-100"
    }
  }

  return (
    <div className="group">
      <div className={`relative overflow-hidden rounded-2xl p-8 ${getBackgroundClass(artwork.setting)} mb-6`}>
        <div className="aspect-[1/1] relative">
          <Image
            src={artwork.image || "/placeholder.svg"}
            alt={artwork.title}
            fill
            className="object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-3xl font-light text-gray-900">{artwork.title}</h3>

        {artwork.description && <p className="text-gray-600 leading-relaxed">{artwork.description}</p>}

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
