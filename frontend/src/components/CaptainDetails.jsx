import React from 'react'
import rendomeDriver from "../assets/rendomeDriver.jpg";

const CaptainDetails = () => {
  return (
    <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-start gap-3">
            <img className="h-10 w-10 rounded-full object-cover" src={rendomeDriver} alt="rendomeDriver" />
            <h4 className="text-lg font-medium">Harsh Patel</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">₹ 296.20</h4>
            <p className="text--sm text-gray-600">Erned</p>
          </div>
        </div>
        <div className="flex justify-evenly p-3 bg-gray-100 rounded-full items-start gap-5 mt-5">
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-timer-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails