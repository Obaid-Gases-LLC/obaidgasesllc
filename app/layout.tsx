import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@components/theme-provider'
import Navbar from '@components/navigation/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Obaid Gases LLC | Home',
    description: 'Generated by create next app',
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
                    <div className='h-28'>
                        <Navbar/>
                    </div>
                    <div className='px-8 2xl:px-32'>
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
