import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AOR Partner Evaluation',
  description: 'Agency of Record Partner Evaluation Framework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}