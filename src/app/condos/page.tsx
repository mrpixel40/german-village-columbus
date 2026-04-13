import type { Metadata } from 'next'
import Link from 'next/link'
import { condos } from '@/content/condos'

export const metadata: Metadata = {
  title: 'Condo Guide | German Village Condominiums',
  description: 'Complete guide to condo complexes in and around German Village Columbus Ohio. Pricing, features, and profiles for every condo building in the neighborhood.',
}

export default function CondosPage() {
  return (
    <>
      <section className="bg-brick-900 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-3">German Village Condo Guide</h1>
          <p className="text-brick-200 font-sans text-lg max-w-2xl">
            Every condo complex in and around German Village. Historic conversions, modern builds, and everything in between.
          </p>
        </div>
      </section>
      <section className="py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {condos.map((condo) => (
              <Link key={condo.slug} href={`/condos/${condo.slug}`} className="block group">
                <div className="bg-white rounded-lg border border-stone-200 p-6 h-full card-hover group-hover:border-brick-300">
                  <h2 className="font-serif text-lg font-semibold text-brick-900 group-hover:text-brick-700 transition-colors mb-2">
                    {condo.name}
                  </h2>
                  <p className="text-sm text-stone-500 mb-4 font-sans">{condo.address}</p>
                  <div className="space-y-2 text-sm font-sans">
                    <div className="flex justify-between">
                      <span className="text-stone-400">Price Range</span>
                      <span className="text-brick-800 font-medium">{condo.priceRange}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Units</span>
                      <span className="text-brick-800">{condo.units}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Style</span>
                      <span className="text-brick-800">{condo.style}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
