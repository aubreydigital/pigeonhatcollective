"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import head from 'next/head';
interface AboutPageProps {
  companyName: string;
  description: string;
}

const phc = {
  companyName: 'pigeon hat collective',
  desc1: "At the heart of the Pigeon Hat Collective's ethos lies a deep appreciation for artistic collaboration and experimentation. With members hailing from various musical backgrounds, ranging from jazz and rock to hip-hop and electronic, the collective brings together a melting pot of influences that shape their distinctive sound. The Pigeon Hat Collective's live performances are nothing short of captivating experiences. Whether they're taking over intimate venues or commanding large stages, their energy and stage presence are infectious, drawing audiences into their immersive musical world. From soul-stirring ballads to energetic and infectious anthems, their performances are marked by tight-knit musicianship and a genuine connection with their audience.",
  desc2: "In the studio, the Pigeon Hat Collective pushes boundaries, constantly seeking new sonic territories. They seamlessly blend elements from various genres, incorporating lush harmonies, intricate instrumentals, and thought-provoking lyrics. Their music reflects the vibrant spirit and ever-evolving landscape of Las Vegas, mirroring the city's glitz, glamour, and restless energy. Collaboration is a cornerstone of the Pigeon Hat Collective's creative process. They frequently collaborate with local artists and musicians, fostering a sense of community and celebrating the rich musical tapestry of Las Vegas. Their openness to collaboration not only fuels their growth as artists but also creates opportunities for others to shine. The Pigeon Hat Collective's music resonates with a wide audience, transcending boundaries and appealing to music lovers across genres. Their emotionally charged and introspective lyrics touch upon themes of love, self-discovery, and the human experience, striking a chord with listeners on a profound level. With their unwavering passion for pushing artistic boundaries, their commitment to collaboration, and their ability to captivate audiences both on and off the stage, the Pigeon Hat Collective continues to make a significant mark on the Las Vegas music scene and beyond. As they navigate the ever-changing landscape of the industry, their collective spirit and innovative approach ensure that their music remains fresh, relevant, and deeply engaging."
}

const AboutPage: React.FC<any> = ({ companyName, description }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
 
  useEffect(()=> {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    handleResize(); // Get initial window width
    window.addEventListener('resize', handleResize); // Update window width on resize
  
    return () => {
      window.removeEventListener('resize', handleResize); // Clean up listener on component unmount
    };
  }, [])

  const title = 'artists | pigeon hat collective'
  const descr = 'pigeon hat collective musical artists bands singers players businesses'

  return (
    <>
 <head>
<title>about | pigeon hat collective</title>
<meta name="description" content={descr} />

</head>
      <h1 className="text-4xl font-bold m-5 text-center">About</h1>
    <div className="flex mt-6 justify-center">
      <Image className="rounded-bl-lg rounded-tl-lg" placeholder="blur"
              blurDataURL='/assets/images/bonfire.jpg' src='/assets/images/bonfire.jpg' width={windowWidth > 600 ? 300 : 150} height={windowWidth > 600 ? 300 : 150} alt="bonfire pigeon hat collective"/>
      <Image className="rounded-br-lg rounded-tr-lg" placeholder="blur"
              blurDataURL='/assets/images/concert.jpg' src='/assets/images/concert.jpg' width={windowWidth > 600 ? 300 : 150} height={windowWidth > 600 ? 300 : 150} alt="house show pigeon hat collective" />
  </div>
    <div className="grid grid-cols-2">
    
    <div className="col-span-2 text-center py-8 leading-loose">
      <p className="text-lg mx-10 mb-7 text-gray-600">{phc.desc1}</p>
      <div className="flex justify-center">
     <Image className="rounded" placeholder="blur"
              blurDataURL='/assets/images/recording2.jpg' src='/assets/images/recording2.jpg' width={500} height={300} alt="pigeon hat collective"/>
</div>
<p className="text-lg mx-10 my-7 text-gray-600">{phc.desc2}</p>

    </div></div></>
  );
};

export default AboutPage;

 
