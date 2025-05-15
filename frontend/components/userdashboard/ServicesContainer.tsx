
import Image from "next/image";
import CarpentryImg from "@/public/image/carpenter.jpg";
import ElectricalImg from "@/public/image/wire.jpg";
import CleaningImg from "@/public/image/cleaning.jpg";
import PaintingImg from "@/public/image/painting.jpg";
import PlumbingImg from "@/public/image/plumbing.jpg";
import ACRepairImg from "@/public/image/ac-repair.jpg";
import GardeningImg from "@/public/image/gardening.jpg";
import ConstractionImg from "@/public/image/constraction.jpg";


const serviceImages = [
  { src: CarpentryImg, name: "Carpentry" },
  { src: ElectricalImg, name: "Electrical" },
  { src: CleaningImg, name: "Cleaning" },
  { src: PaintingImg, name: "Painting" },
  { src: PlumbingImg, name: "Plumbing" },
  { src: ACRepairImg, name: "AC Repair" },
  { src: GardeningImg, name: "Gardening" },
  { src: ConstractionImg, name: "Constraction" },
];

export function ServiceContainer() {
  return (
    <div className="w-full bg-[#024051] py-12 px-[70px] font-poppins">
      <div className="flex flex-col md:flex-row items-start md:items-baseline justify-between mb-8">
        <div>
          <h1 className="text-[20px] font-bold leading-tight text-[#fdf4a1] mt-2">
            EXPLORE THE WIDE RANGE OF
          </h1>
          <h1 className="text-[20px] font-bold leading-tight text-[#fdf4a1] mt-2">
            SERVICES WE PROVIDE TO MEET ALL YOUR NEEDS.
          </h1>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="flex max-w-md">
            <input
              type="text"
              placeholder="Search for a service..."
              className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fdf4a1]"
            />
            <button className="px-4 py-2 bg-[#fdf4a1] text-black rounded-r-md hover:bg-[#fdf4a1]">
              Search
            </button>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {serviceImages.map(({ src, name }, index) => (
  <div
    key={index}
    className="bg-white w-[250px] h-[300px] rounded-lg shadow-md overflow-hidden"
  >
    <div className="w-full h-[200px] relative">
      {/* <Image
        src={src} 
        alt={name}
        width={250}
        height={200}
        className="object-cover w-full h-[200px]"
        priority={index < 4} 
      /> */}
      <Image
       src={src}
       alt={name}
       width={250}
       height={200}
       className="object-cover w-full h-[200px]"
       priority={index < 4}
       placeholder="blur"
       blurDataURL="/placeholder.png" 
       />

    </div>
    <div className="p-2 text-center font-semibold">{name}</div>
    <div className="font-poppins ml-[50px] px-3 font-semibold w-[150px] py-2 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 hover:scale-105 transition duration-300">
      <button>Book now</button>
    </div>
  </div>
))}

      </div>
    </div>
  );
}

  