import React from 'react'
import Event from './Event'
import { useEffect, useState } from 'react'
import {FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import axios from '../api/axios'
const EVENT_URL = '/events'


const Events = () => {
  
  const [events, setEvents] = useState([]);
  const [leftScroll, setLeftScroll] = useState(false);
  useEffect(() => {
    const fetchEvents = async () =>{
      try {
        const res = await axios.get(EVENT_URL);
        setEvents(res.data);
      } catch (err) {
        if (err.res) {
          console.log(err.res.data);
        }
      }
    }
    fetchEvents();
  }, [])

  useEffect(() => {
    let scrollContainer = document.getElementById('container');
    let leftBtn = document.getElementById('leftBtn');
    let rightBtn = document.getElementById('rightBtn');

    rightBtn.addEventListener('click', () => {
      scrollContainer.style.scrollBehavior = 'smooth';
      scrollContainer.scrollLeft += 240;
    })

    leftBtn.addEventListener('click', () => {
      scrollContainer.style.scrollBehavior = 'smooth';
      scrollContainer.scrollLeft -= 240;
    });

    const handleScroll = () => {
      if(scrollContainer.scrollLeft === 0){
        setLeftScroll(true);
      } else {
        setLeftScroll(false);
      }
    };
    scrollContainer.addEventListener('scroll', handleScroll);

  // Cleanup function to remove event listener
  return () => {
    scrollContainer.removeEventListener('scroll', handleScroll);
  };

  },[leftScroll])
  

  
  return (
    <>
      <h1 className="text-[3em] bold bg-blue-600">Upcoming Events</h1>
      <div className="flex justify-between align-center">
      <IconContext.Provider value={{ color: "rgb(0,0,220)", className: `h-[40px] w-[40px] translate-y-[5.8em] ${leftScroll ? "hidden" : ""} ` }}>
          <div>
            <FaArrowCircleLeft id ='leftBtn'/>          
          </div>
      </IconContext.Provider>
      <div className='pt-[40px] mb-1 flex justify-between bg-red-500 overflow-x-auto pr-[20px] scrollbar-hide' id='container'>
        <ul className='flex flex-row justify-between'>
          {events.map((event, id) => <li key={id}><Event event={event}/></li>)}
        </ul>
      </div>
      <IconContext.Provider value={{ color: "rgb(0,0,220)", className: "h-[40px] w-[40px] translate-y-[5.8em] " }}>
          <div>
            <FaArrowCircleRight id='rightBtn' />
          </div>
        </IconContext.Provider>
      </div>
      
    </>
  )
}

export default Events
