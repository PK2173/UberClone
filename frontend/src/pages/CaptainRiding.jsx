import React from 'react'
import logo from '../assets/Uber_logo_2018.png';
import { Link } from 'react-router-dom';

const CaptainRiding = () => {
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

      </div>
    </div>
  )
}

export default CaptainRiding