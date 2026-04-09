import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '🐑 大师的学习空间',
  description: '一条普通咸鱼的学习日记与日常感悟',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-primary">
              🐑 大师的学习空间
            </Link>
            <nav className="flex gap-6 text-sm text-gray-600">
              <Link href="/" className="hover:text-primary transition-colors">
                首页
              </Link>
              <Link href="/blog" className="hover:text-primary transition-colors">
                文章
              </Link>
            </nav>
          </div>
        </header>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <footer className="bg-white border-t py-6 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-500">
            © 2026 🐑 大师的学习空间. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}