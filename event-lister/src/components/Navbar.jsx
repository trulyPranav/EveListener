import React from 'react'

const Navbar = () => {
  return (
    <>
      <div>
        <nav className=''>
            <div className="flex">
            <h1 className='mr-10 mt-10 text-xl'>FindMyDate</h1>
            <div className='container mx-10 flex pl-[100px] items-center justify-between mt-10'>
            <a>Home</a>
            <a>Events</a>
            <a>About</a>
            <a>Contact Us</a>
            <button className='border bg-black text-white px-4 rounded-xl'>Login</button>
            <button className='border bg-black text-white px-4 rounded-xl'>Register</button>
            </div>
            </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
