import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div>
        <nav className=''>
            <div className="flex">
            <h1 className='mr-10 mt-10 text-xl'>FindMyDate</h1>
            <div className='container mx-10 flex pl-[100px] items-center justify-between mt-10'>
            <a>Home</a>
            <a>About</a>
            <Link to ='/login'><button className='border bg-black text-white px-4 rounded-xl'>Login</button></Link>
            <Link to = '/register'><button className='border bg-black text-white px-4 rounded-xl'>Register</button></Link>
            </div>
            </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
