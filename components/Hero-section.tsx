import Image from "next/image"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonHref?: string
  logoImage?: string
  backgroundImage?: string
}

export function HeroSection({
  title = "Sketchbook Studio",
  subtitle = "",
  buttonText = "Shop Now",
  buttonHref = "/shop",
  logoImage = "/logo_2.png?height=400&width=400",
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="min-h-[70vh] bg-[#F5E6D3] relative overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 opacity-10">
          <Image src={backgroundImage || "/placeholder.svg"} alt="Background" fill className="object-cover" />
        </div>
      )}

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[50vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
                {title.split(" ").map((word, index) => (
                  <div key={index} className={index === 1 ? "font-normal" : ""}>
                    {word}
                  </div>
                ))}
              </h1>
              {subtitle && <p className="text-xl text-gray-700 max-w-md">{subtitle}</p>}
            </div>

            <div className="pt-4">
              <Button
                asChild
                className="bg-transparent border-b-2 border-gray-900 rounded-none px-0 py-2 text-lg font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                <a href={buttonHref}>{buttonText}</a>
              </Button>
            </div>
          </div>

          {/* Right Content - Logo/Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-white p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <Image
                  src={logoImage || "/placeholder.svg"}
                  alt="Sketchbook Studio Logo"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
