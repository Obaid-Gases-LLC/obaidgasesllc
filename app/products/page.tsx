import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@components/ui/card";
import cylinder from "@public/Cylinder.png"
import Image from "next/image";

const Products = () => {
    const products = [
        {
            pid: 1,
            pName: "Dry Ice",
            pImage: "/dryice.png",
            pdescription: "Dry ice is the solid form of carbon dioxide. Its used to have fogging effect in food industry.",
        },{
            pid: 2,
            pName: "Liquid Nitrogen",
            pImage: "/liquidnitrogen.png",
            pdescription: "Liquid nitrogen is the liquid form of nitrogen. It is used in various industries.",
        },{
            pid: 3,
            pName: "Nitrogen Gas",
            pImage: "/nitrogengas.png",
            pdescription: "Nitrogen gas is gasious form of nitrogen. It is used in various industries."
        },{
            pid: 4,
            pName: "Helium Gas",
            pImage: "/heliumgas.png",
            pdescription: "Helium gas is gasious form of helium. It is used to fill balloons."
        },{
            pid: 5,
            pName: "Carbondioxide Gas",
            pImage: "/carbondioxidegas.png",
            pdescription: "Carbondioxide gas is gasious form of carbondioxide. It is used in various industries."
        },{
            pid: 6,
            pName: "Argon Gas",
            pImage: "/argongas.png",
            pdescription: "Argon gas is gasious form of argon. It is used in various industries."
        },{
            pid: 7,
            pName: "Acetylene Gas",
            pImage: "/acetylenegas.png",
            pdescription: "Acetylene gas is gasious form of acetylene. It is used in various industries."
        },{
            pid: 8,
            pName: "Oxygen Gas",
            pImage: "/oxygengas.png",
            pdescription: "Oxygen gas is gasious form of oxygen. It is mainly used in medical industry."
        },{
            pid: 9,
            pName: "Nitrogen Mix Gas",
            pImage: "/mixgas.png",
            pdescription: "Mix gas is gasious form of nitrogen. It is used in various industries."
        }
    ]

    return (  
        <div className="flex flex-col">
            <div className="h-[260px] flex-row">
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
                                    {/* <Image src={product.pImage} alt={product.pName} height={150} width={150} /> */}
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
