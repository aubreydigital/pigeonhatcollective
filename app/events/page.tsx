export const metadata: object = {
  title: 'events | pigeon hat collective',
  description: 'contact phone email social media music and arts collective based in las vegas nevada',
}
import Link from 'next/link';

const EventsPage: React.FC = () => {
  // Sample event data (replace with your actual event data)
  const events = [
    {
      id: 1,
      heading: 'Pigeon Hat Collective x Black Sheep Booking Present',
      bands: ['The Patterns', 'Yard Art', 'Sticker'],
      type: 'Concert',
      date: 'May 27, 2023',
      location: 'Las Vegas, Nevada',
      flyer: 'assets/images/events/062423.JPG',
    },
    // {
    //   id: 2,
    //   title: 'Donation Event 1',
    //   type: 'Donation Event',
    //   date: 'June 5, 2023',
    //   location: 'City, Country',
    //   flyer: '/images/events/062323.jpg',
    // },
    // Add more events as needed
  ];

  return (
    <div className="container mx-auto py-8 px-5 text-white text-shadow text-center">
      <h1 className="text-2xl font-bold text-black text-shadow mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 gap-4">
        {events.map((event) => (
          <Link href={`/blog/${event.id}`} key={event.id}>
              <div
                className="bg-white p-4 rounded"
                style={{ backgroundImage: `url(${event.flyer})` }}
              >
                <div className="rounded flex" style={{width:'7rem', height: '11rem'}} />
                <h3 className="text-lg bg-black p-3 inline-block rounded text-shadow font-semibold mb-2">{event.heading}</h3><br />
                <h4 className="text-lg bg-black p-3 inline-block rounded text-shadow font-semibold mb-2">
                {event.bands.map((band) => {
                  return (
    <span className="mx-3" key={band}>{band} </span>
  )})}
                  </h4><br />
                {/* <p className="text-shadow bg-black p-3 inline-block rounded">Type: {event.type}</p><br/> */}
                <p className="text-shadow bg-black p-3 inline-block rounded">Date: {event.date}</p><br />
                <p className="text-shadow bg-black p-3 inline-block rounded">Location: {event.location}</p>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;