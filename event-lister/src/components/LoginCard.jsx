import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const LoginCard = () => {

  return (
    <>
      <div className="text-center my-[80px] bg-blue-400 flex flex-col mx-[150px] rounded-[40px]">
        <h1 className="text-[2em] mb-10">Login</h1>
      <form>
        <div className="block mb-10">
        <label htmlFor="username" className=''>Username: </label>
        <input type="text" name="username" placeholder='username' className='rounded-xl'/>
        </div>
        <div className="block">
        <label htmlFor="username">Password: </label>
        <input type="password" name="username" placeholder='Password' className='rounded-xl'/>
        </div>
        <div className="block mt-10">
          <button className="bg-white px-5 rounded-md">Login</button>
        </div>
        <div className="text-black mt-5">Are you an community looking to post your events??</div>
        <Link to='/register'><div className='underline mb-5'>Register here</div></Link>
      </form>

      </div>
    </>
  )
}

export default LoginCard
