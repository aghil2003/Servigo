import React from 'react'
import Navbar from "../component/Admin/navBar";
import Sidebar from "../component/Admin/sideBar";
import OverViewBox from '../component/Admin/overViewBox';
import TopRateingBox from '../component/Admin/TopRateingBox';
import Order from "../component/Admin/Order"

const AdminPage = () => {
  return (
    <div className='bg-[#f5f5f5]'>
      <Navbar/>
      <div className='flex'>
        <div>
          <Sidebar/>
        </div>
        <div className='flex flex-col '>
        <div className='flex'>
          <OverViewBox/>
          <TopRateingBox/>
        </div>
        <div>
          <Order/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage