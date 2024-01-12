import faq from "@public/faq.png";
import Image from 'next/image'

const FAQ = () => {
    return (  
        <div className="flex flex-col">
            <div className='h-[260px] flex-row'>
                <div className='flex justify-center items-left flex-col p-4 font-bold text-4xl'>
                    <p>About Us</p>
                </div>
                <Image src={faq} alt="About Us" height={200} />
            </div>
            <div className='p-4 font-bold text-xl w-full bg-slate-200 dark:bg-slate-500'>
                <span className="text-red-700 dark:text-red-400">Home </span> / FAQ
            </div>
            <div className="flex flex-col items-center">
                <ol>
                    <li className="p-2">
                        <div> Whats  </div>
                        a
                    </li>
                    <li className="p-2">
                        <div> Whats  </div>
                        b
                    </li>
                    <li className="p-2">
                        <div> Whats  </div>
                        c
                    </li>
                    <li className="p-2">
                        <div> Whats  </div>
                        d
                    </li>
                    <li className="p-2">
                        <div> Whats  </div>
                        e
                    </li>
                </ol>
            </div>
        </div>
    );
}
 
export default FAQ;
