import { fetchAPI } from '../../../../lib/api'
import Articles from '../../../../components/blog/Articles'

export const dynamic = 'force-dynamic'

async function getCategory(slug: string) {
  const categoriesRes = await fetchAPI("/categories", {
    filters: {
      slug: slug,
    },
    populate: {
      articles: {
        populate: "*",
      },
    },
  })
  return categoriesRes.data[0]
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await getCategory(params.slug)
  
  if (!category) {
    return <div>Category not found</div>
  }

  return <Articles articles={category.attributes.articles.data} />
}