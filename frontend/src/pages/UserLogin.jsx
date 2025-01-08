import React, { useState } from 'react'
import uberLogo from '../assets/Uber_logo_2018.png';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';


const UserLogin = () => {
  const [email, setemail] = useState('')  
  const [password, setpassword] = useState('')
  const {users, setUsers} = React.useContext(UserDataContext)
  const navigate = useNavigate();

  const submitHandler = async (e)=>{
    e.preventDefault();
    const userData = {email, password}
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, userData);
    if(response.status === 200){
      const data = response.data
      setUsers(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }
    // const existingUser = users.find((user) => user.email === email && user.password === password)
    // if(existingUser){
    //   alert('Login Successfull')
    //   navigate('/userdashboard')
    // }
    // else{
    //   alert('Invalid Email or Password')
    // }
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
        <button to='/signup' type='submit' className='flex items-center justify-center  bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Login</button>
        <p className='text-center'>New Here ? <Link to='/signup' className='text-blue-600' >Create new Accout</Link></p>
      </form>
      </div>
      <div>
        <Link to='/captain-login' className='flex items-center justify-center bg-[#10b462e3] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin