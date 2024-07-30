import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import Dashboard from './pages/Dashboard/Dashboard'
import Send from './pages/SendMoney/Send'
import LandingPage from './pages/LandingPage/LandingPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/send' element={<Send />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
