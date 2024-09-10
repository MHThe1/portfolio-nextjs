import { fetchAPI } from '../../lib/api'
import { Articles } from '../../components/blog/BlogComponents'

export const dynamic = 'force-dynamic'

async function getArticles() {
  const articlesRes = await fetchAPI("/articles", { populate: "*" })
  return articlesRes.data
}

export default async function BlogPage() {
  const articles = await getArticles()
  
  return <Articles articles={articles} />
}