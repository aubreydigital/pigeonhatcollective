'use client';
import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok, FaEnvelope } from 'react-icons/fa';
import EventCard from './EventCard';
import Logo from './Logo';

const Footer: React.FC = () => {
  // Example event data
  const latestEvent = {
    title: 'Next Event',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae condimentum velit.',
    link: '/events/latest',
  };

  // Example blog post data
  const latestBlogPost = {
    title: 'Recent Post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae condimentum velit. Nullam quis vestibulum velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta illum rem dignissimos, blanditiis assumenda nam iusto nemo enim tempora, magni, unde dolor quibusdam! Dolorem quas harum cumque nihil ipsa facilis.',
    link: '/blog/latest',
  };

  const contactInfo = {
    phone: '+1 123-456-7890',
    email: 'info@example.com',
  };
  const upcomingEvents = [
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
    }
  ]
  const {title, artists, venue, address, cost, dayof, image, date, tickets} = upcomingEvents[0]
  const dateString = new Date(date);
  const formattedDate = dateString.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric', timeZone: 'UTC' });
  
  
  return (
    <footer className="footer mt-10">
      
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

        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <h4 className="text-md mb-2">{artists.join(' | ')}</h4>
        <p>{formattedDate}</p>
        <h5>{venue}</h5>
        <p>{address}</p>
        {/* <button className="p-2 bg-white mt-5 rounded shadow" type="button">Buy Tickets</button> */}
          </div>
          {/* Latest Blog Post */}
          <div className="hidden lg:block">
          <h2 className="hidden lg:block text-2xl italic mb-4">{latestBlogPost.title}</h2>
            {/* <h2 className="text-2xl italic">{latestBlogPost.title}</h2> */}
            <p className="bg-white rounded my-4 mx-10 bg-opacity-75 p-5 text-center text-xs">
  Summer of Love was a smashing success! Thanks so much to all who helped organize and put this event together and of course thanks to everybody for coming out despite the inhospitable heat!! You're all amazing! 
<Link className="pl-1 text-base font-bold no-underline transition-colors duration-300 text-purple-800 hover:text-purple-700 hover:shadow-md" href="/about">Learn more</Link>...</p>
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
