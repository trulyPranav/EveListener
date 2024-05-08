import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const Hero = () => {
  return (
    <>
      <div>
          <h3 className='main'>Check for your favourite events here!!</h3>
          <form>
          <input type='textbox' placeholder='Search events' className='search'/>
          <div className="relative">
          <IconContext.Provider value={{ color: "rgb(130,144,220)", className: "Searchicon" }}>
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
