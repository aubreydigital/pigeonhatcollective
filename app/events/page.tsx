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
      artists: ['HRZN','Switterbeet', 'White Noise', 'worseforwear'],
      venue: 'Backstage Bar and Billiards',
      address: '801 E. Fremont St.',
      cost: 12,
      dayof: 12,
      image: '/assets/images/events/060223.PNG',
      date: '2023-06-02',
      title: 'HRZN with Special Guests',
      tickets: 'https://dice.fm/partner/backstage-sports-bar--billiards/event/6nbl2-hrzn-with-special-guests-2nd-jun-backstage-bar-billiards-las-vegas-tickets?dice_id=1007421&dice_channel=web&dice_tags=organic&dice_campaign=Backstage+Sports+Bar+%26+Billiards&dice_feature=marketing&_branch_match_id=992086540279278872&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1Y9MTDEySUtOM080SQYACyOemSEAAAA%3D'
    },
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