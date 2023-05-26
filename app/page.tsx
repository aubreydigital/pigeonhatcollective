'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import 'animate.css';
import styles from './HomePage.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CarouselProps } from 'react-responsive-carousel';
import EventCard from './components/EventCard';

const HomePage: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setShowContent(true);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Get initial window width
    window.addEventListener('resize', handleResize); // Update window width on resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up listener on component unmount
    };
  }, []);

  const centerSlidePercentage = windowWidth >= 700 ? 33.33 : 100;

  
  return (
    <div className={`animate__animated animate__fadeIn ${styles.content}`}>
      {/* <img
        src="/images/splash.jpg"
        alt="Splash"
        className={styles['splash-image']}
      /> */}
      <div className="text-center py-8">
      <CSSTransition
        in={showContent}
        timeout={1000}
        classNames="fade"
        unmountOnExit
      >
        <div>
        
        <section className="mb-8 my-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Upcoming Events</h2>
      <div className="grid grid-cols-1 gap-4">
        {/* Event carousel */}
        <Carousel
  showArrows={true}
  showThumbs={false}
  showStatus={false}
  infiniteLoop={true}
  centerMode={true}
  centerSlidePercentage={centerSlidePercentage}
  autoPlay={true} // Enable auto-play
  interval={2500} // Set interval duration (in milliseconds)
>
  {/* Event cards */}
  {[
    // <div className={styles['event-card']} key={1}>
    //   <img
    //     src="/images/events/060123.jpg"
    //     alt="Event Image"
    //     className={`absolute inset-0 w-full h-full ${styles['event-image']}`}
    //   />
    //   <div className="bg-white p-4 rounded shadow h-full">
    //     <h3 className="text-lg font-semibold mb-2">Event 1</h3>
    //     <p>Date: 20th June 2023</p>
    //     <p>Location: City, Country</p>
    //   </div>

    // // </div>
    <EventCard key='1' windowWidth={windowWidth} />,
    <EventCard key='2' windowWidth={windowWidth} />,
    <EventCard key='3' windowWidth={windowWidth} />,
    <EventCard key='4' windowWidth={windowWidth} />,
    <EventCard key='5' windowWidth={windowWidth} />,
    <EventCard key='6' windowWidth={windowWidth} />,
    <EventCard key='7' windowWidth={windowWidth} />,
    <EventCard key='8' windowWidth={windowWidth} />,
    <EventCard key='9' windowWidth={windowWidth} />,

    // Add more event cards here
  ]}
</Carousel>
      </div>
    </section>


    </div>
      </CSSTransition>
    </div>
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
      <div className="grid grid-cols-3 gap-4">
        {/* Blog post cards */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Blog Post 1</h3>
          <p>Author: John Doe</p>
          <p>Date: 5th June 2023</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Blog Post 2</h3>
          <p>Author: Jane Smith</p>
          <p>Date: 10th June 2023</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Blog Post 3</h3>
          <p>Author: Alex Johnson</p>
          <p>Date: 15th June 2023</p>
        </div>
      </div>
    </section>

    <section className="mb-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Social Links</h2>
      <div className="text-center space-x-4">
        {/* Social links */}
        <Link href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
Twitter
</Link>
<Link href="#" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
Instagram
</Link>
<Link href="#" className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">
Facebook
</Link>
</div>
</section>

<section>
    <h2 className="text-2xl font-bold mb-4">Featured Videos</h2>
    <div className="grid grid-cols-3 gap-4">
      {/* Video cards */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Video 1</h3>
        <p>Posted by: John Doe</p>
        <p>Date: 1st June 2023</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Video 2</h3>
        <p>Posted by: Jane Smith</p>
        <p>Date: 6th June 2023</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Video 3</h3>
        <p>Posted by: Alex Johnson</p>
        <p>Date: 11th June 2023</p>
      </div>
    </div>
  </section>
</div>
  )}

export default HomePage;
