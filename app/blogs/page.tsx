import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  category: string
  readTime: string
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Portrait Sketching: Tips for Beginners",
    excerpt:
      "Learn the fundamental techniques for creating stunning portrait sketches. From understanding facial proportions to mastering shading techniques, this guide will help you start your artistic journey.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Kartik Artist",
    date: "December 15, 2024",
    category: "Tutorial",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Finding Inspiration in Everyday Moments",
    excerpt:
      "Discover how to find artistic inspiration in the world around you. From morning coffee rituals to evening walks, learn to see the extraordinary in the ordinary.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Kartik Artist",
    date: "December 10, 2024",
    category: "Inspiration",
    readTime: "3 min read",
  },
  {
    id: "3",
    title: "The Story Behind Custom Commissions",
    excerpt:
      "Take a behind-the-scenes look at the process of creating custom artwork. From initial consultation to final delivery, see how personal stories become timeless art.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Kartik Artist",
    date: "December 5, 2024",
    category: "Process",
    readTime: "7 min read",
  },
  {
    id: "4",
    title: "Choosing the Right Paper for Your Sketches",
    excerpt:
      "Not all paper is created equal. Learn about different paper types, textures, and weights to find the perfect surface for your artistic vision.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Kartik Artist",
    date: "November 28, 2024",
    category: "Materials",
    readTime: "4 min read",
  },
  {
    id: "5",
    title: "The Psychology of Art: Why We Connect with Sketches",
    excerpt:
      "Explore the emotional connection between viewer and artwork. Understand why hand-drawn sketches have a unique power to move and inspire us.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Kartik Artist",
    date: "November 20, 2024",
    category: "Psychology",
    readTime: "6 min read",
  },
  {
    id: "6",
    title: "Caring for Your Artwork: Preservation Tips",
    excerpt:
      "Learn how to properly care for and preserve your sketches and drawings. From framing to storage, ensure your artwork lasts for generations.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Kartik Artist",
    date: "November 15, 2024",
    category: "Care",
    readTime: "4 min read",
  },
]

const categories = ["All", "Tutorial", "Inspiration", "Process", "Materials", "Psychology", "Care"]

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#F5E6D3] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-light text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Insights, tutorials, and stories from the world of art and sketching
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition-all duration-300 bg-transparent"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Featured Article</h2>
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-2xl overflow-hidden">
              <div className="relative h-96 lg:h-full">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs uppercase tracking-wide">
                    {blogPosts[0].category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {blogPosts[0].date}
                  </span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <h3 className="text-3xl font-light text-gray-900 mb-4">{blogPosts[0].title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white">
                  <Link href={`/blogs/${blogPosts[0].id}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs uppercase tracking-wide">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <Link
                        href={`/blogs/${post.id}`}
                        className="text-gray-900 hover:text-gray-700 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                      >
                        Read More
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#F5E6D3]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Never Miss an Update</h2>
            <p className="text-gray-700 mb-8">
              Subscribe to our newsletter for the latest blog posts, tutorials, and artistic insights delivered to your
              inbox.
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8">Subscribe Now</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
