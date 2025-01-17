import React from "react";
import carLogo from "../assets/carLogo.png";

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setvehiclePanel(false);
          props.setpanelOpen(false);
        }}
        className="p-3 text-center absolute top-0 w-[90%]"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>
      <div className="flex gap-2 justify-between flex-col items-center">
        <img className="h-20" src={carLogo} />
        <div className="w-full ml-2">
          <div className="flex items-center gap-5 border-b-2 border-gray-300 pb-2">
            <i className="text-2xl ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-base text-gray-600">Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-5 border-b-2 border-gray-300 pb-2">
            <i className="text-2xl ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-base text-gray-600">Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <i className="text-2xl ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193</h3>
              <p className="text-base text-gray-600">Kankariya Talab, Bhopal</p>
            </div>
          </div>
        </div>
        <button className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
