import { fetchAPI } from '../../../../lib/api'
import Article from '../../../../components/blog/Article'

export const dynamic = 'force-dynamic'

async function getArticle(slug: string) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: slug,
    },
    populate: "*",
  })
  return articlesRes.data[0]
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug)
  
  if (!article) {
    return <div>Article not found</div>
  }

  return <Article article={article} />
}