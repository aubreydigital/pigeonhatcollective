export const metadata: object = {
  title: 'events | pigeon hat collective',
  description: 'contact phone email social media music and arts collective based in las vegas nevada',
}
import Link from 'next/link';

const EventsPage: React.FC = () => {
  // Sample event data (replace with your actual event data)
  const upcomingEvents = [
    {
      id: 1,
      artists: ['Sunbeam Colleen', 'Sonia Barcelona', 'Switterbeet', 'Pudgel'],
      venue: 'Horse Trailer Hideout',
      address: '1506 S. Main St.',
      cost: 10,
      dayof: 15,
      image: '/assets/images/events/061423.jpeg',
      title: 'Starry Nights',
      date: '2023-06-14',
      tickets: 'https://phc.ticketbud.com/starrynights'
    },
    {
      id: 2,
      artists: ['The Patterns', 'Yard Art', 'Sticker'],
      venue: 'The Griffin',
      address: '511 East Fremont',
      cost: 0,
      dayof: 0,
      date: '2023-06-24',
      image: '/assets/images/events/062423.JPG',
      title: 'Black Sheep x PHC',
      tickets: null
    },
  ]

  const dateFormat = (date:string) => {
  const dateString = new Date(date);
  const formattedDate = dateString.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' });
    return formattedDate
}
  return (
    <div className="container mx-auto py-8 px-4 lg:px-14 text-white text-shadow text-center">
      <h1 className="text-2xl font-bold text-white text-shadow mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 gap-4">
        {upcomingEvents.map((event) => (
          <Link href={event.tickets != null ? event.tickets : '/events'} target={event.tickets != null ? '_blank' : '_self'} key={event.id}>
              <div
                className="bg-white p-4 rounded"
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <div className="rounded flex" style={{width:'7rem', height: '11rem'}} />
                <h3 className="text-lg bg-black p-3 inline-block rounded text-shadow font-semibold mb-2">{event.title}</h3><br />
                <h4 className="text-lg bg-black p-3 inline-block rounded text-shadow font-semibold mb-2">
                {event.artists.join(' | ')}
                  </h4><br />
                {/* <p className="text-shadow bg-black p-3 inline-block rounded">Type: {event.type}</p><br/> */}
                <p className="text-shadow bg-black p-3 inline-block rounded">Date: {dateFormat(event.date)}</p><br />
                <p className="text-shadow bg-black p-3 inline-block rounded">Location: {event.venue}</p>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;