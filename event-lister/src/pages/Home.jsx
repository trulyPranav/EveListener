import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Events from '../components/Events'
import About from '../components/About'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Events/>
      <About/>
      <Contact/>
    </>
  )
}

export default Home
