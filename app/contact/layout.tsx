import '../globals.css'
import { Press_Start_2P } from 'next/font/google'
import Navigation from '../components/Navigation'

const inter = Press_Start_2P({ weight: '400', subsets: ['latin'] })

export const metadata: object = {
  title: 'contact | pigeon hat collective',
  description: 'contact phone email social media music and arts collective based in las vegas nevada',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}</body>
    </html>
  )
}
