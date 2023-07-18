'use client'
import { useState, useEffect } from 'react'
import styles from '../styles/HomePage.module.css';
import Image from 'next/image'
import Link from 'next/link';

const SingleEvent = ( event:any ) => {
const [currentEvent, setCurrentEvent] = useState({});
const [eventImage, setEventImage] = useState()

useEffect(() => {
  setEventImage(event.image)
  console.log(event.image)
}, []);

const dateFormat = (date: string) => {
  const dateString = new Date(`${date}T00:00:00Z`);
  const formattedDate = dateString.toLocaleDateString('en-US', {
    timeZone: 'UTC',
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });
  return formattedDate;
};

const {image, title, artists, visual, vendors, address, date, venue, tickets, cost, dayof} = event.event

return (

<div
                className="bg-white p-4 rounded m-10 text-white text-center"
                style={{ backgroundImage: `url(https://aubrey.digital/vms_server/server/uploads/images/${image})` }}
              >
                <div className="rounded flex" style={{width:'7rem', height: '11rem'}} />
                <h3 className="text-lg bg-black p-3 inline-block rounded text-shadow text-md mx-4 font-semibold mb-2">{title}</h3><br />
                <h4 className="text-lg bg-black p-3 inline-block rounded text-shadow text-sm mb-2 mx-8">
                <p className="text-xs text-pink-300">Artists:</p> {artists.join(' | ')}
                  </h4><br />
                  {visual && visual.length > 0 && <><h5 className="text-lg bg-black p-3 inline-block rounded text-shadow text-sm mb-2 mx-8">
                <p className="text-xs text-pink-300">Visual Artists:</p> {visual.length > 0 && visual.join(' | ')}
                  </h5><br /></>}
                  {vendors && vendors.length > 0 && <><p className="text-lg bg-black p-3 inline-block rounded text-shadow text-sm mb-2 mx-8">
                <p className="text-xs text-pink-300">Vendors:</p> {vendors.join(' | ')}
                  </p><br /></>}
                {/* <p className="text-shadow bg-black p-3 inline-block rounded">Type: {type}</p><br/> */}
                <p className="text-shadow bg-black p-3 inline-block text-sm rounded mb-3">{dateFormat(date)}</p><br />
                {venue != '' && <p className="text-shadow bg-black p-3 inline-block text-xs rounded">{venue}</p>}<br />
                {address != '' && <p className="text-shadow bg-black p-3 mb-10 inline-block text-xs rounded">{address}</p>}<br />
                {tickets != '' && <><Link className="text-shadow bg-black p-3 mb-10 inline-block text-xs rounded hover:bg-white hover:text-black" href={tickets} target='_blank' key={title}>Buy Tickets</Link><br /></>}
                <Link className="text-shadow bg-black p-3 inline-block text-sm rounded hover:text-blue-300 mb-10" href="/events">Back</Link>

              </div>
  )
}

export default SingleEvent