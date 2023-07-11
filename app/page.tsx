'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useEffect, useMemo, useState } from 'react';
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

const HomePage: FC = () => {
  const [showContent, setShowContent] = useState(false);
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
    setShowContent(true);

    const fetchEvents = async () => {
      const res = await fetch('api/events');
      const data = await res.json();
      setEvents(data)
      console.log(data)
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

  const upcomingEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate > currentDate;
  }).sort((a, b) => {
    const dateA: Date = new Date(a.date);
    const dateB: Date = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  })

  
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
        <h3 className="text-mg rounded font-semibold mb-2 bg-white bg-opacity-75 p-2">Summer is for Music</h3>
        <p className="hidden lg:block bg-white text-xs rounded bg-opacity-75 p-2 text-gray-700">Author: pigeonhatcollective</p>
        <p className="hidden lg:block bg-white rounded text-xs my-2 bg-opacity-75 p-2 text-gray-700">Date: 8th July 2023</p>
        <p className="bg-white rounded my-4 mx-10 bg-opacity-75 p-5 text-center text-xs">
        Get ready, feathered friends, because we&apos;ve got some exciting events happening soon! First off, mark your calendars for July 12th, as Desert Daze is back with a bang. Prepare for a sonic adventure amidst the sandy landscapes, featuring mind-blowing performances and psychedelic vibes.<br /><br />But wait there&apos;s more! On July 26th, we&apos;re flocking to Vegas Is For Songwriters. Songbird maestros from near and far will gather to showcase their lyrical prowess. It&apos;s a celebration of melodies, collaborations, and unforgettable harmonies.

<Link className="pl-1 text-sm font-bold no-underline transition-colors duration-300 text-purple-500 hover:text-purple-900" href="/events">Learn more...</Link></p>






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
    <div className="bg-white p-4 rounded text-center shadow">
      <h3 className="text-lg font-semibold mb-2">
        Switterbeet Live At Horse Trailer Hideout
      </h3>
      <p>Date: June 14, 2023</p>
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/MNmstm2Hzpk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
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
