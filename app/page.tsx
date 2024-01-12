import { Button } from '@components/ui/button'
import industry from '@public/industry.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="flex flex-col">
            <div className='flex justify-center relative w-full sm:h-[750px] h-[200px]'>
                <div className='absolute text-center text-white z-[100] font-bold'>
                    <p className='sm:text-2xl mt-5'>Since 2018 </p>
                    <span className='sm:text-4xl'>Best Services & <span>Prices</span></span>
                    <p>We are pioneers in the direct marketing since 2018 and we are very much</p>
                    <p> aware about the potentiality of its distribution in this country.</p>
                </div>
                <div className='absolute z-[10] w-full flex justify-center items-center'>
                    <Image src={industry} height={1080} alt='Obaid Gases LLC' />
                </div>  
            </div>
            <div className='sm:p-5 mt-10'>
                <div>
                    <h2 className='flex items-center justify-center text-3xl mb-10 font-bold'>About Us</h2>
                    <div className='flex flex-col sm:flex-row'>
                        <div className='sm:w-1/2 w-full sm:p-6 p-2'>
                            <h2 className='font-bold text-xl'>Obaid Gases LLC</h2>
                            <div>
                                <p className='py-3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obaid Gases LLC is a leading force in the industrial gases sector, specializing in top-tier air products and cutting-edge equipment. Our commitment to excellence is evident in the quality and purity of our diverse range of industrial gases, including oxygen, nitrogen, argon, and helium. With state-of-the-art facilities adhering to international standards, we prioritize stringent quality control and safety measures to surpass customer expectations.</p>
                                <p className='py-3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our comprehensive portfolio extends beyond gases to encompass advanced equipment like pressure vessels, cylinders, and regulators. Crafted with precision and durability, these components enhance the safe and efficient handling of industrial gases in various applications.</p>
                                <p className='py-3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are pioneers in the direct marketing since 2018 and we are very much aware about the potentiality of its distribution in this country.........</p>
                                <p className='py-3 flex items-center justify-center'>
                                    <Button>
                                        <Link href='/about/obaidgasesllc'>Read More</Link>
                                    </Button>
                                </p>
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