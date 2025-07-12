import { Header } from "../components/Header"
import { HeroSection } from "../components/Hero-section"
import { ArtworkGallery } from "../components/Artwork-gallery"
import { ProductShowcase } from "../components/Product-showcase"
import { FAQSection } from "../components/Faq-section"
import { NewsletterSignup } from "../components/Newsletter-signup"
import { Footer } from "../components/Footer"

const sampleArtworks = [
  {
    id: "1",
    title: "Side Table",
    image: "/Final1.png?height=400&width=600",
    setting: "green" as const,
    description: "Beautiful pencil sketch artwork perfect for any living space.",
  },
  {
    id: "2",
    title: "Side Table",
    image: "/Final2.png?height=400&width=600",
    setting: "neutral" as const,
    description: "Elegant portrait sketch that adds character to your home.",
  },
]

const sampleProducts = [
  {
    id: "1",
    title: "Portrait Collection",
    image: "/mockup_1.jpeg?height=400&width=400",
    category: "Sketches",
    price: "$45",
  },
  {
    id: "2",
    title: "Nature Studies",
    image: "/Final90.png?height=400&width=400",
    category: "Drawings",
    price: "$35",
  },
  {
    id: "3",
    title: "Custom Portraits",
    image: "/mockup_2.png?height=400&width=400",
    category: "Commission",
    price: "From $80",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection
        title="Sketchbook Studio"
        subtitle="A vision by Kartik Artist"
        buttonText="Shop Now"
        buttonHref="/shop"
      />
      <ArtworkGallery artworks={sampleArtworks} title="Featured Artwork" />
      <ProductShowcase products={sampleProducts} title="Our Collections" backgroundColor="bg-white" />
      <FAQSection />
      <NewsletterSignup />
      <Footer />
    </div>
  )
}
