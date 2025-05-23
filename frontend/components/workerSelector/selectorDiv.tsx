

// import React from "react";
// import { GrUserWorker } from "react-icons/gr";

// const WorkerSelectorPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-6xl text-center">
//         <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 flex items-center justify-center gap-3 flex-wrap">
//           Worker Selector Page <GrUserWorker className="text-blue-500 text-3xl sm:text-4xl" />
//         </h1>
//         <p className="mt-2 sm:mt-3 text-base sm:text-lg text-gray-600">
//           Choose the type of worker you're looking for from the list below.
//         </p>

//         <div className="mt-6 md:mt-8 flex flex-col md:flex-row gap-6 bg-[#e6e9f3] rounded-xl p-4">
//           {/* Left Panel */}
//           <div className="w-full md:w-1/2 rounded-xl text-white flex flex-col items-center justify-start">
//             <div className="bg-white w-full rounded-xl p-4 transition transform hover:scale-[1.02] hover:shadow-lg cursor-pointer">
//               {/* Worker Info */}
//               <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
//                 <div className="bg-black w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-xl" />
//                 <div className="text-left text-gray-800">
//                   <h2 className="text-lg sm:text-xl font-semibold">Work Name</h2>
//                   <p className="text-sm text-gray-500">Work caption</p>
//                 </div>
//               </div>

//               {/* Location Selector */}
//               <div className="text-left text-gray-700 space-y-3 mt-4 sm:mt-6">
//                 <h3 className="text-base sm:text-lg font-medium">Select Location</h3>

//                 <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full sm:w-auto">
//                   Use Current Location
//                 </button>

//                 <input
//                   type="text"
//                   placeholder="Search location"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div className="bg-slate-500 w-full h-[200px] sm:h-[250px] md:h-[300px] mt-4 sm:mt-5 rounded-xl flex items-center justify-center text-white text-sm">
//                 Google Map
//               </div>
//             </div>
//           </div>

//           {/* Right Panel */}
//           <div className="w-full md:w-1/2 bg-white rounded-xl p-4 sm:p-6 flex flex-col gap-6 text-gray-700">
//             <div>
//               <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
//                 Available Workers
//               </h2>
//             </div>

//             {/* Search Filters */}
//             <div className="flex flex-col gap-4">
//               <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
//                 <input
//                   type="date"
//                   className="px-4 py-2 w-full sm:w-auto flex-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"
//                 >
//                   Search
//                 </button>
//               </div>

//               <input
//                 type="text"
//                 placeholder="Search by worker name"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Sorting Controls */}
//             <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
//               <button className="px-4 py-2 bg-gray-200 rounded-lg text-sm hover:bg-gray-300 transition">
//                 Sort by Rating
//               </button>

//               <div className="w-full sm:w-auto">
//                 <select
//                   className="block w-full sm:w-[200px] px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 shadow-sm hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                 >
//                   <option value="">Sort by Price</option>
//                   <option value="lowToHigh">Low to High</option>
//                   <option value="highToLow">High to Low</option>
//                 </select>
//               </div>
//             </div>

//             {/* Worker List Placeholder */}
//             <div className="mt-4 flex-1 overflow-y-auto">
//               <p className="text-sm text-gray-500">Worker list will appear here...</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkerSelectorPage;


import React from "react";
import { GrUserWorker } from "react-icons/gr";

const WorkerSelectorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-6xl text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 flex items-center justify-center gap-3 flex-wrap">
          Worker Selector Page <GrUserWorker className="text-blue-500 text-3xl sm:text-4xl" />
        </h1>
        <p className="mt-2 sm:mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the type of worker you're looking for from the list below.
        </p>

        <div className="mt-6 md:mt-8 flex flex-col md:flex-row gap-6 bg-[#e6e9f3] rounded-xl p-4">
          {/* Left Panel */}
          <div className="w-full md:w-1/2 rounded-xl flex flex-col items-center justify-start text-white">
            <div className="bg-white w-full rounded-xl p-4 transition transform hover:scale-[1.02] hover:shadow-lg cursor-pointer">
              {/* Worker Info */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                <div className="bg-black w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-xl shrink-0" />
                <div className="text-left text-gray-800">
                  <h2 className="text-lg sm:text-xl font-semibold">Work Name</h2>
                  <p className="text-sm text-gray-500">Work caption</p>
                </div>
              </div>

              {/* Location Selector */}
              <div className="text-left text-gray-700 space-y-3 mt-4 sm:mt-6">
                <h3 className="text-base sm:text-lg font-medium">Select Location</h3>

                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full sm:w-auto">
                  Use Current Location
                </button>

                <input
                  type="text"
                  placeholder="Search location"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="bg-slate-500 w-full h-[200px] sm:h-[250px] md:h-[300px] mt-4 sm:mt-5 rounded-xl flex items-center justify-center text-white text-sm">
                Google Map
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full md:w-1/2 bg-white rounded-xl p-4 sm:p-6 flex flex-col gap-6 text-gray-700 max-h-[80vh] md:max-h-[600px] overflow-auto">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
                Available Workers
              </h2>
            </div>

            {/* Search Filters */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <input
                  type="date"
                  className="px-4 py-2 w-full sm:w-auto flex-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"
                >
                  Search
                </button>
              </div>

              <input
                type="text"
                placeholder="Search by worker name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Sorting Controls */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <button className="px-4 py-2 bg-gray-200 rounded-lg text-sm hover:bg-gray-300 transition w-full sm:w-auto text-center">
                Sort by Rating
              </button>

              <div className="w-full sm:w-auto">
                <select
                  className="block w-full sm:w-[200px] px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 shadow-sm hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  <option value="">Sort by Price</option>
                  <option value="lowToHigh">Low to High</option>
                  <option value="highToLow">High to Low</option>
                </select>
              </div>
            </div>

            {/* Worker List Placeholder */}
            <div className="mt-4 flex-1 overflow-y-auto">
              <p className="text-sm text-gray-500">Worker list will appear here...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerSelectorPage;
