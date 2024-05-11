import React from 'react'
import Event from './Event'

const Events = () => {
  return (
    <>
      <h1 className="text-[3em] bold bg-blue-600">Upcoming Events</h1>
       {/*Code for Mapping below 
    ....
    ....
  */}
      <div className='pt-[40px] mb-1 flex justify-between bg-red-500'>
        <Event/>
      </div>
    </>
  )
}

export default Events
