
// "use client";

// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import CarpentryImg from "@/public/image/carpenter.jpg";
// import ElectricalImg from "@/public/image/wire.jpg";
// import CleaningImg from "@/public/image/cleaning.jpg";
// import PaintingImg from "@/public/image/painting.jpg";
// import PlumbingImg from "@/public/image/plumbing.jpg";
// import ACRepairImg from "@/public/image/ac-repair.jpg";
// import GardeningImg from "@/public/image/gardening.jpg";
// import ConstractionImg from "@/public/image/constraction.jpg";

// const serviceImages = [
//   { src: CarpentryImg, name: "Carpentry" },
//   { src: ElectricalImg, name: "Electrical" },
//   { src: CleaningImg, name: "Cleaning" },
//   { src: PaintingImg, name: "Painting" },
//   { src: PlumbingImg, name: "Plumbing" },
//   { src: ACRepairImg, name: "AC Repair" },
//   { src: GardeningImg, name: "Gardening" },
//   { src: ConstractionImg, name: "Constraction" },
// ];

// export function ServiceContainer() {
//  const router = useRouter();

//  const handleBookNow = (name: string) => {
//   const formattedName = name.toLowerCase().replace(/\s+/g, "-");
//   router.push(`/workerSelector?service=${encodeURIComponent(formattedName)}`);
// };




//   return (
//     <div className="w-full bg-[#024051] py-12 px-6 sm:px-10 lg:px-[70px] font-poppins">
//       {/* Heading + Search */}
//       <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-6">
//         <div>
//           <h1 className="text-lg md:text-xl font-bold text-[#fdf4a1]">EXPLORE THE WIDE RANGE OF</h1>
//           <h1 className="text-lg md:text-xl font-bold text-[#fdf4a1]">SERVICES WE PROVIDE TO MEET ALL YOUR NEEDS.</h1>
//         </div>
//         <div className="w-full md:w-auto">
//           <div className="flex flex-col md:flex-row w-full md:w-auto gap-2">
//             <input
//               type="text"
//               placeholder="Search for a service..."
//               className="w-full md:flex-1 px-4 py-2 rounded-md md:rounded-l-md md:rounded-r-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fdf4a1]"
//             />
//             <button
//               className="w-full md:w-auto px-4 py-2 bg-[#fdf4a1] text-black rounded-md md:rounded-r-md md:rounded-l-none hover:bg-yellow-200 transition-colors"
//             >
//               Search
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Services Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
//         {serviceImages.map(({ src, name }, index) => (
//           <div
//             key={index}
//             className="bg-white w-full max-w-[250px] rounded-lg shadow-md overflow-hidden flex flex-col items-center"
//           >
//             <div className="w-full h-[200px] relative">
//               <Image
//                 src={src}
//                 alt={name}
//                 width={250}
//                 height={200}
//                 className="object-cover w-full h-full"
//                 priority={index < 4}
//                 placeholder="blur"
//                 blurDataURL="/placeholder.png"
//               />
//             </div>
//             <div className="p-3 text-center font-semibold text-lg">{name}</div>
//             <div className="mb-4">
//               <button
//                  onClick={() => handleBookNow(name)}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
//               >
//                 Book now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CarpentryImg from "@/public/image/carpenter.jpg";
import ElectricalImg from "@/public/image/wire.jpg";
import CleaningImg from "@/public/image/cleaning.jpg";
import PaintingImg from "@/public/image/painting.jpg";
import PlumbingImg from "@/public/image/plumbing.jpg";
import ACRepairImg from "@/public/image/ac-repair.jpg";
import GardeningImg from "@/public/image/gardening.jpg";
import ConstractionImg from "@/public/image/constraction.jpg";

export function ServiceContainer() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleBookNow = (name: string) => {
    const formattedName = name.toLowerCase().replace(/\s+/g, "-");
    router.push(`/workerSelector?service=${encodeURIComponent(formattedName)}`);
  };

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

  return (
    <section className="w-full bg-[#024051] py-12 px-6 sm:px-10 lg:px-[70px] font-poppins">
      <h2 className="sr-only">Available Services</h2>
      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {loading
          ? // Skeleton placeholders with shimmer
            Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-white w-full max-w-[250px] rounded-lg shadow-md overflow-hidden flex flex-col items-center animate-pulse"
                aria-hidden="true"
              >
                <div className="w-full h-[200px] bg-gray-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer" />
                </div>
                <div className="p-3 w-full space-y-2">
                  <div className="h-6 bg-gray-300 rounded"></div>
                  <div className="h-10 bg-gray-300 rounded w-24 mx-auto"></div>
                </div>
              </div>
            ))
          : // Actual services
            serviceImages.map(({ src, name }, index) => (
              <article
                key={index}
                className="bg-white w-full max-w-[250px] rounded-lg shadow-md overflow-hidden flex flex-col items-center"
              >
                <div className="w-full h-[200px] relative">
                  <Image
                    src={src}
                    alt={name}
                    width={250}
                    height={200}
                    className="object-cover w-full h-full"
                    priority={index < 2} // prioritize only first two images
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                  />
                </div>
                <div className="p-3 text-center font-semibold text-lg">{name}</div>
                <div className="mb-4">
                  <button
                    onClick={() => handleBookNow(name)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
                    aria-label={`Book ${name} service`}
                  >
                    Book now
                  </button>
                </div>
              </article>
            ))}
      </div>

      {/* Shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
          background-size: 200% 100%;
        }
      `}</style>
    </section>
  );
}
