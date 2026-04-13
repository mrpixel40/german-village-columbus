import Link from 'next/link'

interface ArticleCardProps {
  slug: string
  title: string
  category: string
  readTime: string
  metaDescription: string
  basePath?: string
}

export default function ArticleCard({ slug, title, category, readTime, metaDescription, basePath = '/articles' }: ArticleCardProps) {
  return (
    <Link href={`${basePath}/${slug}`} className="block group">
      <article className="bg-white rounded-lg border border-stone-200 p-6 card-hover group-hover:border-brick-300">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-sans font-medium text-village-700 bg-village-50 px-2.5 py-1 rounded-full uppercase tracking-wide">
            {category}
          </span>
          <span className="text-xs text-stone-400 font-sans">{readTime}</span>
        </div>
        <h3 className="font-serif text-lg font-semibold text-brick-900 group-hover:text-brick-700 transition-colors leading-snug mb-2">
          {title}
        </h3>
        <p className="text-sm text-stone-500 leading-relaxed line-clamp-2">
          {metaDescription}
        </p>
      </article>
    </Link>
  )
}
