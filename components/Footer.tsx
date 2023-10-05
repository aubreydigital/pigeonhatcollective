'use client';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok, FaEnvelope } from 'react-icons/fa';
import EventCard from './EventCard';
import Logo from './Logo';

const Footer: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  interface Event {
    id: number;
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
  useEffect(() => {
    const fetchEvents = async () => {
      try {
      const res = await fetch('/api/events');
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

const currentDate = new Date();
const currentDateTimezoneOffset = currentDate.getTimezoneOffset();
const currentDateTimezoneOffsetMilliseconds = currentDateTimezoneOffset * 60 * 1000;
const currentDateTimePacific = new Date(currentDate.getTime() - currentDateTimezoneOffsetMilliseconds);
  


  
  // Example event data
  const latestEvent = {
    title: 'Next Event',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae condimentum velit.',
    link: '/events/latest',
  };

  // Example blog post data
  const latestBlogPost = {
    title: 'Fall Update',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae condimentum velit. Nullam quis vestibulum velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta illum rem dignissimos, blanditiis assumenda nam iusto nemo enim tempora, magni, unde dolor quibusdam! Dolorem quas harum cumque nihil ipsa facilis.',
    link: '/blog/latest',
  };

  const contactInfo = {
    phone: '+1 123-456-7890',
    email: 'info@example.com',
  };
  const dateString = new Date(events[0]?.date);
  const formattedDate = dateString.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric', timeZone: 'UTC' });
  
  
  return (
    <footer className="footer mt-10">
      
      {/* <div className="bg-black mt-10 text-center footer-content"> */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-10 text-center footer-content">
      {/* <h1 style={{ fontFamily: 'Press Start 2P' }} className="pt-7 text-white sm:text-base lg:xl text-white">pigeon hat collective</h1> */}
      <div className="flex-shrink-0 pt-10 text-center">
              <Link href="/" className="text-white text-sm font-semibold">
                {/* <h1 className="text-white text-xs font-semibold pr-4 inter.className">pigeon hat collective</h1> */}
                <Logo />
              </Link>
            </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
          {/* Latest Event */}
          {/* <div className="hidden lg:block">
            <h2 className="text-2xl font-bold">{latestEvent.title}</h2>
            <p className="text-gray-400">{latestEvent.description}</p>
            <Link href={latestEvent.link} legacyBehavior>
              <a className="text-blue-600 hover:text-blue-800">Read more</a>
            </Link>
          </div> */}
          <div className="hidden lg:block p-2 rounded">
          <h2 className="hidden lg:block text-2xl italic mb-4" style={{ marginTop: '-10px' }}>{latestEvent.title}</h2>

        <h3 className="text-lg font-semibold mb-2">{events[0]?.title}</h3>
        <h4 className="text-md mb-2">{events[0]?.artists.join(' | ')}</h4>
        <p>{formattedDate != 'Invalid Date' ? formattedDate : 'No upcoming events' }</p>
        <h5>{events[0]?.venue}</h5>
        <p>{events[0]?.address}</p>
        {/* <button className="p-2 bg-white mt-5 rounded shadow" type="button">Buy Tickets</button> */}
          </div>
          {/* Latest Blog Post */}
          <div className="hidden lg:block">
          <h2 className="hidden lg:block text-2xl italic mb-4">{latestBlogPost.title}</h2>
            {/* <h2 className="text-2xl italic">{latestBlogPost.title}</h2> */}
            <p className="bg-black rounded my-4 mx-10 bg-opacity-75 p-5 text-center text-xs">
            Autumn is here, and PHC is grinding their gears to bring you mindful fun and entertainment with a side of the usual shenanigans. Our big project this season is our Haunted Carnival music festival on October 28- featuring a wide variety of some of Vegas&apos; best acts, and some special guests from Los Angeles- Glossy and The Sleeperz. We are also in the process of shooting our 2023 Halloween special- featuring several PHC artists and bands, and a horror short featuring PHC members and guest local comedians. Stay tuned...
<br /> <br />
Over the summer, we&apos;ve welcomed new friends into the coop- including one of our new favorite bands, The Patterns. You&apos;ll be able to read more about them soon. In the meantime, check out their debut psychedelia revival/pop LP entitled &quot;Pop!&quot;, and their newly released EP &quot;The Noise Room&quot; on most streaming services.
<br / > <br />
There is more to be announced on the horizon. Mark your calendars for 10/28 and we will see you there
        <br /><br />

<Link className="pl-1 text-base font-bold no-underline transition-colors duration-300 text-purple-800 hover:text-purple-700 hover:shadow-md" href="/about">Read more</Link>...</p>
          </div>

          {/* Contact Info and Social Links */}
          <div className="text-center">
          <h2 className="hidden lg:block text-2xl italic mb-4">Contact</h2>
          <div className="mt-4 flex justify-center items-center mx-auto text-center">
          <Link href="mailto:thepigeonhatcollective@gmail.com" target="_blank" className="text-black-600 text-2xl hover:text-black-800 mx-2">
          <FaEnvelope />
        </Link>
          <Link href="https://www.tiktok.com/@pigeonhatcollective" target="_blank" className="text-black-600 text-2xl hover:text-black-800 mx-2">
          <FaTiktok />
        </Link>
        <Link href="https://www.twitter.com/pigeonhatcollective" target="_blank" className="text-black-600 text-3xl hover:text-black-800 mx-2">
          <FaTwitter />
        </Link>
        <Link href="https://www.instagram.com/pigeonhatcollective" target='_blank' className="text-black-600 text-3xl hover:text-black-800 mx-2">
          <FaInstagram />
        </Link>
        <Link href="https://www.facebook.com/pigeonhatcollective" target="_blank" className="text-3xl text-black-600 hover:text-black-800 mx-2">
          <FaFacebook />
        </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pb-7">
          <p className="text-xs lg:text-base">&copy; {new Date().getFullYear()} Pigeon Hat Collective</p>
        </div>
      </div>
    </footer>
  );

  <style jsx>{`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
`}</style>
};

export default Footer;
