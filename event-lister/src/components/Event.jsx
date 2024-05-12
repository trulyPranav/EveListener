import React from 'react'

const Event = ({event}) => {
  return (
    <>
      <div className='ml-8'>
        <div className="bg-black h-[15em] w-[15em] text-center"><img alt='Event-image'/>{event.image}</div>
        <div className='text-center'>
        {event.title}<br />
        {event.date}/{event.month}/{event.year}
        </div>
      </div>
    </>
  )
}

export default Event
