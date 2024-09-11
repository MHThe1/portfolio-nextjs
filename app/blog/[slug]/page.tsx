import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'

async function getArticles() {
  const res = await fetch('http://localhost:1337/api/articles?populate=*', { next: { revalidate: 3600 } })
  if (!res.ok) {
    throw new Error('Failed to fetch articles')
  }
  return res.json()
}

async function getArticle(slug: string) {
  const res = await fetch(`http://localhost:1337/api/articles?filters[slug][$eq]=${slug}&populate=*`, { next: { revalidate: 3600 } })
  if (!res.ok) {
    throw new Error('Failed to fetch article')
  }
  const { data } = await res.json()
  return data[0]
}

export async function generateStaticParams() {
  const { data: articles } = await getArticles()
  return articles.map((article: any) => ({
    slug: article.attributes.slug,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{article.attributes.title}</h1>
      <div className="mb-8 relative h-[400px]">
        <Image
          src={`http://localhost:1337${article.attributes.image.data.attributes.url}`}
          alt={article.attributes.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="prose lg:prose-xl max-w-none">
        <MDXRemote source={article.attributes.content} />
      </div>
    </div>
  )
}