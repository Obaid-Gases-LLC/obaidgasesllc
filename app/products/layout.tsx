import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Obaid Gases LLC | Products',
    description: '',
}

export default function ProductsLayout({ children } : { children: React.ReactNode}) {
    return ( 
        <div>
            {children}
        </div>
    )
}