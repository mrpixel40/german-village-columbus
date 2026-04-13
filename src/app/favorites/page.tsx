import type { Metadata } from 'next'
import { favorites } from '@/content/favorites'

export const metadata: Metadata = {
  title: "Local Favorites | Best Restaurants, Coffee & Bars",
  description: "The 10 best restaurants, coffee shops, and bars in German Village Columbus Ohio. Stauf's, Fox in the Snow, Schmidt's Sausage Haus, Sycamore, Thurman Cafe, and more.",
}

export default function FavoritesPage() {
  return (
    <>
      <section className="bg-brick-900 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-3">Local Favorites</h1>
          <p className="text-brick-200 font-sans text-lg max-w-2xl">
            The 10 spots that define the German Village experience. Coffee shops, restaurants, bars, and bakeries worth building your week around.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {favorites.map((fav, index) => (
              <article key={fav.name} className="bg-white rounded-lg border border-stone-200 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-brick-100 text-brick-700 font-serif font-bold text-lg rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <h2 className="font-serif text-xl font-bold text-brick-900">{fav.name}</h2>
                      <span className="text-xs font-sans font-medium text-village-700 bg-village-50 px-2.5 py-1 rounded-full uppercase tracking-wide">
                        {fav.type}
                      </span>
                    </div>
                    <p className="text-sm text-stone-400 font-sans mb-3">{fav.address}</p>
                    <p className="text-sm text-village-700 font-sans font-medium mb-4">{fav.knownFor}</p>
                    <p className="text-base text-stone-600 leading-relaxed font-sans">{fav.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 bg-stone-50 rounded-lg border border-stone-200 p-6 sm:p-8">
            <p className="text-sm text-stone-500 font-sans leading-relaxed">
              <strong className="text-stone-700">A note on this list:</strong> These are researched picks based on ratings, reputation, and local consensus. Your favorites may differ, and that is part of what makes a neighborhood. German Village&apos;s dining and coffee scene is deep enough that a top-10 list necessarily leaves out worthy spots. Explore, discover your own, and let us know what we missed.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
