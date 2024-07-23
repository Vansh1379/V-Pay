import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={ } />
          <Route path='/signin' element={ } />
          <Route path='/dashboard' element={ } />
          <Route path='/send' element={ } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
