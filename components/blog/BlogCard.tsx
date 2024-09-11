import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  title: string
  description: string
  slug: string
  imageUrl: string
  category: string
  isFeatured: boolean
}

export default function BlogCard({ title, description, slug, imageUrl, category, isFeatured }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <div className={`relative group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out ${isFeatured ? 'md:flex' : 'h-full flex flex-col'} ${isFeatured ? 'bg-gray-100 dark:bg-gray-900' : 'bg-gray-200 dark:bg-gray-800'} hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105`}>
        <div className={`relative ${isFeatured ? 'md:w-2/5' : 'w-full'} h-48 md:h-64`}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute bottom-2 left-2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
            {category}
          </div>
          {isFeatured && (
            <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              Featured
            </div>
          )}
        </div>
        <div className={`p-6 ${isFeatured ? 'md:w-3/5' : ''}`}>
          <h2 className={`font-bold mb-2 text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-primary ${isFeatured ? 'text-2xl' : 'text-xl'} dark:text-white`}>
            {title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3 dark:text-gray-300">{description}</p>
          <div className="text-primary font-semibold transition-colors duration-300 ease-in-out group-hover:text-blue-700">Read More →</div>
        </div>
      </div>
    </Link>
  )
}
