import React, { useRef, useState } from 'react'
import logo from '../assets/Uber_logo_2018.png';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickup, setpickup] = useState('')
  const [destination, setdestination] = useState('')
  const [panelOpen, setpanelOpen] = useState(false)
  const panalRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setvehiclePanel] = useState(false)
  const [confirmRidePanel, setconfirmRidePanel] = useState(false)
  const [vehicleFound, setvehicleFound] = useState(false)
  const [waitingForDriver, setwaitingForDriver] = useState(false)
  const vehicleRef = useRef(false)
  const vehicleFoundRef = useRef(false)
  const waitingForDriverRef = useRef(false)
  const confirmRidePanelRef = useRef(false)

  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehicleRef.current,{
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehicleRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[vehiclePanel])

  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current,{
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(waitingForDriverRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[waitingForDriver])

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current,{
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehicleFoundRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[vehicleFound])

  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current,{
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[confirmRidePanel])

  const submitHandler = (e)=>{
    e.preventDefault();
  }

  useGSAP(function () {
    if (panelOpen) {   
      gsap.to(panalRef.current,{
        duration: 0.5,
        height: '70%',
        // opacity:1,
        padding:24
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panalRef.current,{
        duration: 0.5,
        height: '0%',
        padding : 0
        // opacity:0,
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-12 absolute left-5 top-5' src={logo} alt={logo} />
      <div className='ml-2 h-screen w-screen'>
        {/* image for teprorary */}
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" />
      </div>
      <div className='h-screen absolute flex flex-col justify-end top-0 w-full'>
          <div className='h-[30%] bg-white p-6 relative'>
            <h5 ref={panelCloseRef} onClick={()=>{setpanelOpen(false)}} className='opacity-0 absolute top-6 right-6 text-2xl'><i className="ri-arrow-down-wide-fill"></i></h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[60%] left-10 bg-gray-500 rounded-sm"></div>
            <input onClick={()=>{setpanelOpen(true)}} value={pickup} onChange={(e)=>{setpickup(e.target.value)}} className='bg-[#eee] px-12 py2 h-14 text-base rounded-lg w-full mt-8' type="text" placeholder='Add a pick up location'/>
            <input onClick={()=>{setpanelOpen(true)}} value={destination} onChange={(e)=>{setdestination(e.target.value)}} className='bg-[#eee] px-12 py2 h-14 text-base rounded-lg w-full mt-3' type="text" placeholder='Enter your destination'/>
          </form>
          </div>
          <div ref={panalRef} className='bg-white'>
            <LocationSearchPanel setpanelOpen={setpanelOpen} setvehiclePanel={setvehiclePanel}/>
          </div>
      </div>
      <div ref={vehicleRef} className='fixed w-full z-10 bottom-0 px-3 py-10 pt-12 translate-y-full bg-white'>
        <VehiclePanel setvehiclePanel={setvehiclePanel} setpanelOpen={setpanelOpen} setconfirmRidePanel={setconfirmRidePanel}/>
      </div>
      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 px-3 py-6 pt-12 translate-y-full bg-white'>
        <ConfirmRide setvehiclePanel={setvehiclePanel} setpanelOpen={setpanelOpen} setconfirmRidePanel={setconfirmRidePanel} setvehicleFound={setvehicleFound}/>
      </div>
      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 px-3 py-6 pt-12 translate-y-full bg-white'>
        <LookingForDriver setvehiclePanel={setvehiclePanel} setpanelOpen={setpanelOpen} setvehicleFound={setvehicleFound}/>
      </div>
      <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white'>
        <WaitingForDriver setvehiclePanel={setvehiclePanel} setpanelOpen={setpanelOpen} setvehicleFound={setvehicleFound} setwaitingForDriver={setwaitingForDriver}/>
      </div>
    </div>
  )
}


export default Home