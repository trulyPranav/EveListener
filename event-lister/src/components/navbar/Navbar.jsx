import React from 'react'
import './Navbar.css'
import Background from "../../assets/image.jpg"
import Modal from 'react-modal'
import { useState } from 'react'
const Navbar = () => {
  const [visible, setvisible] = useState(false);
  
  return (
    <>
      <div className='header' >
       
        <div>
          <nav className='navbar'>
            
              <h2 className='star'>FindmyDate</h2>
              <h3 className='moon' id='day'>MONDAY, 00/00/0000</h3>
              <button className='sun' onClick={() => setvisible(true)}>Login</button>
              <Modal isOpen = {visible} className='modal' onRequestClose={() => setvisible(false)}>
              <form>
                <div>
                  <div className='box'><h2>Login</h2></div>
                  <h3 className='welcome'>Welcome Back!!</h3>
                  <h4 className='ques'>Club id:</h4>
                  <input type='textbox' placeholder='Enter Id' className='input'></input>
                  <h4 className='ques'>Password:</h4>
                  <input type='password' placeholder='Enter Password' className='input'></input><br></br>
                  <button className='signin' onClick={() => setvisible(false)}>Cancel</button>
                  <button className='signin'>Sign in</button>
                </div>  
              </form>
              </Modal>
              <button className='sun'>Register</button>
            
          </nav>
        </div>
        <div>
          <h3 className='main'>Check for your favourite events here!!</h3>
          <form>
          <input type='textbox' placeholder='Search events' className='search'/>
          </form>
        </div>
      </div>
    </>
  )
}

export default Navbar
