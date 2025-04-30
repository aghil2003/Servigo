// 'use client';
// import React ,{useState} from 'react'

// const overViewBox = () => {
//   const [bgColor, setBgColor] = useState('bg-[#f5f5f5]');

//   const handleClick = () => {
//     // Toggle between blue and green
//     setBgColor(prev => (prev === 'bg-[#f5f5f5]' ? 'bg-white' : 'bg-[#f5f5f5]'));
//   };
//   return (
//     <>
//     <div className='w-[750px] h-[800px] bg-white m-[35px] rounded-xl '>
//         <div className='mt-[20px] ml-[20px] flex items-baseline justify-between'>
//         <p className='text-[#171717] text-[23px] font-bold'>Overview</p>
//         <select className="border border-gray-300 bg-[#f5f5f5]  rounded-xl px-3 py-2 mr-[30px]">
//           <option value="monthly">Monthly</option>
//           <option value="weekly">Weekly</option>
//           <option value="yearly">Yearly</option>
//         </select>
//         </div>
//         <div className='ml-[25px] flex h-[250px] w-[700px] mt-[20px] items-center justify-center rounded-xl bg-[#f5f5f5]'>
//         <div className={`w-[210px] h-[200px] rounded-xl  ${bgColor}`} onClick={handleClick}>
//         </div>
//         <div className={`w-[210px] h-[200px] rounded-xl  ${bgColor}`}  onClick={handleClick}>
//         </div>
//         <div className={`w-[210px] h-[200px] rounded-xl  ${bgColor}`}  onClick={handleClick}>
//         </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default overViewBox

'use client';
import React, { useState } from 'react';

const OverViewBox = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Set initial state to 0 to activate the first div

  const handleClick = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index)); // toggle or switch
  };

  return (
    <div className='w-[650px] h-[800px] bg-white m-[35px] '>
      <div className='mt-[20px] ml-[20px] flex items-baseline justify-between'>
        <p className='text-[#171717] text-[23px] font-bold'>Overview</p>
        <select className="border border-gray-300 bg-[#f5f5f5] rounded-xl px-3 py-2 mr-[30px]">
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div className='ml-[25px] flex h-[250px] w-[600px] mt-[20px] items-center justify-center rounded-xl bg-[#f5f5f5] gap-4'>
        {[0, 1, 2].map(index => (
          <div
            key={index}
            className={`w-[200px] h-[200px] rounded-xl cursor-pointer ${
              activeIndex === index ? 'bg-white' : 'bg-[#f5f5f5]'
            }`}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default OverViewBox;
