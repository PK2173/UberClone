import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSingup from './pages/UserSingup'
import CaptainLogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import CaptainHome from './pages/CaptainHome'
import UserLogout from './pages/UserLogout'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<UserProtectWrapper><Home /></UserProtectWrapper>} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSingup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-home" element={<CaptainHome />} />
        <Route path="*" element={<Start />} />
        <Route path='/user/logout' element={<UserProtectWrapper><UserLogout/></UserProtectWrapper>}/>
      </Routes>
    </div>
  )
}

export default App