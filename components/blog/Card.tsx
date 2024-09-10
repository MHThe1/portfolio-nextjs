import React from "react"
import Link from "next/link"
import NextImage from "./Image"

interface Article {
  attributes: {
    slug: string;
    image: any; // Replace with a more specific type if available
    category: {
      name: string;
    };
    title: string;
  }
}

interface CardProps {
  article: Article;
}

const Card: React.FC<CardProps> = ({ article }) => {
  return (
    <Link href={`/blog/article/${article.attributes.slug}`}>
      <div className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <NextImage image={article.attributes.image} />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.attributes.category.name}
            </p>
            <p id="title" className="uk-text-large">
              {article.attributes.title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card