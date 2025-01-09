import React, { useState } from 'react'
import uberLogo from '../assets/Uber_logo_2018.png';
import { Link, useNavigate } from 'react-router-dom';
import { CapatainDataContext } from '../context/CapatainContext';
import axios from 'axios';

const CaptainSignup = () => {
  const {capatain, setCapatain} = React.useContext(CapatainDataContext)
  const [Captaindata, setCaptaindata] = useState({});
  const navigate = useNavigate()
      const submitHandler = async (e)=>{
        e.preventDefault();
        const captainData = {
          fullname:{
            firstname: Captaindata.firstName || '',
            lastname: Captaindata.lastName || '',
          },
          email: Captaindata.email || '',
          password: Captaindata.password || '',
          vehicle:{
            color: Captaindata.VehicleColor || '',
            plate: Captaindata.VehiclePlate || '',
            capacity: Captaindata.VehicleCapacity || '',
            vehicleType: Captaindata.VehicleType || 'car'
          }
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
        
        if(response.status === 201){
          const data = response.data;
          setCapatain(data.newCaptain)
          localStorage.setItem('token',data.token)
          navigate('/captain-home')
        }else{
          alert('try again')
        }
        setCaptaindata({}) // setCaptaindata({ firstName: '',  lastName: '',  email: '',  password: ''})
      }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-10' src={uberLogo} />
      <form onSubmit={(e)=>{submitHandler(e)}}>

        <h3 className='text-lg font-medium mb-2'>What's your Name</h3>
        <div className='flex '>
        <input value={Captaindata.firstName} onChange={(e)=>setCaptaindata({...Captaindata,firstName:e.target.value})} className='bg-[#eeeeee] w-1/2 mb-7 rounded px-4 py-2 border m-1 text-lg placeholder:text-base' type="text" name="FirstName" placeholder="Enter your First Name" required/>
        <input value={Captaindata.lastName} onChange={(e)=>setCaptaindata({...Captaindata,lastName:e.target.value})} className='bg-[#eeeeee] w-1/2 mb-7 rounded px-4 py-2 border m-1 text-lg placeholder:text-base' type="text" name="LastName" placeholder="Enter your Llast Name" required/>
        </div>

        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input value={Captaindata.email} onChange={(e)=>setCaptaindata({...Captaindata,email:e.target.value})} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" name="email" placeholder="Enter your email" required/>

        <h3 className='text-lg font-medium mb-2'>What's your password</h3>
        <input value={Captaindata.password} onChange={(e)=>setCaptaindata({...Captaindata,password:e.target.value})} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='Enter Your Password' required />

        <h3 className='text-lg font-medium mb-2'>Vehicle information</h3>
        <div className='flex '>
        <input value={Captaindata.VehicleColor} onChange={(e)=>setCaptaindata({...Captaindata,VehicleColor:e.target.value})} className='bg-[#eeeeee] w-1/2 mb-7 rounded px-4 py-2 border m-1 text-lg placeholder:text-base' type="text" name="VehicleColor" placeholder="Vehicle Color" required/>
        <input value={Captaindata.VehiclePlate} onChange={(e)=>setCaptaindata({...Captaindata,VehiclePlate:e.target.value})} className='bg-[#eeeeee] w-1/2 mb-7 rounded px-4 py-2 border m-1 text-lg placeholder:text-base' type="text" name="VehiclePlate" placeholder="Vehicle Plate" required/>
        </div>

        <div className='flex '>
        <input value={Captaindata.VehicleCapacity} onChange={(e)=>setCaptaindata({...Captaindata,VehicleCapacity:e.target.value})} className='bg-[#eeeeee] w-1/2 mb-7 rounded px-4 py-2 border m-1 text-lg placeholder:text-base' type="number" name="VehicleCapacity" placeholder="Vehicle Capacity" required/>
        {/* <input value={Captaindata.VehiclePlate} onChange={(e)=>setCaptaindata({...Captaindata,VehiclePlate:e.target.value})} className='bg-[#eeeeee] w-1/2 mb-7 rounded px-4 py-2 border m-1 text-lg placeholder:text-base' type="text" name="VehiclePlate" placeholder="Vehicle Plate" required/> */}
        <select id="VehicleType" value={Captaindata.VehicleType} onChange={(e)=>setCaptaindata({...Captaindata,VehicleType:e.target.value})} className='bg-[#eeeeee] w-1/2 mb-7 rounded px-4 py-2 border m-1 text-lg placeholder:text-base' name="VehicleType" >
          <option value="car">Car</option>
          <option value="auto">Auto</option>
          <option value="motorcycle">Bike</option>
        </select>
        </div>

        <button to='/signup' type="submit" className='flex items-center justify-center  bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Create Captain Account</button>
        <p className='text-center'>Already have a account ? <Link to='/captain-login' className='text-blue-600' >Login here</Link></p>
      </form>
      </div>
      <div>
        <p className='text-xs leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy</span> and <span className='underline'>Terms of services apply</span></p>
      </div>
    </div>
  )
}

export default CaptainSignup