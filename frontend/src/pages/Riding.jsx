import React from "react";
import carLogo from "../assets/carLogo.png";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to='../home' className="fixed top-0 left-0 p-4 bg-white rounded-full m-4 z-50">
      <i className=" text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2 ">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex justify-between items-center">
          <img className="h-16" src={carLogo} />
          <div className="text-right">
            <h2 className="text-lg font-medium">Praveen </h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">DL06 PK 4973</h4>
            <p className="text-sm text-gray-600">White Suzuki S-Presso LXI</p>
          </div>
        </div>
        <div className="flex gap-2 justify-between flex-col items-center">
          <div className="w-full ml-2 mt-5">
            <div className="flex items-center gap-5 border-b-2 border-gray-300 pb-2">
              <i className="ri-map-pin-user-fill text-2xl"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-base text-gray-600">
                  Kankariya Talab, Bhopal
                </p>
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
        </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;
