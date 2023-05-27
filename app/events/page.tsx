export const metadata: object = {
  title: 'contact | pigeon hat collective',
  description: 'contact phone email social media music and arts collective based in las vegas nevada',
}
import Link from 'next/link';

const EventsPage: React.FC = () => {
  // Sample event data (replace with your actual event data)
  const events = [
    {
      id: 1,
      title: 'Concert 1',
      type: 'Concert',
      date: 'June 1, 2023',
      location: 'City, Country',
      flyer: '/images/events/060123.jpg',
    },
    {
      id: 2,
      title: 'Donation Event 1',
      type: 'Donation Event',
      date: 'June 5, 2023',
      location: 'City, Country',
      flyer: '/images/events/062323.jpg',
    },
    // Add more events as needed
  ];

  return (
    <div className="container mx-auto py-8 px-5 text-white text-shadow text-center">
      <h1 className="text-2xl font-bold text-black text-shadow mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {events.map((event) => (
          <Link href={`/blog/${event.id}`} key={event.id}>
              <div
                className="bg-white p-4 rounded"
                style={{ backgroundImage: `url(${event.flyer})` }}
              >
                <div className="rounded" style={{width:'7rem', height: '11rem'}} />
                <h3 className="text-lg text-shadow font-semibold mb-2">{event.title}</h3>
                <p className="text-shadow">Type: {event.type}</p>
                <p className="text-shadow">Date: {event.date}</p>
                <p className="text-shadow">Location: {event.location}</p>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;