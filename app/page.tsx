import Link from 'next/link'
import {
  Newspaper,
  Target,
  ClipboardList,
  DollarSign,
  CheckSquare,
  Calendar,
  Zap,
  Globe,
  ListTodo,
  BarChart2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'
import { getAllCategories, formatCategoryLabel } from '@/lib/reports'

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'industry-news': Newspaper,
  'competitor-intel': Target,
  'weekly-brief': ClipboardList,
  'financial-review': DollarSign,
  'okr-check': CheckSquare,
  'week-review': Calendar,
  'paw-upgrades': Zap,
  'market-discovery': Globe,
  'leads': Target,
  todos: ListTodo,
  compliance: ShieldCheck,
}

export const revalidate = 0

export default function HomePage() {
  const categories = getAllCategories()
  const totalReports = categories.reduce((s, c) => s + c.count, 0)
  const today = new Date().toISOString().slice(0, 10)

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">CEO Reports Dashboard</h1>
        <p className="text-slate-400 text-sm">
          {totalReports} reports across {categories.filter((c) => c.count > 0).length} categories &middot;{' '}
          {today}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(({ category, count, latest }) => {
          const Icon = ICONS[category] ?? BarChart2
          const label = formatCategoryLabel(category)

          return (
            <Link
              key={category}
              href={`/${category}`}
              className="group block bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-violet-500 rounded-xl p-5 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 bg-slate-700 group-hover:bg-violet-900/40 rounded-lg transition-colors">
                  <Icon className="w-5 h-5 text-violet-400" />
                </div>
                <span className="text-xs text-slate-500 bg-slate-700/50 px-2 py-0.5 rounded-full">
                  {count} {count === 1 ? 'report' : 'reports'}
                </span>
              </div>

              <h2 className="font-semibold text-white mb-1 group-hover:text-violet-300 transition-colors">
                {label}
              </h2>

              {latest ? (
                <>
                  <p className="text-xs text-slate-500 mb-2">Latest: {latest.date}</p>
                  <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                    {latest.snippet || 'No preview available'}
                  </p>
                </>
              ) : (
                <p className="text-sm text-slate-500 italic">No reports yet</p>
              )}

              <div className="mt-4 flex items-center gap-1 text-xs text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity">
                View reports <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
