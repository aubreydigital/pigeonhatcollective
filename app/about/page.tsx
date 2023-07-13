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
  desc1: "The Pigeon Hat Collective is a diverse and eclectic foundation of artists that aims to provide mutual support to projects of all art forms, focusing first on its members and then the wider arts community. We aim to stimulate growth, creation, innovation, and collaboration within the community and provide outlets for artists to develop confidence in their skills and in their craft, as well as avenues to promote their art. We use our collective resources and efforts to do this through hosting a variety of events, including but not limited to: mixers, art jams, recording sessions, festivals, shows, and showcases.",
  desc2: "Membership is based on invitation by core members, alignment with the collective's values and general aesthetic, and interest and participation in PHC events and initiatives."
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
      <h1 className="text-4xl font-bold m-5 text-white text-center">About</h1>
    <div className="flex mt-6 justify-center">
      <Image className="rounded-bl-lg rounded-tl-lg" placeholder="blur"
              blurDataURL='/assets/images/bonfire.jpg' src='/assets/images/bonfire.jpg' width={windowWidth > 600 ? 300 : 150} height={windowWidth > 600 ? 300 : 150} alt="bonfire pigeon hat collective"/>
      <Image className="rounded-br-lg rounded-tr-lg" placeholder="blur"
              blurDataURL='/assets/images/concert.jpg' src='/assets/images/concert.jpg' width={windowWidth > 600 ? 300 : 150} height={windowWidth > 600 ? 300 : 150} alt="house show pigeon hat collective" />
  </div>
    <div className="grid grid-cols-2">
    
    <div className="col-span-2 text-center py-8 leading-loose">
      <p className="text-lg mx-10 mb-7 place-y-4 text-gray-100">{phc.desc1}</p>
      <div className="flex justify-center">
     <Image className="rounded" placeholder="blur"
              blurDataURL='/assets/images/recording2.jpg' src='/assets/images/recording2.jpg' width={500} height={300} alt="pigeon hat collective"/>
</div>
<p className="text-lg mx-10 my-7 text-gray-100 place-y-4">{phc.desc2}</p>

    </div></div></>
  );
};

export default AboutPage;

 
