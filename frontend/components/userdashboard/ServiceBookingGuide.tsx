import { Search,CalendarDays,Coffee } from "lucide-react";

export function ServiceBookingGuideContainer() {
    return (
      <div className=" h-[475px] w-full rounded-t-[50px]"
      style={{
        backgroundImage: "linear-gradient(to bottom,  #c3daf4, #b4c3f0)",
      }}>
        <div className="relative top-[30px] items-center text-center">
          <h1 className="text-black text-[40px] font-bold">How It Works</h1>
          <p className="text-black text-[20px]">Get your home service done in three simple steps</p>
        </div>
        <div className="bg-black w-[200px] h-[3px] rounded relative top-[70px] left-[530px]"></div>
        <div className="mt-[60px]">
            <div className="bg-[#101585] rounded-full w-[25px] h-[25px] relative top-[60px] left-[110px] text-white flex justify-center"><span>1</span></div>
            <div className="bg-[#101585] rounded-full w-[25px] h-[25px] relative top-[35px] left-[472px] text-white flex justify-center"><span>2</span></div>
            <div className="bg-[#101585] rounded-full w-[25px] h-[25px] relative top-[10px] left-[832px] text-white flex justify-center"><span>3</span></div>
            <div className=" items-center flex justify-center gap-[60px] ml--[180px] ">
            <div className="bg-white w-[300px] h-[200px] rounded-lg flex flex-col justify-center items-center gap-3">
              <div className="bg-[#F0F0F0] w-[60px] h-[60px] rounded-full flex justify-center items-center">
                <div className=""> <Search /></div>
                </div>
              <div className="flex flex-col justify-center items-center gap-0">
                <p className="text-[20px] font-bold ">Select the service that fits</p>
                <p className="text-[20px] font-bold ">your need</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-0">
                <p className="text-[13px]">Browse through our extensive range of </p>
                <p  className="text-[13px]">professional solutions.</p>
              </div>
            </div>
            <div className="bg-white w-[300px] h-[200px] rounded-lg flex flex-col justify-center items-center gap-3">
            <div className="bg-[#F0F0F0] w-[60px] h-[60px] rounded-full flex justify-center items-center">
             <div>
             <CalendarDays />
             </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-0">
                <p className="text-[20px] font-bold ">Book preferred time and date</p>
                <p className="text-[20px] font-bold "> at your convenience</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-0">
                <p className="text-[13px]">Pick a time that works best for your</p>
                <p  className="text-[13px]">schedule</p>
              </div>
            </div>
            <div className="bg-white w-[300px] h-[200px] rounded-lg flex flex-col justify-center items-center gap-3">
              <div className="bg-[#F0F0F0] w-[60px] h-[60px] rounded-full flex justify-center items-center">
                <div> <Coffee /></div>
                 </div>
              <div className="flex flex-col justify-center items-center gap-0">
                <p className="text-[20px] font-bold ">Enjoy peace of mind</p>
                <p className="text-[20px] font-bold ">while we do the rest</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-0">
                <p className="text-[13px]">Our verified experts will take care of</p>
                <p  className="text-[13px]">everything</p>
              </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
  