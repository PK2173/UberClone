import React, { useState } from "react";
import cabPassanger from "../assets/cabPassanger.png";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [otp, setotp] = useState('');

  const sumithHendler = (e) => {
    e.preventDefault()
    console.log(otp)
  }
  return (
    <div>
      <h5
        onClick={() => {
          props.setridePopPanel(false);
        }}
        className="p-3 text-center absolute top-0 w-[90%]"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm this ride to Start
      </h3>
      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg gap-5 mt-3">
        <div className="flex items-center gap-3">
          <img
            src={cabPassanger}
            alt="car"
            className="w-12 h-12 rounded-full object-cover"
          />
          <h2 className="text-lg font-medium">Harsh Patel</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full ml-2 mt-5">
          <div className="flex items-center gap-5 border-b-2 border-gray-300 pb-2">
            <i className="ri-map-pin-user-fill text-2xl"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-base text-gray-600">Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-5 border-b-2 border-gray-300 pb-2">
            <i className="text-2xl ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Third Wave Coffee</h3>
              <p className="text-base text-gray-600">17th Cross Rd, PWD</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <i className="text-2xl ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-base text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <div className="mt-5 w-full">
          <form onSubmit={(e)=>{sumithHendler(e)}}>
            <input type="text" onChange={(e)=>{setotp(e.target.value)}} value={otp} className="bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3" placeholder="Enter OTP" />
            <Link to="../captain-rinding" onClick={() => { props.setridePopPanel(false); props.setConfirmridePopPanel(true); }} className="w-full mt-5 flex justify-center bg-green-600 text-white font-semibold p-2 rounded-lg" > Confirm </Link>
            <button onClick={() => { props.setConfirmridePopPanel(false); }} className="w-full bg-red-600 text-gray-700 font-semibold p-2 rounded-lg mt-2" > Cancel </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
