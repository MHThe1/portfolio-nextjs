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
    <Link href={`/blog/${slug}`} className={`block ${isFeatured ? 'col-span-2' : ''}`}>
      <div className={`bg-gray-800 text-card-foreground rounded-lg shadow-md overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out ${isFeatured ? 'md:flex' : ''}`}>
        <div className={`relative ${isFeatured ? 'md:w-2/3' : ''} h-48 md:h-64`}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
            {category}
          </div>
          {isFeatured && (
            <div className="absolute top-2 right-2 bg-blue-600 text-secondary-foreground text-xs font-bold px-2 py-1 rounded">
              Featured
            </div>
          )}
        </div>
        <div className={`p-4 ${isFeatured ? 'md:w-1/3' : ''}`}>
          <h2 className={`font-semibold mb-2 ${isFeatured ? 'text-2xl' : 'text-xl'}`}>{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </Link>
  )
}