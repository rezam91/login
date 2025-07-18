import { Routes, Route } from "react-router-dom"
import Home from './pages/home'
import Register from './pages/register'
import { useState } from "react"

const App = () => {
    const [registered, setRegistered] = useState([])
    const setNewRegistered = (item) => {
        setRegistered([...registered,item])
    }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home persons={registered} />} />
        <Route path="/register" element={<Register onRegister={setNewRegistered} />} />
      </Routes>
    </>
  )
}

export default App
