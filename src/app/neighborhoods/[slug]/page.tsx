import type { Metadata } from 'next'
import Link from 'next/link'
import { neighborhoods, getNeighborhoodBySlug } from '@/content/neighborhoods'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const neighborhood = getNeighborhoodBySlug(params.slug)
  if (!neighborhood) return { title: 'Not Found' }
  return {
    title: `${neighborhood.name} Neighborhood Guide`,
    description: neighborhood.metaDescription,
  }
}

export default function NeighborhoodPage({ params }: { params: { slug: string } }) {
  const neighborhood = getNeighborhoodBySlug(params.slug)
  if (!neighborhood) notFound()

  return (
    <>
      <section className="bg-brick-900 text-white py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/neighborhoods" className="text-brick-300 font-sans text-sm hover:text-white transition-colors">
            &larr; All Neighborhoods
          </Link>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold leading-tight mt-4 mb-3">{neighborhood.name}</h1>
          <p className="text-brick-200 font-sans">{neighborhood.location}</p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-stone-50 rounded-lg border border-stone-200 p-6 mb-10">
            <div className="grid grid-cols-2 gap-4 text-sm font-sans">
              <div>
                <span className="text-stone-400 block mb-1">Median Home Price</span>
                <span className="text-brick-800 font-medium text-lg">{neighborhood.medianPrice}</span>
              </div>
              <div>
                <span className="text-stone-400 block mb-1">Character</span>
                <span className="text-brick-800 font-medium">{neighborhood.vibe}</span>
              </div>
            </div>
          </div>

          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: neighborhood.content }}
          />
        </div>
      </section>

      <section className="py-10 border-t border-stone-200 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-xl font-bold text-brick-900 mb-6">More Neighborhoods</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {neighborhoods
              .filter(n => n.slug !== neighborhood.slug)
              .slice(0, 4)
              .map((n) => (
                <Link key={n.slug} href={`/neighborhoods/${n.slug}`} className="block group">
                  <div className="bg-white rounded-lg border border-stone-200 p-4 group-hover:border-village-400 transition-colors">
                    <h3 className="font-serif text-sm font-semibold text-brick-900 group-hover:text-brick-700">{n.name}</h3>
                    <p className="text-xs text-stone-400 font-sans mt-1">{n.medianPrice} median</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
