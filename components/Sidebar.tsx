'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
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
  Menu,
  X,
  BarChart2,
} from 'lucide-react'
import type { CategorySummary } from '@/lib/reports'

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'industry-news': Newspaper,
  'competitor-intel': Target,
  'weekly-brief': ClipboardList,
  'financial-review': DollarSign,
  'okr-check': CheckSquare,
  'week-review': Calendar,
  'paw-upgrades': Zap,
  'market-discovery': Globe,
  todos: ListTodo,
}

interface SidebarProps {
  categories: CategorySummary[]
}

export default function Sidebar({ categories }: SidebarProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const activeCategory = pathname.split('/')[1] ?? ''

  const nav = (
    <nav className="flex flex-col gap-1">
      {categories.map(({ category, count }) => {
        const Icon = ICONS[category] ?? BarChart2
        const isActive = activeCategory === category
        const label = category
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ')

        return (
          <Link
            key={category}
            href={`/${category}`}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
              isActive
                ? 'bg-violet-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Icon className="w-4 h-4 flex-shrink-0" />
            <span className="flex-1 truncate">{label}</span>
            {count > 0 && (
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-violet-500 text-violet-100' : 'bg-slate-700 text-slate-400'
                }`}
              >
                {count}
              </span>
            )}
          </Link>
        )
      })}
    </nav>
  )

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800 rounded-lg text-slate-300 hover:text-white"
        onClick={() => setOpen(!open)}
        aria-label="Toggle sidebar"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-40 h-screen w-64 bg-slate-950 border-r border-slate-800 flex flex-col transition-transform duration-200 ${
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-4 border-b border-slate-800">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-violet-400" />
            <span className="font-semibold text-white text-sm">CEO Reports</span>
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto p-3">{nav}</div>
      </aside>
    </>
  )
}
