import { Metadata } from 'next'
import BlogCard from '@/components/blog/BlogCard'

async function getArticles(params?: string) {
  const res = await fetch(`http://localhost:1337/api/articles/?populate=*&${params}`, { next: { revalidate: 3600 } })
  if (!res.ok) {
    throw new Error('Failed to fetch articles')
  }
  return res.json(); // Parse response as JSON
}

export const metadata: Metadata = {
  title: 'Blog | MHThe1',
  description: 'Read the latest articles on web development, design, and technology.',
  openGraph: {
    title: 'Blog | MHThe1',
    description: 'Read the latest articles on web development, design, and technology.',
    url: 'https://mehedihtanvir.me/blog',
    siteName: 'Mehedi\'s blog',
    images: [
      {
        url: 'https://mehedihtanvir.me/myDp.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | MHThe1',
    description: 'Read the latest articles on web development, design, and technology.',
    images: ['https://mehedihtanvir.me/blog'],
  },
}

export default async function BlogPage() {
  // Fetch featured and regular articles in parallel
  const [featuredResponse, regularResponse] = await Promise.all([
    getArticles('filters[isFeatured][$eq]=true'),
    getArticles('filters[isFeatured][$eq]=false'),
  ])

  const featuredArticle = featuredResponse.data[0]; // Assuming the first one is featured
  const regularArticles = regularResponse.data; // Regular articles

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredArticle && (
          <BlogCard
            key={featuredArticle.id}
            title={featuredArticle.attributes.title}
            description={featuredArticle.attributes.description}
            slug={featuredArticle.attributes.slug}
            imageUrl={`http://localhost:1337${featuredArticle.attributes.image.data.attributes.formats.medium.url}`}
            category={featuredArticle.attributes.category.data.attributes.name}
            isFeatured={true}
          />
        )}
        {regularArticles.map((article: any) => (
          <BlogCard
            key={article.id}
            title={article.attributes.title}
            description={article.attributes.description}
            slug={article.attributes.slug}
            imageUrl={`http://localhost:1337${article.attributes.image.data.attributes.formats.small.url}`}
            category={article.attributes.category.data.attributes.name}
            isFeatured={false}
          />
        ))}
      </div>
    </div>
  )
}
