import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar } from 'lucide-react'
import { getReport, CATEGORIES, formatCategoryLabel } from '@/lib/reports'
import MarkdownRenderer from '@/components/MarkdownRenderer'

export const revalidate = 0

export default function ReportPage({ params }: { params: { category: string; date: string } }) {
  const { category, date } = params

  if (!CATEGORIES.includes(category as any)) notFound()

  const report = getReport(category, date)
  if (!report) notFound()

  const label = formatCategoryLabel(category)

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          href={`/${category}`}
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-violet-400 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" /> {label}
        </Link>
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
          <Calendar className="w-3.5 h-3.5" />
          {report.date}
        </div>
        <h1 className="text-2xl font-bold text-white">{label}</h1>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <MarkdownRenderer content={report.content} />
      </div>
    </div>
  )
}
