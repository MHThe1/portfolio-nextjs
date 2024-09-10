'use client'

import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GlobalContext } from "../../context/GlobalContext"
import { useContext } from 'react'
import BackgroundGrid from '../ui/BackgroundGrid'

// Utility functions
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

const getStrapiMedia = (media: { data: { attributes: { url: string } } } | null) => {
    if (!media || !media.data || !media.data.attributes || !media.data.attributes.url) {
      return null;
    }
    const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
    return media.data.attributes.url.startsWith('/')
      ? `${apiUrl}${media.data.attributes.url}`
      : media.data.attributes.url;
  };
  

// SEO Component
const Seo = ({ seo }: { seo: any }) => {
  const { siteName } = useContext(GlobalContext)
  const fullSeo = {
    ...seo,
    metaTitle: `${seo.metaTitle} | ${siteName}`,
    shareImage: seo.shareImage?.data?.attributes?.url,
  }

  return (
    <>
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta name="twitter:title" content={fullSeo.metaTitle} />
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} />
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta name="twitter:description" content={fullSeo.metaDescription} />
        </>
      )}
      {fullSeo.shareImage && (
        <>
          <meta property="og:image" content={fullSeo.shareImage} />
          <meta name="twitter:image" content={fullSeo.shareImage} />
          <meta name="image" content={fullSeo.shareImage} />
        </>
      )}
      {fullSeo.article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}

// ArticleClient Component
const ArticleClient = ({ article }: { article: any }) => {
  const imageUrl = getStrapiMedia(article.attributes.image)
  const authorImageUrl = getStrapiMedia(article.attributes.author.data.attributes.picture)

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  return (
    <motion.article 
      className="max-w-4xl mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Seo seo={seo} />
      <BackgroundGrid />
      <div className="relative z-10 space-y-8">
        <h1 className="text-4xl font-bold tracking-tight text-purple-600 dark:text-purple-400">{article.attributes.title}</h1>
        <div className="flex items-center space-x-4">
          <Image
            src={authorImageUrl || '/placeholder.svg'}
            alt={article.attributes.author.data.attributes.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{article.attributes.author.data.attributes.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{formatDate(article.attributes.publishedAt)}</p>
          </div>
        </div>
        <Image
          src={imageUrl || '/placeholder.svg'}
          alt={article.attributes.title}
          width={1200}
          height={630}
          className="rounded-lg object-cover w-full h-64 md:h-96"
        />
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <MDXRemote {...article.attributes.content} />
        </div>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-100">
            {article.attributes.category.data.attributes.name}
          </span>
        </div>
      </div>
    </motion.article>
  )
}

// Articles Component
const Articles = ({ articles }: { articles: any[] }) => {
  return (
    <div className="relative bg-white dark:bg-black-100 min-h-screen">
      <BackgroundGrid />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-purple-600 dark:text-purple-400 mb-12">Blog Posts</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <motion.div 
              key={article.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Link href={`/blog/${article.attributes.slug}`} className="block">
                <Image
                  src={getStrapiMedia(article.attributes.image) || '/placeholder.svg'}
                  alt={article.attributes.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{article.attributes.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{article.attributes.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{formatDate(article.attributes.publishedAt)}</span>
                    <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                      {article.attributes.category.data.attributes.name}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// BlogLayout Component
const BlogLayout = ({ children }: { children: React.ReactNode }) => {
    const globalData = useContext(GlobalContext)
  
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/blog/" className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {globalData.siteName}
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-white dark:bg-gray-800 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} {globalData.siteName}. All rights reserved.
          </div>
        </footer>
      </div>
    )
  }
  
  export { ArticleClient, Articles, BlogLayout }