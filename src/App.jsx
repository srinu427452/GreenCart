import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer';
import { useAppContext } from './context/AppContext'
import Login from './components/Login'

const  App = () => {

  const isSellerPath=useLocation().pathname.includes("seller");
  const {showUserLogin}=useAppContext()

  return (
    <div>

     {isSellerPath ? null : <Navbar/>}
     {showUserLogin ? <Login/>:null }
     
     <Toaster/>

     <div className={`${isSellerPath ? "" : " px-6 md:pd-16 lg:pd-24 xl-pd:32"}`}>
      <Routes>
          <Route path="/" element={<Home/>} />
      </Routes>
     </div>
     {!isSellerPath && <Footer />}
    </div>
  )
}

export default App