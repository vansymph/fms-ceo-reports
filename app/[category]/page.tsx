import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, FileText, Calendar } from 'lucide-react'
import { getReports, CATEGORIES, formatCategoryLabel } from '@/lib/reports'

export const revalidate = 0

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params

  if (!CATEGORIES.includes(category as any)) notFound()

  const reports = getReports(category)
  const label = formatCategoryLabel(category)

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-violet-400 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" /> Dashboard
        </Link>
        <h1 className="text-2xl font-bold text-white">{label}</h1>
        <p className="text-slate-400 text-sm mt-1">
          {reports.length} {reports.length === 1 ? 'report' : 'reports'}
        </p>
      </div>

      {reports.length === 0 ? (
        <div className="text-center py-16 text-slate-500">
          <FileText className="w-10 h-10 mx-auto mb-3 opacity-40" />
          <p>No reports yet for this category.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {reports.map((report) => (
            <Link
              key={report.slug}
              href={`/${category}/${report.slug}`}
              className="group block bg-slate-800 border border-slate-700 hover:border-violet-500 rounded-xl p-5 transition-all duration-200"
            >
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <Calendar className="w-3.5 h-3.5" />
                {report.date}
              </div>
              <p className="text-sm text-slate-300 group-hover:text-white transition-colors leading-relaxed line-clamp-3">
                {report.snippet || 'No preview available'}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
