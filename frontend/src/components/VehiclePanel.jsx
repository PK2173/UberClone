import React from 'react'
import carLogo from '../assets/carLogo.png';
import bikeLog from '../assets/bikeLog.png';
import AutoLogo from '../assets/AutoLogo.png';

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={()=>{props.setvehiclePanel(false)
        props.setpanelOpen(false)
      }} className='p-3 text-center absolute top-0 w-[90%]'><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={()=>{props.setconfirmRidePanel(true)
            props.setvehiclePanel(false)
        }} className='flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full items-center p-3 justify-between'>
          <img className='h-12' src={carLogo} />
          <div className=' ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill">4</i></span></h4>
            <h5 className='font-medium text-sm'>2 minis away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rids</p>
          </div>
          <h2 className='text-lg font-semibold'>₹193.20</h2>
        </div>
        <div onClick={()=>{props.setconfirmRidePanel(true)
            props.setvehiclePanel(false)
        }} className='flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full items-center p-3 justify-between'>
          <img className='h-12' src={bikeLog} />
          <div className=' ml-2 w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill">1</i></span></h4>
            <h5 className='font-medium text-sm'>3 minis away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rids</p>
          </div>
          <h2 className='text-lg font-semibold'>₹65.17</h2>
        </div>
        <div onClick={()=>{props.setconfirmRidePanel(true)
            props.setvehiclePanel(false)
        }} className='flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full items-center p-3 justify-between'>
          <img className='h-12' src={AutoLogo} />
          <div className=' ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill">3</i></span></h4>
            <h5 className='font-medium text-sm'>2 minis away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, auto rids</p>
          </div>
          <h2 className='text-lg font-semibold'>₹118.21</h2>
        </div>
    </div>
  )
}

export default VehiclePanel