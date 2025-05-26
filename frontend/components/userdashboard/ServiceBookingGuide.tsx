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
