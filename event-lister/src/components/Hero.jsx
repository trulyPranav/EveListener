import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const Hero = () => {
  return (
    <>
      <div className='text-center py-[130px]'>
          <h3 className='main'>Check for your favourite events here!!</h3>
          <form>
          <input type='textbox' placeholder='Search events' className='border rounded-xl px-5'/>
          <div className="relative">
          <IconContext.Provider value={{ color: "rgb(130,144,220)", className: "mx-[40em] translate-y-[-20px] translate-x-[22px]" }}>
                <div>
                  <FaSearch />
                </div>
              </IconContext.Provider>
          </div>
          </form>
        </div>
    </>
  )
}

export default Hero
