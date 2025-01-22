import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'PROVse | Вантажні роботи та різноробочі послуги у Львові',
  description: 'Переїзди, демонтаж, вивіз сміття та інші фізичні роботи',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <Navbar />
        <main className="mt-20">
          {children}
        </main>
      </body>
    </html>
  )
}
