
import './globals.css'

export const metadata = {
  title: 'ZAD Kitchen',
  description: 'منيو مطبخ زاد',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
