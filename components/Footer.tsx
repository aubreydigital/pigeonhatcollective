'use client';
import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa';
import EventCard from './EventCard';

const Footer: React.FC = () => {
  // Example event data
  const latestEvent = {
    title: 'Latest Event',
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

  return (
    <footer className="footer">
      
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center footer-content">
      <h1 style={{ fontFamily: 'Press Start 2P' }} className="pt-7 text-white sm:text-base lg:xl text-white">pigeon hat collective</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
          {/* Latest Event */}
          {/* <div className="hidden lg:block">
            <h2 className="text-2xl font-bold">{latestEvent.title}</h2>
            <p className="text-gray-400">{latestEvent.description}</p>
            <Link href={latestEvent.link} legacyBehavior>
              <a className="text-blue-600 hover:text-blue-800">Read more</a>
            </Link>
          </div> */}
          <div className="hidden lg:block p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">Their Home Too Festival II</h3>
        <p>Date: 27th May 2023</p>
        <p>Location: Starboard Tack - Las Vegas, NV</p>
        {/* <button className="p-2 bg-white mt-5 rounded shadow" type="button">Buy Tickets</button> */}
          </div>
          {/* Latest Blog Post */}
          <div className="hidden lg:block">
            <h2 className="text-2xl italic">{latestBlogPost.title}</h2>
            <p className="text-gray-400">{latestBlogPost.content.substring(0, 200)}...</p>
            <Link href="/blog" legacyBehavior>
              <a className="text-purple-600 hover:text-purple-800">Read more</a>
            </Link>
          </div>

          {/* Contact Info and Social Links */}
          <div className="text-center">
          <h2 className="hidden lg:block text-2xl italic mb-4">Contact</h2>
          <div className="mt-4 flex justify-center items-center mx-auto text-center">
        <Link href="https://www.facebook.com/pigeonhatcollective" target="_blank" className="text-3xl text-black-600 hover:text-black-800 mx-2">
          <FaFacebook />
        </Link>
        <Link href="https://www.instagram.com/pigeonhatcollective" target='_blank' className="text-black-600 text-3xl hover:text-black-800 mx-2">
          <FaInstagram />
        </Link>
        <Link href="https://www.twitter.com/pigeonhatcollective" target="_blank" className="text-black-600 text-3xl hover:text-black-800 mx-2">
          <FaTwitter />
        </Link>
        <Link href="https://www.tiktok.com/@pigeonhatcollective" target="_blank" className="text-black-600 text-3xl hover:text-black-800 mx-2">
          <FaTiktok />
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
