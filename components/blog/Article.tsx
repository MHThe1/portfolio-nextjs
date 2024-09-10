'use client'

import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useEffect, useState } from 'react'
import Seo from './Seo'

// Add this function at the top of your file
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

// Update the getStrapiMedia function to handle the new structure
const getStrapiMedia = (media: { data: { attributes: { url: string } } } | null) => {
  if (!media || !media.data || !media.data.attributes || !media.data.attributes.url) {
    return null
  }
  return media.data.attributes.url.startsWith('/')
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${media.data.attributes.url}`
    : media.data.attributes.url
}

interface ArticleProps {
  article: {
    attributes: {
      title: string
      description: string
      content: string
      publishedAt: string
      image: {
        data: {
          attributes: {
            url: string
            width: number
            height: number
          }
        }
      }
      author: {
        data: {
          attributes: {
            name: string
            picture: {
              data: {
                attributes: {
                  url: string
                }
              }
            }
          }
        }
      }
      category: {
        data: {
          attributes: {
            name: string
          }
        }
      }
    }
  }
}

export default function Article({ article }: ArticleProps) {
  const [content, setContent] = useState<any>(null)

  useEffect(() => {
    const loadContent = async () => {
      const mdxSource = await serialize(article.attributes.content)
      setContent(mdxSource)
    }
    loadContent()
  }, [article.attributes.content])

  const imageUrl = getStrapiMedia(article.attributes.image)
  const authorImageUrl = getStrapiMedia(article.attributes.author.data.attributes.picture)

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  return (
    <article className="space-y-8">
      <Seo seo={seo} />
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter">{article.attributes.title}</h1>
        <div className="flex items-center space-x-4">
          <Image
            src={authorImageUrl || '/placeholder.svg'}
            alt={article.attributes.author.data.attributes.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-medium">{article.attributes.author.data.attributes.name}</p>
            <p className="text-sm text-gray-500">{formatDate(article.attributes.publishedAt)}</p>
          </div>
        </div>
      </div>
      <Image
        src={imageUrl || '/placeholder.svg'}
        alt={article.attributes.title}
        width={1200}
        height={630}
        className="rounded-lg object-cover"
      />
      <div className="prose prose-lg max-w-none">
        {content && <MDXRemote {...content} />}
      </div>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800">
          {article.attributes.category.data.attributes.name}
        </span>
      </div>
    </article>
  )
}