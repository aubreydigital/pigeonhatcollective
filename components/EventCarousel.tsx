'use client';
import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import { CarouselProps } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import Link from 'next/link';

interface Event {
  id: number;
  artists: string[];
  venue: string;
  address: string;
  cost: number;
  dayof: number;
  image: string;
  title: string;
  tickets: string | null;
  date: string;
}

interface EventCarouselProps {
  events: Event[];
}

const EventCarousel = ({ events }: EventCarouselProps) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const centerSlidePercentage = windowWidth >= 700 ? 33.33 : 100;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Get initial window width
    window.addEventListener('resize', handleResize); // Update window width on resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up listener on component unmount
    };
  }, []);

  return (
    <Carousel 
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={centerSlidePercentage}
      autoPlay={true}
      interval={2500}
      className="event-carousel"
    >
      {events.map((event) => {
        return (
          <div key={event.id} className="event-carousel-item">
            <div className="image-container">
              <Image width={300} height={500} src={event.image} alt={event.title} />
            <div className="flex row">
            {event.cost != 0 && event.tickets != null && <Link href={event.tickets} target="_blank"><h1 className="legend">Buy Tickets</h1></Link>}
            </div>
            </div>

          </div>
        );
      })}
    </Carousel>
  );
};

export default EventCarousel;
