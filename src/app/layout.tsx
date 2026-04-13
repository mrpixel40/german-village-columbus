import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'German Village Columbus | News, Guides & Neighborhood Info',
    template: '%s | German Village Columbus',
  },
  description: 'Your guide to German Village in Columbus, Ohio. Real estate data, restaurant guides, condo profiles, neighborhood comparisons, parks, events, and everything you need to know about Columbus\'s most historic and walkable neighborhood.',
  keywords: ['German Village', 'Columbus Ohio', 'German Village Columbus', 'Columbus neighborhoods', 'German Village real estate', 'German Village restaurants', 'Schiller Park', 'Columbus historic district'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'German Village Columbus',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
