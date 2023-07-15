'use client';
import {useState, useEffect} from 'react';

export default function EventPage({ params }: { params: { eventId: string } }) {
  const [events, setEvents] = useState<Event[]>([]);
  interface Event {
    _id: string;
    artists: string[];
    visual: string[];
    vendors: string[] | null;
    venue: string | null;
    address: string;
    cost: number;
    dayof: number;
    date: string;
    image: string;
    title: string;
    tickets: string | null;
  }

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     const res = await fetch('api/events');
  //     const data = await res.json();
  //     setEvents(data)
  //     console.log(data)
  //   }

  //   fetchEvents();
  // }, [])
  // // const event = events.find((event) => event);
  // // console.log(event, params.eventId)
  // if (!event) {
  //   // Handle case when artist item is not found
  //   return <div className="text-white">Event not found</div>;
  // }

  // const {title, venue, address, date, cost, dayof, image, visual, vendors, artists, tickets} = event
  return (
    // <h1 className="text-white">{title}</h1>
    <></>
  )
};