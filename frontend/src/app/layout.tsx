import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PROVse',
  description: 'Вантажні роботи та різноробочі послуги у Львові',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="mt-20">
          {children}
        </main>
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
