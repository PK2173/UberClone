import React from 'react'

const LocationSearchPanel = (props) => {
    
    // semple array of location
    const locations = [
      "24B near kapoor's cafa, Sheryianc Coding School, Bhopal",
      "73315 Joselyn Underpass, Bradtkefurt, MA 27385-3788",
      "Suite 201 46363 Penni Crossroad, West Gaylastad, NV 33333-7306",
      "Suite 103 226 Thiel Forge, Josephfurt, RI 13792",
      "65837 Toy Lock, Schummmouth, DE 23008-4124",
      "3995 Maxie Branch, Lake Tawannatown, NC 85818"
    ];
  return (
    <div>
        {/* This is a semple data */}
        {locations.map((items,ind)=>{
            return (
                    <div key={ind} onClick={()=>{props.setvehiclePanel(true) 
                    props.setpanelOpen(false)}} className='flex gap-4 items-center active:border-2 border-black rounded-xl px-2 pt-5'>
                        <h2 className='bg-[#eee] text-3xl rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{items}</h4>
                    </div>
            )
        })}
    </div>
  )
}

export default LocationSearchPanel