import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import { Metadata } from "next";
import BackgroundGrid from "@/components/ui/BackgroundGrid";

async function getArticle(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }
  const { data } = await res.json();
  return data[0];
}

async function getAllArticles() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }
  const { data } = await res.json();
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await getArticle(params.slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.attributes.title} | MHThe1 Blog`,
    description: article.attributes.description,
    openGraph: {
      title: article.attributes.title,
      description: article.attributes.description,
      url: `https://mehedihtanvir.me/blog/${article.attributes.slug}`,
      siteName: "MHThe1 Blog",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}${article.attributes.image.data.attributes.url}`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.attributes.title,
      description: article.attributes.description,
      images: [
        `${process.env.NEXT_PUBLIC_BACKEND_URL}${article.attributes.image.data.attributes.url}`,
      ],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-white dark:bg-black-100">
      <div className="relative overflow-hidden text-center mx-auto">
        <section id="articleHeader" className="relative z-10 pt-20">
          <h1 className="text-4xl my-4 font-bold text-center text-black dark:text-white">
            {article.attributes.title}
          </h1>
        </section>

        <BackgroundGrid />


        {/* <h1 className="text-4xl font-bold mb-4">{article.attributes.title}</h1> */}
        <div className="container">
          <div className="mb-4 text-gray-600 dark:text-gray-300">
            <span>
              {format(new Date(article.attributes.publishedAt), "MMMM d, yyyy")}
            </span>
            <span className="mx-2">•</span>
            <span>{article.attributes.category.data.attributes.name}</span>
          </div>
          <div className="mb-8 relative h-[400px]">
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${article.attributes.image.data.attributes.url}`}
              alt={article.attributes.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <section id="articleBody" className="prose lg:prose-xl max-w-none text-left text-gray-700 dark:text-gray-200 px-20">
            <MDXRemote source={article.attributes.content} />
          </section>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const articles = await getAllArticles();

  return articles.map((article: any) => ({
    slug: article.attributes.slug,
  }));
}
