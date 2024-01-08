import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Obaid Gases LLC | Contact',
    description: '',
}

export default function ContactLayout({ children } : { children: React.ReactNode}) {
    return ( 
        <div>
            {children}
        </div>
    )
}