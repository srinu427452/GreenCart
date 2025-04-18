import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'

const  App = () => {

  const isSellerPath=useLocation().pathname.includes("seller");

  return (
    <div>

     {isSellerPath ? null : <Navbar/>}
     
     <div className={`${isSellerPath ? "" : " px-6 md:pd-16 lg:pd-24 xl-pd:32"}`}>
      <Routes>
          <Route path="/" element={<Home/>} />
      </Routes>
     </div>
    </div>
  )
}

export default App