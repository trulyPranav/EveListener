import React from 'react'
import Event from './Event'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa'
import { IconContext } from 'react-icons'

const Events = () => {
  
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchEvents = async () =>{
      try {
        const res = await axios.get('http://localhost:3000/events');
        setEvents(res.data);
      } catch (err) {
        if (err.res) {
          console.log(err.res.data);
        }
      }
    }
    fetchEvents();
  }, [])

  const handleScroll = (scrollOffset) => {
    const container = document.getElementById('container');
    if (container) {
      const newScrollPosition = container.scrollLeft + scrollOffset;
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <>
      <h1 className="text-[3em] bold bg-blue-600">Upcoming Events</h1>
      <div className='pt-[40px] mb-1 flex justify-between bg-red-500 overflow-x-auto' id='container'>
        <IconContext.Provider value={{ color: "rgb(0,0,220)", className: "h-[40px] w-[40px] translate-y-[5.8em] hidden" }}>
          <div>
            <button className='hover:bg-blue-400' onClick={() => handleScroll(-200)}><FaArrowCircleLeft/></button>
          </div>
        </IconContext.Provider>
        <ul className='flex flex-row justify-between'>
          {events.map((event, id) => <li key={id}><Event event={event}/></li>)}
        </ul>
        <IconContext.Provider value={{ color: "rgb(0,0,220)", className: "h-[40px] w-[40px] translate-y-[5.8em] " }}>
          <div>
            <button className='hover:bg-blue-400' onClick={() => handleScroll(200)}><FaArrowCircleRight /></button>
          </div>
        </IconContext.Provider>
      </div>
    </>
  )
}

export default Events
