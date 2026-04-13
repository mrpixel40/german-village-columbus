import type { Metadata } from 'next'
import { parks } from '@/content/parks'

export const metadata: Metadata = {
  title: 'Parks & Green Space',
  description: 'Guide to parks in and near German Village Columbus Ohio. Schiller Park, Frank Fetch Memorial Park, Scioto Audubon Metro Park, and more green spaces.',
}

export default function ParksPage() {
  return (
    <>
      <section className="bg-brick-900 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-3">Parks & Green Space</h1>
          <p className="text-brick-200 font-sans text-lg max-w-2xl">
            From Schiller Park&apos;s 23 acres to Frank Fetch&apos;s pocket garden, the green spaces that anchor community life in German Village.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-12">
            {parks.map((park) => (
              <article key={park.name} className="bg-white rounded-lg border border-stone-200 p-6 sm:p-8">
                <h2 className="font-serif text-2xl font-bold text-brick-900 mb-2">{park.name}</h2>
                <p className="text-sm text-stone-400 font-sans mb-4">{park.address}</p>

                <div className="grid grid-cols-3 gap-4 bg-stone-50 rounded-lg p-4 mb-6">
                  <div className="text-center">
                    <p className="text-xl font-serif font-bold text-village-700">{park.acres}</p>
                    <p className="text-xs text-stone-400 font-sans mt-0.5">Acres</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-serif font-bold text-village-700">{park.established}</p>
                    <p className="text-xs text-stone-400 font-sans mt-0.5">Established</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-serif font-bold text-village-700">{park.highlights.length}</p>
                    <p className="text-xs text-stone-400 font-sans mt-0.5">Highlights</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-serif text-sm font-semibold text-brick-800 uppercase tracking-wide mb-3">Highlights</h3>
                  <ul className="space-y-2">
                    {park.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stone-600 font-sans">
                        <span className="text-village-500 mt-1 flex-shrink-0">&#8226;</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="article-content">
                  {park.description.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
