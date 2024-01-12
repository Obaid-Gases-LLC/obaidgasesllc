import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@components/ui/card";
import cylinder from "@public/Cylinder.png"
import Image from "next/image";

const Products = () => {
    const products = [
        {
            pid: 1,
            pName: "Dry Ice",
            pImage: "/dryice.png",
            pdescription: "Dry ice is the solid form of carbon dioxide. It is used primarily as a cooling agent. Its advantages include lower temperature than that of water ice and not leaving any residue (other than incidental frost from moisture in the atmosphere). It is useful for preserving frozen foods where mechanical cooling is unavailable.",
        },{
            pid: 2,
            pName: "Liquid Nitrogen",
            pImage: "/liquidnitrogen.png",
            pdescription: "Liquid nitrogen is a cryogenic fluid that can cause rapid freezing on contact with living tissue. When appropriately insulated from ambient heat, liquid nitrogen can be stored and transported, for example in vacuum flasks. The temperature is held constant at 77 K by slow boiling of the liquid, resulting in the evolution of nitrogen gas. Depending on the size and design, the holding time of vacuum flasks ranges from a few hours to a few weeks.",
        },{
            pid: 3,
            pName: "Nitrogen Gas",
            pImage: "/nitrogengas.png",
            pdescription: "Nitrogen Gas"
        },{
            pid: 4,
            pName: "Helium Gas",
            pImage: "/heliumgas.png",
            pdescription: "Helium Gas"
        },{
            pid: 5,
            pName: "Carbondioxide Gas",
            pImage: "/carbondioxidegas.png",
            pdescription: "Carbondioxide Gas"
        },{
            pid: 6,
            pName: "Argon Gas",
            pImage: "/argongas.png",
            pdescription: "Argon Gas"
        },{
            pid: 7,
            pName: "Acetylene Gas",
            pImage: "/acetylenegas.png",
            pdescription: "Acetylene Gas"
        },{
            pid: 8,
            pName: "Oxygen Gas",
            pImage: "/oxygengas.png",
            pdescription: "Oxygen Gas"
        },{
            pid: 9,
            pName: "Nitrogen Mix Gas",
            pImage: "/mixgas.png",
            pdescription: "Mix Gas"
        }
    ]

    return (  
        <div className="flex flex-col">
            <div className="h-[220px] flex-row">
                <div className='flex justify-center items-left flex-col p-4 font-bold text-4xl'>
                    <p>Product</p>
                </div>
                <Image src={cylinder} alt="Cylinder" height={200} />
            </div>
            <div className='mb-5 sm:mb-0 p-4 font-bold text-xl w-full bg-slate-200 dark:bg-slate-500'>
                <span className="text-red-700 dark:text-red-400">Home</span> / Products
            </div>
            <div className="sm:p-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <Card key={product.pid} className="p-2">
                            <CardHeader>
                                <CardTitle>{product.pName}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col">
                                    <p className="text-sm">{product.pdescription}</p>
                                    <Image src={product.pImage} alt={product.pName} height={150} width={150} />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <p className="text-right">{product.pid}</p>
                            </CardFooter>
                        </Card>
                    ))}
                    
                </div>
            </div>
        </div>
    );
}
 
export default Products;
