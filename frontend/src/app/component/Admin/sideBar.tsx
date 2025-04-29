import React from 'react'
import { FaHome } from 'react-icons/fa';
import { HiMiniIdentification } from "react-icons/hi2";
import { BiPackage } from "react-icons/bi";

const sideBar = () => {
    return (
        <>
            <div className='w-[100px] h-[100%] rounded-tr-lg bg-white flex flex-col gap-[40px] pt-[20px] shadow-md'>
                <div className="flex justify-center items-baseline Font-[100px]">
                    <FaHome size={30}/>
                </div>
                <div className="flex justify-center items-baseline">
                    <HiMiniIdentification size={30}/>
                </div>
                <div className="flex justify-center items-baseline">
                    <BiPackage size={30}/>
                </div>
            </div>

        </>
    )
}

export default sideBar