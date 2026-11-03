import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans_Arabic, Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
})

export const metadata: Metadata = {
  title: 'Algo Smile — Dr Hazem Tahoun | Cosmetic & Implant Dentistry, Nasr City, Cairo',
  description:
    'Algo Smile clinic — Dr Hazem Tahoun, cosmetic and implant dentistry specialist with 20+ years of experience. Implants, veneers, orthodontics, laser whitening and crowns in 24 hours. 26 Ahmed Fakhry St, Nasr City, Cairo. Book on WhatsApp.',
  keywords: ['Algo Smile', 'Dr Hazem Tahoun', 'dentist Nasr City', 'dentist Cairo', 'dental implants Egypt', 'veneers Cairo', 'teeth whitening Nasr City', 'ألجو سمايل', 'حازم طاحون', 'طبيب أسنان مدينة نصر'],
  icons: {
    icon: '/images/logo-favicon-hd.png',
    apple: '/images/logo-favicon-hd.png',
  },
  openGraph: {
    title: 'Algo Smile — Dr Hazem Tahoun | Dentist in Nasr City, Cairo',
    description:
      'Your smile starts at Algo Smile. Book your appointment with Dr Hazem Tahoun today.',
    type: 'website',
    locale: 'ar_EG',
  },
}

export const viewport: Viewport = {
  themeColor: '#4FC3F7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${playfair.variable} ${plexArabic.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
