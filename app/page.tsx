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
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import YouTube from 'react-youtube';

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
      <div className="text-center py-8">
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
    </div>
    <section className="mb-8">
  <h2 className="text-2xl text-center font-bold mb-4">News Feed</h2>
  <div className="grid grid-cols-1 mx-auto max-w-2xl rounded gap-4" style={{ height: '400px' }}>
    {/* Blog post cards */}
    <div className="relative bg-cover rounded bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/images/pigeon.jpg')" }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h3 className="text-lg rounded font-semibold mb-2 bg-white bg-opacity-75 p-2">Success!</h3>
        <p className="bg-white rounded bg-opacity-75 p-2">Author: John Doe</p>
        <p className="bg-white rounded my-2 bg-opacity-75 p-2">Date: 28th May 2023</p>
        <p className="bg-white rounded my-4 mx-10 bg-opacity-75 p-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore autem labore repellat deserunt maiores possimus veritatis aspernatur debitis, incidunt excepturi praesentium. Suscipit iure beatae incidunt ex omnis ea inventore nam?</p>

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
    <Link href="https://www.tiktok.com/@pigeonhatcollective" className="text-5xl text-black hover:text-gray-300 ml-4">
          <FaTiktok />
        </Link>
        <Link href="https://twitter.com/pigeonhatc" className="text-black text-5xl hover:text-gray-300 ml-4">
          <FaTwitter />
        </Link>
        <Link href="https://instagram.com/pigeonhatcollective" className="text-black text-5xl hover:text-gray-300 ml-4">
          <FaInstagram />
        </Link>
        <Link href="https://facebook.com/pigeonhatcollective" className="text-black text-5xl hover:text-gray-300 ml-4">
          <FaFacebook />
        </Link>
      </div>
</section>

<section>
  <h2 className="text-center text-2xl font-bold mb-4">Featured Videos</h2>
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
    <div className="bg-white p-4 rounded hidden md:block lg:block text-center shadow">
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

    <div className="bg-white p-4 rounded hidden md:block lg:block text-center shadow">
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
