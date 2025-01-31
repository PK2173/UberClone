import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import Riding from './pages/Riding'
import UserSingup from './pages/UserSingup'
import CaptainLogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import CaptainRiding from './pages/CaptainRiding'
import CaptainHome from './pages/CaptainHome'
import UserLogout from './pages/UserLogout'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<UserProtectWrapper><Home /></UserProtectWrapper>} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/signup" element={<UserSingup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-rinding" element={<CaptainRiding />} />
        <Route path="/captain-home" element={<CaptainProtectWrapper><CaptainHome /></CaptainProtectWrapper>} />
        <Route path="*" element={<Start />} />
        <Route path='/user/logout' element={<UserProtectWrapper><UserLogout/></UserProtectWrapper>}/>
      </Routes>
    </div>
  )
}

export default App