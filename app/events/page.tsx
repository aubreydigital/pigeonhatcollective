'use client';
import { useState, useEffect } from 'react';

// export const metadata: object = {
//   title: 'events | pigeon hat collective',
//   description: 'contact phone email social media music and arts collective based in las vegas nevada',
// }
import Link from 'next/link';

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  interface Event {
    _id: number;
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
    tickets: string;
  }

  useEffect(() => {
    const fetchEvents = async () => {
      try {
      const res = await fetch('api/events');
      const data = await res.json();
      setEvents(data)
    } catch(err) {
      console.error(err)
    }
    }

    fetchEvents();
  }, [])

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

const currentDate = new Date();
const currentDateTimezoneOffset = currentDate.getTimezoneOffset();
const currentDateTimezoneOffsetMilliseconds = currentDateTimezoneOffset * 60 * 1000;
const currentDateTimePacific = new Date(currentDate.getTime() - currentDateTimezoneOffsetMilliseconds);

  const upcomingEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    const eventDatePlusOneDay = new Date(eventDate.getTime() + 24 * 60 * 60 * 1000);
    return eventDatePlusOneDay > currentDateTimePacific;
  }).sort((a, b) => {
    const dateA: Date = new Date(a.date);
    const dateB: Date = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  })

  const pastEvents = events
    .filter((event) => {
      const eventDate = new Date(event.date);
      const eventDatePlusOneDay = new Date(eventDate.getTime() + 24 * 60 * 60 * 1000);
      return eventDatePlusOneDay <= currentDateTimePacific;
    })
    .sort((a, b) => {
      const dateA: Date = new Date(a.date);
      const dateB: Date = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

  console.log(events)

  return (
    <div className="container mx-auto py-8 px-4 lg:px-14 text-white text-shadow text-center">
      <h1 className="text-2xl font-bold text-white text-shadow mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 gap-4">
        {upcomingEvents.length > 0 ? upcomingEvents.map((event) => (
          <Link href={`/events/${event._id}`} key={event.title}>
              <div
                className="bg-white p-4 rounded"
                style={{ backgroundImage: `url(https://aubrey.digital/vms_server/server/uploads/images/${event.image})` }}
              >
                <div className="rounded flex" style={{width:'7rem', height: '11rem'}} />
                <h3 className="text-lg bg-black p-3 inline-block rounded text-shadow text-md mx-4 font-semibold mb-2">{event.title}</h3><br />
                <h4 className="text-lg bg-black p-3 inline-block rounded text-shadow text-sm mb-2 mx-8">
                <p className="text-xs text-pink-300">Artists:</p> {event.artists.join(' | ')}
                  </h4><br />
                  {event.visual && event.visual.length > 0 && <><h5 className="text-lg bg-black p-3 inline-block rounded text-shadow text-sm mb-2 mx-8">
                <p className="text-xs text-pink-300">Visual Artists:</p> {event.visual.length > 0 && event.visual.join(' | ')}
                  </h5><br /></>}
                  {event.vendors && event.vendors.length > 0 && <><p className="text-lg bg-black p-3 inline-block rounded text-shadow text-sm mb-2 mx-8">
                <p className="text-xs text-pink-300">Vendors:</p> {event.vendors.join(' | ')}
                  </p><br /></>}
                {/* <p className="text-shadow bg-black p-3 inline-block rounded">Type: {event.type}</p><br/> */}
                <p className="text-shadow bg-black p-3 inline-block text-sm rounded mb-1">{dateFormat(event.date)}</p><br />
                {event.venue != '' && <><p className="text-shadow bg-black p-3 inline-block text-xs rounded mb-10">{event.venue}</p><br /></>}
                {event.tickets != '' && <><Link className="text-shadow bg-black p-3 mb-10 inline-block text-xs rounded hover:text-black hover:bg-white" href={event.tickets} key={event.title}>Buy Tickets</Link><br /></>}
              </div>
          </Link>
        )) : 'There are currently no upcoming Pigeon Hat Collective Events'}
      </div>
      <h1 className="text-2xl font-bold text-white text-shadow my-10" style={{backgroundColor: 'rgba(0,0,0,.3'}}>Past Events</h1>
      <div className="grid grid-cols-1 gap-4">
        {pastEvents.length > 0 ? pastEvents.map((event) => (
          // <Link href={`/events/${event._id}`} key={event.title}>
              <div
                className="bg-white p-4 rounded"
                style={{ backgroundImage: `url(https://aubrey.digital/vms_server/server/uploads/images/${event.image})` }}
              >
                <div className="rounded flex" style={{width:'7rem', height: '11rem'}} />
                <h3 className="text-lg bg-black p-3 inline-block rounded text-shadow text-md mx-4 font-semibold mb-2">{event.title}</h3><br />
                <h4 className="text-lg bg-black p-3 inline-block rounded text-shadow text-sm mb-2 mx-8">
                <p className="text-xs text-pink-300">Artists:</p> {event.artists.join(' | ')}
                  </h4><br />
                  {event.visual && event.visual.length > 0 && <><h5 className="text-lg bg-black p-3 inline-block rounded text-shadow text-sm mb-2 mx-8">
                <p className="text-xs text-pink-300">Visual Artists:</p> {event.visual.length > 0 && event.visual.join(' | ')}
                  </h5><br /></>}
                  {event.vendors && event.vendors.length > 0 && <><p className="text-lg bg-black p-3 inline-block rounded text-shadow text-sm mb-2 mx-8">
                <p className="text-xs text-pink-300">Vendors:</p> {event.vendors.join(' | ')}
                  </p><br /></>}
                {/* <p className="text-shadow bg-black p-3 inline-block rounded">Type: {event.type}</p><br/> */}
                <p className="text-shadow bg-black p-3 inline-block text-sm rounded mb-1">{dateFormat(event.date)}</p><br />
                {event.venue != '' && <><p className="text-shadow bg-black p-3 inline-block text-xs rounded mb-10">{event.venue}</p><br /></>}
                {event.tickets != '' && <><Link className="text-shadow bg-black p-3 mb-10 inline-block text-xs rounded hover:text-black hover:bg-white" href={event.tickets} key={event.title}>Buy Tickets</Link><br /></>}
              </div>
          // </Link>
        )) : 'There are currently no past Pigeon Hat Collective Events'}
      </div>
      {/* <h2 className="text-2xl font-bold text-white text-shadow mt-8">Past Events</h2>
      <div className="grid grid-cols-1 gap-4">
        {pastEvents.length > 0 ? (
          pastEvents.map((event) => (
            <Link href={`/events/${event._id}`} key={event.title}>
              <div
                className="bg-white p-4 rounded"
                style={{ backgroundImage: `url(https://aubrey.digital/vms_server/server/uploads/images/${event.image})` }}
              >
              </div>
            </Link>
          ))
        ) : (
          <p>There are no past Pigeon Hat Collective Events</p>
        )}
      </div> */}
    </div>
  );
};

export default EventsPage;