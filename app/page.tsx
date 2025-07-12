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
    title: "Nature's Empress",
    image: "/Final1.png?height=400&width=600",
    setting: "warm" as const,
    description: "Regal and wild, a fusion of feminine strength and organic flow.",
  },
  {
    id: "2",
    title: "Moonlit Grace",
    image: "/Final2.png?height=400&width=600",
    setting: "neutral" as const,
    description: "A celestial figure bathed in the soft glow of moonlight and pencil.",
  },
]

const sampleProducts = [
  {
    id: "1",
    title: "Timeless Muse ",
    image: "/mockup_1.jpeg?height=400&width=400",
    category: "Sketches",
    price: "₹1800",
  },
  {
    id: "2",
    title: "Mystic Gaze",
    image: "/Final90.png?height=400&width=400",
    category: "Drawings",
    price: "₹1300",
  },
  {
    id: "3",
    title: "Stardust Maiden",
    image: "/mockup_2.png?height=400&width=400",
    category: "Commission",
    price: "₹1500",
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
