import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Obaid Gases LLC | About | Managing Director',
    description: '',
}

export default function AboutLayout({ children } : { children: React.ReactNode}) {
    return ( 
        <div>
            {children}
        </div>
    )
}