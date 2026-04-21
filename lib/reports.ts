import fs from 'fs'
import path from 'path'

const REPORTS_BASE = path.join(process.cwd(), 'reports')

export const CATEGORIES = [
  'industry-news',
  'competitor-intel',
  'weekly-brief',
  'financial-review',
  'okr-check',
  'week-review',
  'paw-upgrades',
  'market-discovery',
  'todos',
  'compliance',
] as const

export type Category = typeof CATEGORIES[number]

export interface Report {
  category: string
  slug: string   // filename without .md
  date: string   // YYYY-MM-DD extracted from filename
  snippet: string
}

export interface CategorySummary {
  category: Category
  count: number
  latest: Report | null
}

function extractDate(filename: string): string {
  const match = filename.match(/^(\d{4}-\d{2}-\d{2})/)
  return match ? match[1] : filename
}

function getSnippet(content: string): string {
  const clean = content
    .replace(/^#{1,6}\s+.+$/gm, '')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`>#~|]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  return clean.slice(0, 200)
}

export function getReports(category: string): Report[] {
  const dir = path.join(REPORTS_BASE, category)
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md') && f !== 'latest.md')
    .sort()
    .reverse()
    .map((filename) => {
      const filePath = path.join(dir, filename)
      const content = fs.readFileSync(filePath, 'utf-8')
      const slug = filename.replace(/\.md$/, '')
      const date = extractDate(slug)
      return { category, slug, date, snippet: getSnippet(content) }
    })
}

export function getAllCategories(): CategorySummary[] {
  return CATEGORIES.map((category) => {
    const reports = getReports(category)
    return { category, count: reports.length, latest: reports[0] ?? null }
  })
}

export function getReport(category: string, slug: string): { content: string; date: string } | null {
  const filePath = path.join(REPORTS_BASE, category, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const content = fs.readFileSync(filePath, 'utf-8')
  return { content, date: extractDate(slug) }
}

export function formatCategoryLabel(category: string): string {
  return category
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}
