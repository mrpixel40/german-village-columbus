import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brick-950 text-brick-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-village-600 rounded-sm flex items-center justify-center text-white font-serif font-bold text-sm">
                GV
              </div>
              <span className="font-serif text-lg text-white">German Village</span>
            </div>
            <p className="text-sm leading-relaxed text-brick-400">
              Your guide to Columbus&apos;s most historic and walkable neighborhood. Part of the Columbus Trend network.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-serif text-white text-sm font-semibold mb-3 uppercase tracking-wide">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/articles" className="hover:text-white transition-colors">Articles & Guides</Link></li>
              <li><Link href="/condos" className="hover:text-white transition-colors">Condo Guide</Link></li>
              <li><Link href="/neighborhoods" className="hover:text-white transition-colors">Neighborhoods</Link></li>
              <li><Link href="/parks" className="hover:text-white transition-colors">Parks & Green Space</Link></li>
            </ul>
          </div>

          {/* Living */}
          <div>
            <h3 className="font-serif text-white text-sm font-semibold mb-3 uppercase tracking-wide">Living Here</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/favorites" className="hover:text-white transition-colors">Local Favorites</Link></li>
              <li><Link href="/articles/german-village-real-estate-market-guide" className="hover:text-white transition-colors">Real Estate Market</Link></li>
              <li><Link href="/articles/cost-of-living-german-village-columbus" className="hover:text-white transition-colors">Cost of Living</Link></li>
              <li><Link href="/articles/german-village-walkability-transportation-guide" className="hover:text-white transition-colors">Walkability</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-serif text-white text-sm font-semibold mb-3 uppercase tracking-wide">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/articles/history-of-german-village-columbus" className="hover:text-white transition-colors">History</Link></li>
              <li><Link href="/articles/german-village-architecture-guide" className="hover:text-white transition-colors">Architecture</Link></li>
              <li><Link href="/articles/german-village-annual-events-guide" className="hover:text-white transition-colors">Events</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brick-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brick-500">
            &copy; {new Date().getFullYear()} German Village Columbus. Part of the Columbus Trend network. All rights reserved.
          </p>
          <p className="text-xs text-brick-500">
            A <a href="https://mdclimited.com" className="hover:text-brick-300 transition-colors">MDC Realty Limited</a> publication.
          </p>
        </div>
      </div>
    </footer>
  )
}
