import { TbArrowNarrowRight } from "react-icons/tb"
import Image from "next/image"

const CatalogueSection = () => {

    const Catalogue = [
        {
            id: "01",
            category :"BEDROOM SETUP",
            title:"Cossy Bedroom Setup",
            image:"/badroom.jpg",
            description:"family drowing room with a clean and comfortable design for your family."
        },
        {
            id: "02",
            category :"KITCHEN SETUP",
            title:"Neat & Clean Kitchen",
            image:"/kitchen1.jpg",
            description:"family drowing room with a clean and comfortable design for your family."
        },
        {
            id: "03",
            category :"Drowing SETUP",
            title:"Family Drowing Room",
            image:"/drowing.jpg",
            description:"family drowing room with a clean and comfortable design for your family."
        },
        {
            id: "04",
            category :"LIVING SETUP",
            title:"Clean Family Room",
            image:"/living.jpg",
            description:"family drowing room with a clean and comfortable design for your family."
        },
       
    ]
  return (
    <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300 lg:divide-x">
        {
            Catalogue.map((item) =>(
                <div key={item.id}
                className="relative overflow-hidden group"
                >   <div>
                    <Image 
                    src={item.image}
                    width={380}
                    height={100}
                    alt=""
                    className="w-full"
                    />
                     </div>
                    <div className="absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12">
                        <div className="flex justify-between pb-4">
                            <p className="text-sm">{item.category}</p> 
                            <span className="text-sm">{item.id}</span>
                        </div>
                        <a className="block text-xl font-semibold" href="">{item.title}</a>
                        <p className="py-4">{item.description}</p>
                        <a className="inline-flex items-center font-medium" href="">See details <TbArrowNarrowRight className="ml-2"/> </a>
                    </div>
                    <div>
                        
                    </div>
                </div>
                
            ))
        }
    </div>
  )
}

export default CatalogueSection