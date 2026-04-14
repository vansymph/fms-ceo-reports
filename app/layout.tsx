import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import { getAllCategories } from '@/lib/reports'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CEO Reports Dashboard',
  description: 'FindMyShots CEO intelligence reports',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const categories = getAllCategories()

  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <div className="flex h-full">
          <Sidebar categories={categories} />
          <main className="flex-1 overflow-y-auto min-w-0">
            <div className="md:pl-0 pt-14 md:pt-0">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
