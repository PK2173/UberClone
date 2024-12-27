import React, { useState } from 'react'
import uberLogo from '../assets/Uber_logo_2018.png';
import { Link } from 'react-router-dom'

const UserSingup = () => {
  const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const submitHandler = (e)=>{
      e.preventDefault();
      console.log(email, password)
      setemail('')
      setpassword('')
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-10' src={uberLogo} />
      <form onSubmit={(e)=>{submitHandler(e)}}>

        <h3 className='text-lg font-medium mb-2'>What's your Name</h3>
        <div className='flex '>
        <input value={email} onChange={(e)=>setemail(e.target.value)} className='bg-[#eeeeee] w-1/2 mb-7 rounded px-4 py-2 border m-1 text-lg placeholder:text-base' type="text" name="FirstName" placeholder="Enter your First Name" required/>
        <input value={email} onChange={(e)=>setemail(e.target.value)} className='bg-[#eeeeee] w-1/2 mb-7 rounded px-4 py-2 border m-1 text-lg placeholder:text-base' type="text" name="LastName" placeholder="Enter your Llast Name" required/>
        </div>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input value={email} onChange={(e)=>setemail(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" name="email" placeholder="Enter your email" required/>
        <h3 className='text-lg font-medium mb-2'>What's your password</h3>
        <input value={password} onChange={(e)=>setpassword(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='Enter Your Password' required />
        <Link to='/signup' className='flex items-center justify-center  bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Login</Link>
        <p className='text-center'>Already have a account ? <Link to='/login' className='text-blue-600' >Login here</Link></p>
      </form>
      </div>
      <div>
        <p className='text-xs leading-tight'>By proceeed, you consent to get calls, WhatsApp or MSM messages, including by automated means, from Uber and its affiliats to the number provided</p>
      </div>
    </div>
  )
}

export default UserSingup