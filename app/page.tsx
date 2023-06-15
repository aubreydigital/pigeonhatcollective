'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import 'animate.css';
import styles from '../styles/HomePage.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CarouselProps } from 'react-responsive-carousel';
import EventCard from '../components/EventCard';
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaEnvelope } from 'react-icons/fa';
import { Kumar_One_Outline, Montserrat } from 'next/font/google';
import EventCarousel from '@/components/EventCarousel';
const monser = Montserrat({
  subsets: ['latin'],
  weight: ['100']
})
const kumar = Kumar_One_Outline({
  weight: ['400'],
  subsets: ['latin']
}) 

const HomePage: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [events, setEvents] = useState<any[]>([]);

  const filterPastEvents = () => {
    const currentDate = new Date();
    const filteredEvents = events.filter((event) => {
      // Parse the event date and compare with the current date
      const eventDate = new Date(event.date);
      return eventDate >= currentDate;
    });
    setEvents(filteredEvents);
  };

  const upcomingEvents = [
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
    {
      id: 4,
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
    {
      id: 1,
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
    {
      id: 1,
      artists: ['The Patterns', 'Yard Art', 'Sticker'],
      venue: 'The Griffin',
      address: '511 East Fremont',
      cost: 0,
      dayof: 0,
      date: '2023-06-24',
      image: '/assets/images/events/062423.JPG',
      title: 'Black Sheep x PHC',
      tickets: null
    }
  ]
  useEffect(() => {  
    setShowContent(true);

    setEvents(upcomingEvents);
      filterPastEvents();
  }, []);


  
  return (
    <CSSTransition
    in={showContent}
    timeout={1000}
    classNames="fade"
    unmountOnExit
  >

    <div className={`animate__animated animate__fadeIn ${styles.content}`}>
      {/* <img
        src="/images/splash.jpg"
        alt="Splash"
        className={styles['splash-image']}
      /> */}
      <div className="text-center">
        <div>
        
        <section className="mb-7 my-4">
      {/* <h2 className="text-2xl font-bold mb-4 text-center">Upcoming Events</h2> */}
      {/* <div className="grid grid-cols-1 gap-4"> */}
      <div className="flex justify-center">
        {/* <Image src="/assets/images/events/062423.JPG" alt="patterns yard art sticker black sheep booking pigeon hat collective the griffin las vegas fremont rock and rock concert" width={650} height={850} /> */}
      
      <EventCarousel events={upcomingEvents} />
      </div>
    </section>


    </div>
    </div>
    <section className="mb-8">
  {/* <h2 className={`text-2xl block text-center text-white font-bold mb-5 py-2 ${monser.className}`} style={{background: 'rgba(255,140,255,0.5)'}}>News Feed</h2> */}
  <h2 className={`text-2xl block text-center text-white font-bold mb-7 py-2 ${monser.className}`} style={{background: 'linear-gradient(to right, rgba(255, 140, 255, 0.5), rgba(255, 140, 255, 0))'}}>News Feed</h2>

  <div className="grid grid-cols-1 mx-auto max-w-2xl rounded gap-4" style={{ height: '400px' }}>
    {/* Blog post cards */}
    <div className="relative bg-cover rounded bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/images/pigeon.jpg')" }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h3 className="text-mg rounded font-semibold mb-2 bg-white bg-opacity-75 p-2">coo coo kuh choo</h3>
        <p className="bg-white text-sm rounded bg-opacity-75 p-2">Author: chatgpt</p>
        <p className="bg-white rounded text-sm my-2 bg-opacity-75 p-2">Date: 30th May 2023</p>
        <p className="bg-white rounded my-4 mx-10 bg-opacity-75 p-2 text-center text-xs">📢 Welcome to the Pigeon Hat Collective! Happy Pride Month 🎉
Explore art, creativity, and imagination. Join our vibrant community, connect with fellow enthusiasts, and let the collective spirit of the Pigeon Hat guide you!  🐦🎩✨ Welcome to the Pigeon Hat Collective! 
<Link className="pl-1 text-base font-bold no-underline transition-colors duration-300 text-purple-800 hover:text-purple-700 hover:shadow-md" href="/about">Learn more</Link>...</p>






      </div>
    </div>

        {/* <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Blog Post 2</h3>
          <p>Author: Jane Smith</p>
          <p>Date: 10th June 2023</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Blog Post 3</h3>
          <p>Author: Alex Johnson</p>
          <p>Date: 15th June 2023</p>
        </div> */}
      </div>
    </section>

    <section className="mb-8 mx-auto text-center">
    <div className="flex text-center justify-center">
    <Link href="mailto:thepigeonhatcollective@gmail.com" className="text-5xl text-white hover:text-gray-300 ml-4">
          <FaEnvelope />
        </Link>
    <Link href="https://www.tiktok.com/@pigeonhatcollective" className="text-5xl text-white hover:text-gray-300 ml-4">
          <FaTiktok />
        </Link>
        <Link href="https://twitter.com/pigeonhatc" className="text-white text-5xl hover:text-gray-300 ml-4">
          <FaTwitter />
        </Link>
        <Link href="https://instagram.com/pigeonhatcollective" className="text-white text-5xl hover:text-gray-300 ml-4">
          <FaInstagram />
        </Link>
        <Link href="https://facebook.com/pigeonhatcollective" className="text-white text-5xl hover:text-gray-300 ml-4">
          <FaFacebook />
        </Link>
      </div>
</section>

<section>
  {/* <h2 className="text-center text-2xl font-bold mb-4">Featured Videos</h2> */}
  <h2 className={`text-2xl block text-center text-white font-bold mb-8 mt-1 py-2 ${monser.className}`} style={{background: 'linear-gradient(to right, rgba(255, 140, 255, 0.5), rgba(255, 140, 255, 0))'}}>Featured Videos</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Video cards */}
    <div className="bg-white p-4 rounded shadow text-center">
      <h3 className="text-lg font-semibold mb-2">Holiday Special</h3>
      <p>Date: Dec 24, 2022</p>
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/2RhQQHn_xV8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
    <div className="bg-white p-4 rounded text-center shadow">
      <h3 className="text-lg font-semibold mb-2">
        First Annual Photoshoot
      </h3>
      <p>Date: 13th June 2022</p>
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Fj5bnx7TF_8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>

    <div className="bg-white p-4 rounded text-center shadow">
      <h3 className="text-lg font-semibold mb-2">
        LIA Designs x Sunday Clothes
      </h3>
      <p>Date: 29th May 2018</p>
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/KOf5Re6_pHk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
    <div className="text-center mt-3 mb-5">
    <Link href="https://www.youtube.com/@thepigeonhatcollective5379" target="_blank">More...</Link>
    </div>
    </div>
  </section>

<style jsx>{`
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio (height / width) */
  overflow: hidden;
}


.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

`}</style>

</div>
</CSSTransition>
  )}

export default HomePage;
