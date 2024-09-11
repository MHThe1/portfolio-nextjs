import { Metadata } from "next";
import BlogCard from "@/components/blog/BlogCard";
import BackgroundGrid from "@/components/ui/BackgroundGrid";

// Fetch articles from the API
async function fetchArticles() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles?populate=*`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }
  return res.json();
}

export const metadata: Metadata = {
  title: "Blog | MHThe1",
  description:
    "Read the latest articles on web development, design, and technology.",
  openGraph: {
    title: "Blog | MHThe1",
    description:
      "Read the latest articles on web development, design, and technology.",
    url: "https://mehedihtanvir.me/blog",
    siteName: "Mehedi's blog",
    images: [
      {
        url: "https://mehedihtanvir.me/myDp.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | MHThe1",
    description:
      "Read the latest articles on web development, design, and technology.",
    images: ["https://mehedihtanvir.me/myDp.png"],
  },
};

export default async function BlogPage() {
  const articlesResponse = await fetchArticles();

  const articles = articlesResponse.data;

  const featuredArticle = articles.find(
    (article: any) => article.attributes.isFeatured
  );
  const regularArticles = articles.filter(
    (article: any) => !article.attributes.isFeatured
  );

  return (
    <section id="blog" className="bg-white dark:bg-black-100">
      <div className="relative w-full overflow-hidden">
        <div className="relative z-10 pt-20">
          <h1 className="text-4xl font-bold text-center text-black dark:text-white">
            mehedi&apos;s <span className="text-purple-400">blog</span>
          </h1>
        </div>

        <BackgroundGrid />

        <div className="container grid mt-10 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredArticle && (
            <div className="md:col-span-2 lg:col-span-3">
              <BlogCard
                key={featuredArticle.id}
                title={featuredArticle.attributes.title}
                description={featuredArticle.attributes.description}
                slug={featuredArticle.attributes.slug}
                imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}${featuredArticle.attributes.image.data.attributes.formats.medium.url}`}
                category={
                  featuredArticle.attributes.category.data.attributes.name
                }
                isFeatured={true}
              />
            </div>
          )}
          {regularArticles.map((article: any) => (
            <BlogCard
              key={article.id}
              title={article.attributes.title}
              description={article.attributes.description}
              slug={article.attributes.slug}
              imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}${article.attributes.image.data.attributes.formats.small.url}`}
              category={article.attributes.category.data.attributes.name}
              isFeatured={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
