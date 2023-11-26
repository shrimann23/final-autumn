import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from "./components/Navbar";
import Container from "./components/Container";

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'My wonderful website',
  description: 'Welcome to my website!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
