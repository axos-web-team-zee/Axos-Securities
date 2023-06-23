import './globals.css'
import { Roboto } from 'next/font/google'
import NavBar from './components/navBar'
import Footer from './components/footer'


const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Axos Securities',
}

export default function RootLayout({children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
