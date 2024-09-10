// app/blog/[slug]/page.tsx
import { fetchAPI } from '../../../lib/api'
import { serialize } from 'next-mdx-remote/serialize'
import { ArticleClient } from '../../../components/blog/BlogComponents'

export const dynamic = 'force-dynamic'

async function getArticle(slug: string) {   
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: slug,
    },
    populate: "*",
  })
  const article = articlesRes.data[0]
  if (article) {
    article.attributes.content = await serialize(article.attributes.content)
  }
  return article
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug)
  
  if (!article) {
    return <div>Article not found</div>
  }

  return <ArticleClient article={article} />
}