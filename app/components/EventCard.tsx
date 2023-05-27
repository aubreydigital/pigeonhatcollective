'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../HomePage.module.css';

const EventCard = (windowWidth: any, height: string) => {

  return (
    <div className={`${styles['event-card']}`} style={{height: height ? height : '75vh'}}>
      <Image
        src="/images/events/060123.jpg"
        alt="Event Image"
        width='1024'
        height='1408'
        className={`absolute inset-0 w-full h-full ${styles['event-image']}`}
      />
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Event 1</h3>
        <p>Date: 20th June 2023</p>
        <p>Location: City, Country</p>
      </div><button className="p-2 bg-white mt-5 rounded shadow" type="button" onClick={()=>console.log('to the purchase point!')}>Buy Tickets</button></div>
      )}

export default EventCard