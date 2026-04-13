import type { Metadata } from 'next'
import Link from 'next/link'
import { neighborhoods } from '@/content/neighborhoods'

export const metadata: Metadata = {
  title: 'Neighboring Communities',
  description: 'Guide to neighborhoods surrounding German Village Columbus Ohio. Brewery District, Schumacher Place, Merion Village, Hungarian Village, and more with pricing and profiles.',
}

export default function NeighborhoodsPage() {
  return (
    <>
      <section className="bg-brick-900 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-3">Neighboring Communities</h1>
          <p className="text-brick-200 font-sans text-lg max-w-2xl">
            The neighborhoods that surround German Village, from the Brewery District&apos;s converted warehouses to Merion Village&apos;s emerging dining scene.
          </p>
        </div>
      </section>
      <section className="py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {neighborhoods.map((n) => (
              <Link key={n.slug} href={`/neighborhoods/${n.slug}`} className="block group">
                <div className="bg-white rounded-lg border border-stone-200 p-6 h-full card-hover group-hover:border-village-400">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="font-serif text-xl font-semibold text-brick-900 group-hover:text-brick-700 transition-colors">
                      {n.name}
                    </h2>
                    <span className="text-sm font-sans font-medium text-village-700 bg-village-50 px-3 py-1 rounded-full whitespace-nowrap ml-3">
                      {n.medianPrice}
                    </span>
                  </div>
                  <p className="text-sm text-stone-500 font-sans mb-3">{n.location}</p>
                  <p className="text-xs text-stone-400 font-sans italic">{n.vibe}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
