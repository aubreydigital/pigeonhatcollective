'use client';
import {useState, useEffect} from 'react';
import SingleEvent from '@components/SingleEvent'

export default function EventPage({ params }: { params: { eventId: string } }) {

  const [events, setEvents] = useState<Event[]>([]);
  const [singleEvent, setSingleEvent] = useState<Event[]>([]);
 
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
    tickets: string | null;
  }


const currentDate = new Date();
const currentDateTimezoneOffset = currentDate.getTimezoneOffset();
const currentDateTimezoneOffsetMilliseconds = currentDateTimezoneOffset * 60 * 1000;
const currentDateTimePacific = new Date(currentDate.getTime() - currentDateTimezoneOffsetMilliseconds);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
      const res = await fetch('../api/events');
      const data = await res.json();
      const upcomingEvents = data.filter((event:Event) => {
        const eventDate = new Date(event.date);
        const eventDatePlusOneDay = new Date(eventDate.getTime() + 24 * 60 * 60 * 1000);
        return eventDatePlusOneDay > currentDateTimePacific;
      }).sort((a:Event, b:Event) => {
        const dateA: Date = new Date(a.date);
        const dateB: Date = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
      })
      setEvents(upcomingEvents)
    } catch(err) {
      console.log(err)
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

  if (events.length > 0) {
  let event = events.find((event) => String(event._id) == params.eventId);
  return <SingleEvent event={event} />
} else {
  // Handle case when event item is not found
  return  <div className="loader text-center align-center justify-center flex">
  <h2>Loading...</h2>
  <div className="loader-inner"></div>
</div>;
}
};