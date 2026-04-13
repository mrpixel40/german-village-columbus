import type { Metadata } from 'next'
import Link from 'next/link'
import { articles, getArticleBySlug } from '@/content/articles'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug)
  if (!article) return { title: 'Not Found' }
  return {
    title: article.title,
    description: article.metaDescription,
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  return (
    <>
      <section className="bg-brick-900 text-white py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/articles" className="text-brick-300 font-sans text-sm hover:text-white transition-colors">
              &larr; Articles
            </Link>
            <span className="text-brick-600">/</span>
            <span className="text-xs font-sans font-medium text-village-400 bg-village-900/50 px-2.5 py-1 rounded-full uppercase tracking-wide">
              {article.category}
            </span>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold leading-tight mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 text-sm text-brick-300 font-sans">
            <span>Updated {new Date(article.updatedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>&middot;</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>
      <article className="py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-10 border-t border-stone-200 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-xl font-bold text-brick-900 mb-6">More Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {articles
              .filter(a => a.slug !== article.slug)
              .slice(0, 4)
              .map((a) => (
                <Link key={a.slug} href={`/articles/${a.slug}`} className="block group">
                  <div className="bg-white rounded-lg border border-stone-200 p-4 group-hover:border-brick-300 transition-colors">
                    <span className="text-xs text-village-600 font-sans uppercase tracking-wide">{a.category}</span>
                    <h3 className="font-serif text-sm font-semibold text-brick-900 group-hover:text-brick-700 mt-1 leading-snug">
                      {a.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
