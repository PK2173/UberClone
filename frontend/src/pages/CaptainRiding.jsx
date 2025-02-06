import React, { useRef, useState } from 'react'
import logo from '../assets/Uber_logo_2018.png';
import { Link } from 'react-router-dom';
import FinishRide from '../components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainRiding = () => {

  const [finisRidePanal, setfinisRidePanal] = useState(false)
  const finisRidePanalRef = useRef(false)

  useGSAP(function () {
    if (finisRidePanal) {
      gsap.to(finisRidePanalRef.current,{
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(finisRidePanalRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[finisRidePanal])

  return (
    <div className="h-screen">
      <div>
        <img className='w-12 absolute left-5 top-5' src={logo} alt={logo} />
        <Link to='../home' className="fixed top-0 right-0 p-4 bg-white rounded-full m-4 z-50">
          <i className=" text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>    
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div onClick={()=>{setfinisRidePanal(true)}} className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-400">
      <h5 className="p-3 text-center absolute top-0 w-[90%]">
            <i className="text-3xl text-black-200 ri-arrow-up-wide-fill"></i>
          </h5>
        <h4 className="text-xl font-semibold">4 KM awayt</h4>
        <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">Complete Ride</button>       
      </div>
        <div ref={finisRidePanalRef} className='fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white'>
          <FinishRide setfinisRidePanal={setfinisRidePanal} />
        </div>
    </div>
  )
}

export default CaptainRiding