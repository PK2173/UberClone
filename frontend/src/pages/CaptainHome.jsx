import React, { useRef, useState } from "react";
import logo from '../assets/Uber_logo_2018.png';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const CaptainHome = () => {
  const [ridePopPanel, setridePopPanel] = useState(true)
  const [ConfirmridePopPanel, setConfirmridePopPanel] = useState(false)
  const ridePopPanelRef = useRef(false)
  const ConfirmridePopPanelRef = useRef(false)

  useGSAP(function () {
    if (ridePopPanel) {
      gsap.to(ridePopPanelRef.current,{
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ridePopPanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[ridePopPanel])
  
  useGSAP(function () {
    if (ConfirmridePopPanel) {
      gsap.to(ConfirmridePopPanelRef.current,{
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ConfirmridePopPanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[ConfirmridePopPanel])

  return (
    <div className="h-screen">
      <div>
        <img className='w-12 absolute left-5 top-5' src={logo} alt={logo} />
        <Link to='../home' className="fixed top-0 right-0 p-4 bg-white rounded-full m-4 z-50">
          <i className=" text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div ref={ridePopPanelRef} className='fixed w-full z-10  bottom-0 px-3 py-6 pt-12 bg-white'>
        <RidePopUp setridePopPanel={setridePopPanel} setConfirmridePopPanel={setConfirmridePopPanel} />
      </div>
      <div ref={ConfirmridePopPanelRef} className='fixed w-full z-10 h-screen bottom-0 px-3 py-6 pt-12 bg-white'>
        <ConfirmRidePopUp setConfirmridePopPanel={setConfirmridePopPanel} setridePopPanel={setridePopPanel} />
      </div>
    </div>
  )
}

export default CaptainHome