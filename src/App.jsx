import { Routes, Route } from "react-router-dom"
import Home from './pages/home'
import Register from './pages/register'
import Header from './components/header'
import { useState } from "react"

const App = () => {
    const [registered, setRegistered] = useState([])
    const setNewRegistered = (item) => {
        setRegistered([...registered,item])
    }

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home persons={registered} />} />
        <Route path="/register" element={<Register onRegister={setNewRegistered} existUsers={registered} />} />
      </Routes>
    </>
  )
}

export default App
