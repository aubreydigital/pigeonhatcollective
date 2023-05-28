'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../styles/HomePage.module.css';

const EventCard = (windowWidth: any, key: number) => {

  return (
    <div className={`${styles['event-card']}`} key={key} style={{height: '60vh'}}>
      <Image
        src="/images/events/052723.JPG"
        alt="Event Image"
        width='1024'
        height='1408'
        className={`absolute inset-0 w-full h-full ${styles['event-image']}`}
      />
      {/* <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Their Home Too Festival II</h3>
        <p>Date: 27th May 2023</p>
        <p>Location: Las Vegas, NV</p>
      </div> */}
      {/* <button className="p-2 bg-white mt-5 rounded shadow" type="button" onClick={()=>console.log('to the purchase point!')}>Buy Tickets</button> */}
      </div>
      )}

export default EventCard