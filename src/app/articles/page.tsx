import type { Metadata } from 'next'
import ArticleCard from '@/components/ArticleCard'
import { articles } from '@/content/articles'

export const metadata: Metadata = {
  title: 'Articles & Guides',
  description: 'Data-driven articles about German Village Columbus Ohio. Real estate market data, dining guides, architecture, history, walkability, schools, cost of living, and more.',
}

export default function ArticlesPage() {
  return (
    <>
      <section className="bg-brick-900 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-3">Articles & Guides</h1>
          <p className="text-brick-200 font-sans text-lg max-w-2xl">
            Data-driven coverage of German Village. Real estate trends, neighborhood profiles, dining, architecture, and everything else you need to know.
          </p>
        </div>
      </section>
      <section className="py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {articles.map((article) => (
              <ArticleCard
                key={article.slug}
                slug={article.slug}
                title={article.title}
                category={article.category}
                readTime={article.readTime}
                metaDescription={article.metaDescription}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
