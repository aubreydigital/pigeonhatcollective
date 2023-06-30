export const metadata: object = {
  title: 'events | pigeon hat collective',
  description: 'contact phone email social media music and arts collective based in las vegas nevada',
}
import Link from 'next/link';

const EventsPage: React.FC = () => {
  // Sample event data (replace with your actual event data)
  const upcomingEvents = [
    {
      id: 0,
      artists: ['Eloteros', 'Psycho', 'Part II & the Electric Boogaloo', 'Muertos Heist', 'Bad Juju', 'Kurian', 'Fooski'],
      venue: 'House Show',
      address: '5245 S Eastern, Las Vegas, NV',
      cost: 10,
      dayof: 10,
      date: '2023-06-30',
      image: '/assets/images/events/063023ig.JPG',
      title: 'Digital Circus x Pigeon Hat Collective x Fluorescent Records Present: Summer of Love',
      tickets: null
    },
    {
      id: 1,
      artists: ['Mariposa', 'Andrew Romanelli', 'Garrett James Dillon', 'Gracie Garrett', 'Jennifer Battisti', 'Mike Falconer'],
      venue: 'Red Dwarf',
      address: '1305 Vegas Valley Dr., Las Vegas, NV',
      cost: 0,
      dayof: 0,
      date: '2023-07-03',
      image: '/assets/images/events/070323.JPG',
      title: 'Avantpop Bookstore Presents: Doomed Poetry',
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
                <h3 className="text-lg bg-black p-3 inline-block rounded text-shadow text-md mx-4 font-semibold mb-2">{event.title}</h3><br />
                <h4 className="text-lg bg-black p-3 inline-block rounded text-shadow text-sm mb-2 mx-8">
                {event.artists.join(' | ')}
                  </h4><br />
                {/* <p className="text-shadow bg-black p-3 inline-block rounded">Type: {event.type}</p><br/> */}
                <p className="text-shadow bg-black p-3 inline-block text-sm rounded mb-1">{dateFormat(event.date)}</p><br />
                {event.venue != 'House Show' && <p className="text-shadow bg-black p-3 inline-block text-xs rounded">{event.venue}</p>}
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;