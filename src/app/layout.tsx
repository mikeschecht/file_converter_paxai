import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'File Converter PaxAI',
  description: 'All-in-one file converter for images, documents, and PDFs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}