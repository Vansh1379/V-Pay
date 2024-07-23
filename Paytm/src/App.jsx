import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import Dashboard from './components/Dashboard/Dashboard'
import SendMoney from './components/SendMoney/SendMoney'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/send' element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
