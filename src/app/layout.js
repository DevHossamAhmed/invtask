"use client"
import Header from '@/components/Header/Page'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Page'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider enableSystem={true} attribute='class'>
          <Header/>
            {children}
          <Footer/>
        </ThemeProvider>

      </body>
    </html>
  )
}
