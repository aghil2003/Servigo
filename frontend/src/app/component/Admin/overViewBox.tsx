'use client';
import React, { useState } from 'react';
import { AiOutlineDollarCircle } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaUserCheck } from "react-icons/fa";

const OverViewBox = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); 

  const handleClick = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index)); 
  };

  const cardContents = [
    {
      icon:<AiOutlineDollarCircle className='w-[40px] h-[40px] p-2 bg-blue-300 rounded-full inline-flex items-center justify-center'/>,
      title: "Total profit",
      value: "$12,340",
      description: "Total revenue this month"
    },
    {
      icon:<HiOutlineShoppingCart className='w-[40px] h-[40px] p-2 bg-green-200 rounded-full inline-flex items-center justify-center'/>,
      title: "Orders",
      value: "1,240",
      description: "Total orders this month"
    },
    {
      icon:<FaUserCheck className='w-[40px] h-[40px] p-2 bg-pink-200 rounded-full inline-flex items-center justify-center'/>,
      title: "Customers",
      value: "432",
      description: "New customers this month"
    }
  ];

  return (
    <div className='w-[650px] h-[800px] bg-white m-[35px] rounded-xl '>
      <div className='mt-[20px] ml-[20px] flex items-baseline justify-between'>
        <p className='text-[#171717] text-[23px] font-bold'>Overview</p>
        <select className="border border-gray-300 bg-[#f5f5f5] rounded-xl px-3 py-2 mr-[30px]">
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div className='ml-[25px] flex h-[250px] w-[600px] mt-[20px] items-center justify-center rounded-xl bg-[#f5f5f5] gap-4'>
        <div></div>
        {cardContents.map((card,index) => (
          <div
            key={index}
            className={`w-[200px] h-[200px] rounded-xl cursor-pointer p-4 ${
              activeIndex === index ? 'bg-white' : 'bg-[#f5f5f5]'
            }`}
            onClick={() => handleClick(index)}
          >
            <div className='text-4xl'>{card.icon}</div>
            <h3 className='text-base font-semibold text-[#333] mt-2'>{card.title}</h3>
            <p className='text-2xl font-bold text-[#171717] mt-2'>{card.value}</p>
            <p className='text-sm text-gray-600 mt-2'>{card.description}</p>
          </div>
        ))}
         <div></div>
      </div>
    </div>
  );
};

export default OverViewBox;
