import React from 'react'

const overViewBox = () => {
  return (
    <>
    <div className='w-[750px] h-[400px] bg-white m-[35px] rounded-xl '>
        <div className='mt-[20px] ml-[20px] flex items-baseline justify-between'>
        <p className='text-[#171717] text-[23px] font-bold'>Overview</p>
        <select className="border border-gray-300 bg-[#f5f5f5]  rounded-xl px-3 py-2 mr-[30px]">
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
          <option value="yearly">Yearly</option>
        </select>
        </div>
        <div className=' flex  p-4 items-center justify-center '>
        <div className='w-[230px] h-[250px] bg-[#f5f5f5]  rounded-tl-xl'>
        </div>
        <div className='w-[230px] h-[250px] bg-[#f5f5f5]  '>
        </div>
        <div className='w-[230px] h-[250px] bg-[#f5f5f5]  rounded-tr-xl'>
        </div>
        </div>
    </div>
    </>
  )
}

export default overViewBox