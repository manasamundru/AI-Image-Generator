import { useContext, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import {Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Login from './Components/Login'
import { AppContest } from './context/AppContest'
function App() {
  const {showLogin} = useContext(AppContest);
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b frm-teal-50 to-orange-50'>
      <ToastContainer position='bottom-right'/>
      <NavBar/>
      {showLogin && <Login/>}
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/buy" element={<BuyCredit/>}/>
        <Route path = "/result" element={<Result/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
