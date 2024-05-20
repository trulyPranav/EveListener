import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Navbar from '../components/Navbar'
import Register from '../pages/Register'


const Routers = () => {
  return (
    <>
      <Routes>
          <Route index element = {<Home/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/register' element = {<Register/>}/>
      </Routes>
    </>
  )
}

export default Routers
