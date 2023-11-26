import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'My wonderful website',
  description: 'Welcome to my website!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="grid gap-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
