import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { CapatainDataContext } from '../context/CapatainContext'

const CaptainProtectWrapper = ({ children }) => {
    const navigate = useNavigate()
    const {capatain, setCapatain} = React.useContext(CapatainDataContext)
    const [isLoading, setisLoading] = useState(true)
    const token = localStorage.getItem('token')
  
    useEffect(() => {
      if (!token) {
        navigate('/captain-login')
      }
    }, [token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        if(response.status === 200){
            setCapatain(response.data.capatain)
            setisLoading(false)
        }
    }).catch(err =>{
        console.log(err)
        localStorage.removeItem('token')
        navigate('/captain-login')
    })
    if(isLoading){
        return <div>Loading...</div>
    }
    
    return (
      <div>
        {children}
      </div>
    )
}

export default CaptainProtectWrapper