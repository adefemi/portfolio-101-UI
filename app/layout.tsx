import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adefemi Oseni',
  description: 'Welcome to my where I share my experiences and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary">{children}</body>
    </html>
  )
}
