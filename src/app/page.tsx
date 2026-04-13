import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { articles } from '@/content/articles'
import { condos } from '@/content/condos'
import { neighborhoods } from '@/content/neighborhoods'

export default function Home() {
  const featuredArticles = articles.slice(0, 4)
  const featuredCondos = condos.slice(0, 3)
  const featuredNeighborhoods = neighborhoods.slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient brick-texture text-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-brick-200 font-sans text-sm uppercase tracking-widest mb-4">Columbus Trend Network</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              German Village<br />
              <span className="text-brick-300">Columbus, Ohio</span>
            </h1>
            <p className="text-lg sm:text-xl text-brick-100 leading-relaxed max-w-2xl mb-8 font-sans">
              The definitive guide to Columbus&apos;s most historic neighborhood. Real estate data, restaurant guides, condo profiles, and everything you need to know about life on the brick streets.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/articles"
                className="inline-flex items-center px-6 py-3 bg-village-600 text-white font-sans font-medium rounded-md hover:bg-village-500 transition-colors text-sm"
              >
                Explore Articles
              </Link>
              <Link
                href="/articles/german-village-real-estate-market-guide"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-sans font-medium rounded-md hover:bg-white/20 transition-colors text-sm backdrop-blur-sm"
              >
                Real Estate Market Data
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-serif font-bold text-brick-800">$576K</p>
              <p className="text-xs text-stone-500 font-sans mt-1">Median Home Price</p>
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-brick-800">90</p>
              <p className="text-xs text-stone-500 font-sans mt-1">Walk Score</p>
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-brick-800">1867</p>
              <p className="text-xs text-stone-500 font-sans mt-1">Schiller Park Est.</p>
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-brick-800">1,600+</p>
              <p className="text-xs text-stone-500 font-sans mt-1">Historic Structures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brick-900">Latest Guides</h2>
              <p className="text-stone-500 font-sans text-sm mt-1">Data-driven articles about life in German Village</p>
            </div>
            <Link href="/articles" className="text-sm font-sans text-village-700 hover:text-village-600 hidden sm:block">
              View all articles &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredArticles.map((article) => (
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
          <div className="mt-6 sm:hidden">
            <Link href="/articles" className="text-sm font-sans text-village-700 hover:text-village-600">
              View all articles &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Condos Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brick-900">Condo Guide</h2>
              <p className="text-stone-500 font-sans text-sm mt-1">Every condo complex in and around German Village</p>
            </div>
            <Link href="/condos" className="text-sm font-sans text-village-700 hover:text-village-600 hidden sm:block">
              View all condos &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {featuredCondos.map((condo) => (
              <Link key={condo.slug} href={`/condos/${condo.slug}`} className="block group">
                <div className="bg-stone-50 rounded-lg border border-stone-200 p-6 card-hover group-hover:border-brick-300">
                  <h3 className="font-serif text-lg font-semibold text-brick-900 group-hover:text-brick-700 transition-colors mb-2">
                    {condo.name}
                  </h3>
                  <p className="text-sm text-stone-500 mb-3 font-sans">{condo.address}</p>
                  <div className="flex items-center gap-4 text-xs text-stone-400 font-sans">
                    <span>{condo.priceRange}</span>
                    <span>&middot;</span>
                    <span>{condo.units}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brick-900">Neighboring Communities</h2>
              <p className="text-stone-500 font-sans text-sm mt-1">The neighborhoods that surround German Village</p>
            </div>
            <Link href="/neighborhoods" className="text-sm font-sans text-village-700 hover:text-village-600 hidden sm:block">
              View all &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredNeighborhoods.map((n) => (
              <Link key={n.slug} href={`/neighborhoods/${n.slug}`} className="block group">
                <div className="bg-white rounded-lg border border-stone-200 p-5 card-hover group-hover:border-village-400">
                  <h3 className="font-serif text-base font-semibold text-brick-900 group-hover:text-brick-700 transition-colors mb-1.5">
                    {n.name}
                  </h3>
                  <p className="text-xs text-stone-400 font-sans mb-3">{n.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-sans font-medium text-village-700">{n.medianPrice}</span>
                    <span className="text-xs text-stone-400 font-sans">median</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-village-800 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">Your Guide to German Village</h2>
          <p className="text-village-200 font-sans mb-6 max-w-2xl mx-auto">
            From real estate market data to the best place to grab coffee, we cover everything about Columbus&apos;s most walkable neighborhood.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/favorites" className="inline-flex items-center px-6 py-3 bg-white text-village-800 font-sans font-medium rounded-md hover:bg-village-50 transition-colors text-sm">
              Local Favorites
            </Link>
            <Link href="/parks" className="inline-flex items-center px-6 py-3 bg-village-700 text-white font-sans font-medium rounded-md hover:bg-village-600 transition-colors text-sm">
              Parks & Green Space
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
