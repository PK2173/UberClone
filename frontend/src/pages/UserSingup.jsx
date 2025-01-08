import React, { useState } from 'react'
import uberLogo from '../assets/Uber_logo_2018.png';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext.jsx'

const UserSingup = () => {
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const {users, setUsers} = React.useContext(UserDataContext)
  const navigate = useNavigate();
    const submitHandler = async (e)=>{
      e.preventDefault();
      const newUser = {
        fullname:{
          firstname:firstname,
          lastname:lastname
        },
        email:email,
        password:password
      }
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`,newUser);
      if(response.status === 201){
        alert("User created successfully");
        const data = response.data
        setUsers(data.user)
        localStorage.setItem('token', data.token)
        navigate('/home')
      }else{
        alert("Error creating user");
      }
      setfirstname()
      setlastname()
      setemail()
      setpassword()
    }
    
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-10' src={uberLogo} />
      <form onSubmit={(e)=>{submitHandler(e)}}>

        <h3 className='text-lg font-medium mb-2'>What's your Name</h3>
        <div className='flex '>
        <input value={firstname} onChange={(e)=>setfirstname(e.target.value)} className='bg-[#eeeeee] w-1/2 mb-7 rounded px-4 py-2 border m-1 text-lg placeholder:text-base' type="text" name="Firstname" placeholder="Enter your First Name" required/>
        <input value={lastname} onChange={(e)=>setlastname(e.target.value)} className='bg-[#eeeeee] w-1/2 mb-7 rounded px-4 py-2 border m-1 text-lg placeholder:text-base' type="text" name="Lastname" placeholder="Enter your Llast Name" required/>
        </div>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input value={email} onChange={(e)=>setemail(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" name="email" placeholder="Enter your email" required/>
        <h3 className='text-lg font-medium mb-2'>What's your password</h3>
        <input value={password} onChange={(e)=>setpassword(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='Enter Your Password' required />
        <button to='/signup' type="submit" className='flex items-center justify-center  bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Create Account</button>
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