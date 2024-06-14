import React, { useState } from 'react'

const RegisterCard = () => {

  const [err, setErr] = useState("");
  const [form, setForm] = useState({
    "Unique-id" : 0,
    "club-name" : "",
    "club-abbv" : "",
    "mail-id" : "",
    "password" : ""
  })

  return (
    <>
      <div className="text-center mt-[80px] bg-blue-400 flex flex-col mx-[150px] rounded-[40px] pb-8">
        <h1 className="text-[2em] mb-10">Register</h1>
        <div className='hidden'>Error</div>
        <form action="">
        <div className="block mb-10">
        <label htmlFor="userid" className='mr-2'>Unique ID: </label>
        <input type="text" required placeholder='user Id'  autoComplete = "off" className='rounded-xl pl-2' name='userid'/>
        </div>
        <div className="block mb-10">
          <label htmlFor="clubname" className="mr-2">Club Name: </label>
          <input type="text" className="rounded-xl pl-2" placeholder='Club Name' name='clubname'/>
        </div>
        <div className="block mb-10">
          <label htmlFor="clubabb" className="mr-2">Club Abbv: </label>
          <input type="text" className='rounded-xl pl-2' placeholder='Ex : IEEE, GDSC etc..' name='clubabb'/>
        </div>
        <div className="block mb-10">
          <label htmlFor="mail" className="mr-2">Club Mail ID: </label>
          <input type="email" className="rounded-xl pl-2" placeholder='Email' name='mail'/>
        </div>
        <div className="block mb-10">
          <label htmlFor="logo" className="mr-2 pl-[60px]">Upload Logo :</label>
          <input type="file" name="logo" id="" className='rounded-sm'/>
        </div>
        <div className="block mb-10">
          <label htmlFor="password" className="mr-2">Enter A password: </label>
          <input type="password" name="password" id="" placeholder='Enter a password' className='rounded-xl pl-2'/>
        </div>
        <div className="block mb-10">
          <label htmlFor="repassword" className="mr-2">ReEnter password: </label>
          <input type="password" className="rounded-xl pl-2" placeholder='ReEnter  Pasword'/>
        </div>
        <div className="block">
          <button className="rounded-xl bg-white hover:bg-slate-400 px-2">Register</button>
        </div>
        </form>
      </div>
    </>
  )
}

export default RegisterCard
