import type { Metadata } from 'next'
import Link from 'next/link'
import { condos, getCondoBySlug } from '@/content/condos'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return condos.map((condo) => ({ slug: condo.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const condo = getCondoBySlug(params.slug)
  if (!condo) return { title: 'Not Found' }
  return {
    title: `${condo.name} | German Village Condos`,
    description: condo.metaDescription,
  }
}

export default function CondoPage({ params }: { params: { slug: string } }) {
  const condo = getCondoBySlug(params.slug)
  if (!condo) notFound()

  return (
    <>
      <section className="bg-brick-900 text-white py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/condos" className="text-brick-300 font-sans text-sm hover:text-white transition-colors">
            &larr; All Condos
          </Link>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold leading-tight mt-4 mb-4">{condo.name}</h1>
          <p className="text-brick-200 font-sans">{condo.address}</p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Quick Facts */}
          <div className="bg-stone-50 rounded-lg border border-stone-200 p-6 mb-10">
            <h2 className="font-serif text-lg font-bold text-brick-900 mb-4">Quick Facts</h2>
            <div className="grid grid-cols-2 gap-4 text-sm font-sans">
              <div>
                <span className="text-stone-400 block mb-1">Price Range</span>
                <span className="text-brick-800 font-medium">{condo.priceRange}</span>
              </div>
              <div>
                <span className="text-stone-400 block mb-1">Units</span>
                <span className="text-brick-800 font-medium">{condo.units}</span>
              </div>
              <div>
                <span className="text-stone-400 block mb-1">Year Built</span>
                <span className="text-brick-800 font-medium">{condo.yearBuilt}</span>
              </div>
              <div>
                <span className="text-stone-400 block mb-1">Style</span>
                <span className="text-brick-800 font-medium">{condo.style}</span>
              </div>
            </div>
          </div>

          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: condo.content }}
          />
        </div>
      </section>

      {/* Other Condos */}
      <section className="py-10 border-t border-stone-200 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-xl font-bold text-brick-900 mb-6">More Condos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {condos
              .filter(c => c.slug !== condo.slug)
              .slice(0, 4)
              .map((c) => (
                <Link key={c.slug} href={`/condos/${c.slug}`} className="block group">
                  <div className="bg-white rounded-lg border border-stone-200 p-4 group-hover:border-brick-300 transition-colors">
                    <h3 className="font-serif text-sm font-semibold text-brick-900 group-hover:text-brick-700">{c.name}</h3>
                    <p className="text-xs text-stone-400 font-sans mt-1">{c.priceRange}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
