import '../styles/globals.css'
import { Press_Start_2P } from 'next/font/google'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Provider from '@/components/Provider'
const press = Press_Start_2P({ weight: '400', subsets: ['latin'] })

export const metadata: object = {
  title: 'pigeon hat collective',
  description: 'music and arts collective based in las vegas nevada',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
        <div className="text-center justify-center flex">
        <Navigation />
        </div>
        {children}
        <Footer />
        </Provider>
        </body>
    </html>
  )
}
