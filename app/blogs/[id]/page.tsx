import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Share2, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogPostParams {
  params: {
    id: string
  }
}

// Simulating database fetch
const getBlogPost = (id: string) => {
  const posts = {
    "1": {
      id: "1",
      title: "The Art of Portrait Sketching: Tips for Beginners",
      content: `...`, // Truncated for brevity
      image: "/art1.jpg?height=600&width=800",
      author: "Kartik Artist",
      date: "December 15, 2024",
      category: "Tutorial",
      readTime: "5 min read",
    },
  }

  return posts[id as keyof typeof posts] || posts["1"]
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  const post = getBlogPost(params.id)


  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Back Navigation */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="text-gray-600 hover:text-gray-900">
            <Link href="/blogs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-4">
                <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs uppercase tracking-wide">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">{post.title}</h1>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <User className="h-4 w-4" />
                <span>By {post.author}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-12">
              <Image src={post.image || "/art3.jpg"} alt={post.title} fill className="object-cover" />
            </div>

            {/* Social Actions */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                <Heart className="h-4 w-4" />
                Like
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="text-gray-700 leading-relaxed space-y-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* You would fetch related posts here */}
              {[1, 2, 3].map((i) => (
                <article
                  key={i}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src="/art4.jpg?height=200&width=400"
                      alt="Related post"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Related Article Title {i}</h3>
                    <p className="text-gray-600 text-sm mb-4">Brief excerpt of the related article content...</p>
                    <Link href={`/blogs/${i + 1}`} className="text-gray-900 hover:text-gray-700 font-medium text-sm">
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
