// import { Search,CalendarDays,Coffee } from "lucide-react";

// export function ServiceBookingGuideContainer() {
//     return (
//       <div className=" h-[475px] w-full rounded-t-[50px]"
//       style={{
//         backgroundImage: "linear-gradient(to bottom,  #c3daf4, #b4c3f0)",
//       }}>
//         <div className="relative top-[30px] items-center text-center">
//           <h1 className="text-black text-[40px] font-bold">How It Works</h1>
//           <p className="text-black text-[20px]">Get your home service done in three simple steps</p>
//         </div>
//         <div className="bg-black w-[200px] h-[3px] rounded relative top-[70px] left-[530px]"></div>
//         <div className="mt-[60px]">
//             <div className="bg-[#101585] rounded-full w-[25px] h-[25px] relative top-[60px] left-[110px] text-white flex justify-center"><span>1</span></div>
//             <div className="bg-[#101585] rounded-full w-[25px] h-[25px] relative top-[35px] left-[472px] text-white flex justify-center"><span>2</span></div>
//             <div className="bg-[#101585] rounded-full w-[25px] h-[25px] relative top-[10px] left-[832px] text-white flex justify-center"><span>3</span></div>
//             <div className=" items-center flex justify-center gap-[60px] ml--[180px] ">
//             <div className="bg-white w-[300px] h-[200px] rounded-lg flex flex-col justify-center items-center gap-3">
//               <div className="bg-[#F0F0F0] w-[60px] h-[60px] rounded-full flex justify-center items-center">
//                 <div className=""> <Search /></div>
//                 </div>
//               <div className="flex flex-col justify-center items-center gap-0">
//                 <p className="text-[20px] font-bold ">Select the service that fits</p>
//                 <p className="text-[20px] font-bold ">your need</p>
//               </div>
//               <div className="flex flex-col justify-center items-center gap-0">
//                 <p className="text-[13px]">Browse through our extensive range of </p>
//                 <p  className="text-[13px]">professional solutions.</p>
//               </div>
//             </div>
//             <div className="bg-white w-[300px] h-[200px] rounded-lg flex flex-col justify-center items-center gap-3">
//             <div className="bg-[#F0F0F0] w-[60px] h-[60px] rounded-full flex justify-center items-center">
//              <div>
//              <CalendarDays />
//              </div>
//               </div>
//               <div className="flex flex-col justify-center items-center gap-0">
//                 <p className="text-[20px] font-bold ">Book preferred time and date</p>
//                 <p className="text-[20px] font-bold "> at your convenience</p>
//               </div>
//               <div className="flex flex-col justify-center items-center gap-0">
//                 <p className="text-[13px]">Pick a time that works best for your</p>
//                 <p  className="text-[13px]">schedule</p>
//               </div>
//             </div>
//             <div className="bg-white w-[300px] h-[200px] rounded-lg flex flex-col justify-center items-center gap-3">
//               <div className="bg-[#F0F0F0] w-[60px] h-[60px] rounded-full flex justify-center items-center">
//                 <div> <Coffee /></div>
//                  </div>
//               <div className="flex flex-col justify-center items-center gap-0">
//                 <p className="text-[20px] font-bold ">Enjoy peace of mind</p>
//                 <p className="text-[20px] font-bold ">while we do the rest</p>
//               </div>
//               <div className="flex flex-col justify-center items-center gap-0">
//                 <p className="text-[13px]">Our verified experts will take care of</p>
//                 <p  className="text-[13px]">everything</p>
//               </div>
//             </div>
//             </div>
//         </div>
//       </div>
//     );
//   }
  

import { Search, CalendarDays, Coffee } from "lucide-react";

export function ServiceBookingGuideContainer() {
  return (
    <div
      className="w-full rounded-t-[50px] py-12 px-4"
      style={{
        backgroundImage: "linear-gradient(to bottom,  #c3daf4, #b4c3f0)",
      }}
    >
      <div className="text-center mb-10">
        <h1 className="text-black text-3xl md:text-4xl font-bold">How It Works</h1>
        <p className="text-black text-lg md:text-xl">Get your home service done in three simple steps</p>
        <div className="bg-black h-[3px] w-24 mx-auto mt-4"></div>
      </div>

      {/* Steps */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Step 1 */}
        <div className="flex flex-col items-center bg-white w-full max-w-[300px] h-[200px] rounded-lg p-4 shadow-md">
          <div className="bg-[#F0F0F0] w-[60px] h-[60px] rounded-full flex justify-center items-center mb-3">
            <Search />
          </div>
          <p className="text-center text-lg font-bold">Select the service that fits your need</p>
          <p className="text-center text-sm mt-2 text-gray-700">Browse through our extensive range of professional solutions.</p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center bg-white w-full max-w-[300px] h-[200px] rounded-lg p-4 shadow-md">
          <div className="bg-[#F0F0F0] w-[60px] h-[60px] rounded-full flex justify-center items-center mb-3">
            <CalendarDays />
          </div>
          <p className="text-center text-lg font-bold">Book preferred time and date at your convenience</p>
          <p className="text-center text-sm mt-2 text-gray-700">Pick a time that works best for your schedule.</p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center bg-white w-full max-w-[300px] h-[200px] rounded-lg p-4 shadow-md">
          <div className="bg-[#F0F0F0] w-[60px] h-[60px] rounded-full flex justify-center items-center mb-3">
            <Coffee />
          </div>
          <p className="text-center text-lg font-bold">Enjoy peace of mind while we do the rest</p>
          <p className="text-center text-sm mt-2 text-gray-700">Our verified experts will take care of everything.</p>
        </div>
      </div>
    </div>
  );
}
