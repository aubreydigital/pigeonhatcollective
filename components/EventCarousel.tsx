import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Link from 'next/link';

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

interface EventCarouselProps {
  events: Event[];
}

const EventCarousel = ({ events }: EventCarouselProps) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const centerSlidePercentage = windowWidth >= 700 ? 33.33 : 100;
  const fallbackImage = '/assets/images/aj_jerms_acoustic.JPG';

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

  const renderCarouselItems = () => {
    const numEvents = events.length;
    const numPlaceholders = Math.max(4 - numEvents, 0);

    const eventItems = events.map((event) => (
      <div key={event.id} className="event-carousel-item">
        <div className="image-container">
          <Image width={300} height={500} src={`https://aubrey.digital/vms_server/server/uploads/images/${event.image}`} alt={event.title} />
          <div className="flex row">
            {event.cost !== 0 && event.tickets !== null && (
              <Link href={event.tickets} target="_blank">
                <h1 className="legend">Buy Tickets</h1>
              </Link>
            )}
          </div>
        </div>
      </div>
    ));

    const placeholderItems = Array.from({ length: numPlaceholders }).map((_, index) => (
      <div key={`placeholder-${index}`} className="event-carousel-item">
        <div className="image-container">
          <Image width={300} height={500} src={fallbackImage} alt="Fallback Image" />
        </div>
      </div>
    ));

    return [...eventItems, ...placeholderItems];
  };

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
      {renderCarouselItems()}
    </Carousel>
  );
};

export default EventCarousel;
