import { Separator } from "@components/ui/separator";
import { Mail, PhoneCall } from "lucide-react";
import aboutus from "@public/about-us.png";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (  
        <div className="flex flex-col">
            <div className='h-[260px] flex-row'>
                <div className='flex justify-center items-left flex-col p-4 font-bold text-4xl'>
                    <p>About Us</p>
                </div>
                <Image src={aboutus} alt="About Us" height={200} />
            </div>
            <div className='p-4 font-bold text-xl w-full bg-slate-200 dark:bg-slate-500'>
                <span className="text-red-700 dark:text-red-400">Home / About Us</span> / Managing Director(MD)
            </div>
            <div className='sm:p-5'>
                <div className='flex flex-col sm:flex-row'>
                    <div className='sm:w-1/2 w-full p-4'>
                            
                    </div>
                    <div className='sm:w-1/2 w-full sm:p-6 p-2'>
                        <h2 className='font-bold text-xl'>Managing Director(MD)</h2>
                        <div>
                            <div className='py-3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mr. Bushi A. A. is a resilient entrepreneur who has played a significant role in the business landscape of Ajman, particularly through the establishment of various companies such as Al Zahara Gas , Al Huda , etc during his years of work. Despite the initial success, circumstances such as family commitments compelled him to divest these companies. This led Mr. Bushi to temporarily leave the UAE for about four years.</div>
                            <div className='py-3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;During this period, Mr. Bushi faced a challenging financial situation in India. However, his entrepreneurial spirit and strategic planning came to the forefront. Leveraging his expertise and vision, he orchestrated the creation of Obaid Gases upon his return to the UAE.</div>
                            <div className='py-3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obaid Gases emerged as a new venture, reflecting Mr. Bushi`s determination to overcome challenges and establish a successful business. The company`s genesis underscores his ability to adapt to changing circumstances, showcasing his resilience and commitment to entrepreneurship. Through Obaid Gases, Mr. Bushi continues to contribute to the industrial gases sector, showcasing his enduring passion for business and innovation.</div>
                            <div className='py-3 flex flex-col'>
                                <p className='py-1'>Mr. Bushi A A</p>
                                <Link href="mailto:bushilal@gmail.com" className="flex py-1">
                                    &nbsp;&nbsp;
                                    <Mail />
                                    <Separator orientation={"vertical"} className="px-2"/>
                                    bushilal@gmail.com
                                </Link>
                                <Link href={`tel:+971506388772`} className="flex py-1">
                                    &nbsp;&nbsp;
                                    <PhoneCall />
                                    <Separator orientation={"vertical"} className="px-2"/>
                                    050-6388772
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;
