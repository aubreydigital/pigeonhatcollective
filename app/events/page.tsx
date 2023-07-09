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
      visual: ['Tagzi', 'Molasses Lush', 'Monica Sanchez', 'We Become Monsters', 'GC Records Pop Up', 'Seth Singer'],
      artists: ['Moonbandits', 'The Rifleman', 'The Quitters', 'Smirl Haggard', 'Wyatt and the Ashes', 'The Groundskeeper'],
      vendors: ['Murderfacee', 'JH Ghost Market', '999 Press', 'Miss Moon', 'Oddities Illustrations'],
      venue: null,
      address: '3065 East Patrick Lane, Las Vegas, NV',
      cost: 0,
      dayof: 0,
      over21: false,
      date: '2023-07-12',
      image: '/assets/images/events/071223.JPG',
      title: 'Nevada Climbing Center and GC Records Presents: Desert Daze',
      tickets: null
    },
    {
      id: 1,
      artists: ['Robert Stokes', 'Dave Cavallo', 'Brock Frabbiele', 'AJ Wyatt'],
      venue: 'The Griffin',
      address: '511 East Fremont St, Las Vegas, NV',
      cost: 0,
      dayof: 0,
      over21: false,
      date: '2023-07-26',
      image: '/assets/images/events/072623.JPG',
      title: 'Vegas Is For Songwriters',
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
                  {event.visual && <h5 className="text-lg bg-black p-3 inline-block rounded text-shadow text-sm mb-2 mx-8">
                {event.visual.join(' | ')}
                  </h5>}<br />
                  {event.vendors && <p className="text-lg bg-black p-3 inline-block rounded text-shadow text-sm mb-2 mx-8">
                {event.vendors.join(' | ')}
                  </p>}<br />
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