import Image from 'next/image'

export default function Home() {
    return (
        <main className="flex flex-col">
            <div className='h-[220px] flex justify-center items-left flex-col p-4'>
                <p className='text-2xl'>Since 2018 </p>
                <span className='text-4xl'>Best Services & <span>Prices</span></span>
                <p>We are pioneers in the direct marketing since 2018 and we are very much</p>
                <p> aware about the potentiality of its distribution in this country.</p>
            </div>
            <div className='p-5'>
                <div>
                    <h2 className='flex items-center justify-center text-3xl mb-10 font-bold'>About Us</h2>
                    <div className='flex flex-col sm:flex-row'>
                        <div className='sm:w-1/2 w-full p-6'>
                            <h2 className='font-bold text-xl'>Obaid Gases LLC</h2>
                            <div>
                                <p className='py-3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obaid Gases LLC is a leading force in the industrial gases sector, specializing in top-tier air products and cutting-edge equipment. Our commitment to excellence is evident in the quality and purity of our diverse range of industrial gases, including oxygen, nitrogen, argon, and helium. With state-of-the-art facilities adhering to international standards, we prioritize stringent quality control and safety measures to surpass customer expectations.</p>
                                <p className='py-3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our comprehensive portfolio extends beyond gases to encompass advanced equipment like pressure vessels, cylinders, and regulators. Crafted with precision and durability, these components enhance the safe and efficient handling of industrial gases in various applications.</p>
                                <p className='py-3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notably, Obaid Gases LLC focuses exclusively on air products and associated equipment, excluding LPG (Liquefied Petroleum Gas) from our offerings. This specialization allows us to excel in our core areas, ensuring unparalleled expertise and reliability for our customers.</p>
                                <p className='py-3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As we navigate the dynamic industrial gases landscape, Obaid Gases LLC remains dedicated to innovation, setting new benchmarks in quality and customer satisfaction. Join us as we pave the way for a future where industrial processes thrive on the excellence of Obaid Gases.</p>
                            </div>
                        </div>
                        <div className='sm:w-1/2 w-full p-4'>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='flex items-center justify-center text-3xl mb-10 font-bold'>Gallery</h2>
                </div>
            </div>
        </main>
    )
}