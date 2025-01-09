import React, { useState } from 'react'
import uberLogo from '../assets/Uber_logo_2018.png';
import { Link, useNavigate } from 'react-router-dom'
import { CapatainDataContext } from '../context/CapatainContext';
import axios from 'axios';

const CaptainLogin = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const navigate = useNavigate();
  const {capatain, setCapatain} = React.useContext(CapatainDataContext)

  const submitHandler = async (e)=>{
    e.preventDefault();
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, {email,password});
    
    if(response.status == 200){
      const data = response.data;
      setCapatain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/captain-home')
    }
    setemail('')
    setpassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-10' src={uberLogo} />
      <form onSubmit={(e)=>{submitHandler(e)}}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input value={email} onChange={(e)=>setemail(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" name="email" placeholder="Enter your email" required/>
        <h3 className='text-lg font-medium mb-2'>What's your password</h3>
        <input value={password} onChange={(e)=>setpassword(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='Enter Your Password' required />
        <button type='submit' className='flex items-center justify-center  bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Login</button>
        <p className='text-center'>Join a fleet ? <Link to='/captain-signup' className='text-blue-600' >Register as a caption</Link></p>
      </form>
      </div>
      <div>
        <Link to='/login' className='flex items-center justify-center bg-[#d5622d] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin