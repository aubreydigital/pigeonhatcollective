"use client";
import { useState } from 'react';
import Image from 'next/image';

interface AboutPageProps {
  companyName: string;
  description: string;
}

const phc = {
  companyName: 'pigeon hat collective',
  description: "At the heart of the Pigeon Hat Collective's ethos lies a deep appreciation for artistic collaboration and experimentation. With members hailing from various musical backgrounds, ranging from jazz and rock to hip-hop and electronic, the collective brings together a melting pot of influences that shape their distinctive sound. The Pigeon Hat Collective's live performances are nothing short of captivating experiences. Whether they're taking over intimate venues or commanding large stages, their energy and stage presence are infectious, drawing audiences into their immersive musical world. From soul-stirring ballads to energetic and infectious anthems, their performances are marked by tight-knit musicianship and a genuine connection with their audience. In the studio, the Pigeon Hat Collective pushes boundaries, constantly seeking new sonic territories. They seamlessly blend elements from various genres, incorporating lush harmonies, intricate instrumentals, and thought-provoking lyrics. Their music reflects the vibrant spirit and ever-evolving landscape of Las Vegas, mirroring the city's glitz, glamour, and restless energy. Collaboration is a cornerstone of the Pigeon Hat Collective's creative process. They frequently collaborate with local artists and musicians, fostering a sense of community and celebrating the rich musical tapestry of Las Vegas. Their openness to collaboration not only fuels their growth as artists but also creates opportunities for others to shine. The Pigeon Hat Collective's music resonates with a wide audience, transcending boundaries and appealing to music lovers across genres. Their emotionally charged and introspective lyrics touch upon themes of love, self-discovery, and the human experience, striking a chord with listeners on a profound level. With their unwavering passion for pushing artistic boundaries, their commitment to collaboration, and their ability to captivate audiences both on and off the stage, the Pigeon Hat Collective continues to make a significant mark on the Las Vegas music scene and beyond. As they navigate the ever-changing landscape of the industry, their collective spirit and innovative approach ensure that their music remains fresh, relevant, and deeply engaging."
}

const aboutImageUrl1 = process.env.PUBLIC_URL + '/images/bonfire.jpg';

const AboutPage: React.FC<any> = ({ companyName, description }) => {
  return (
    
    <div className="grid grid-cols-2">
     <Image src='/images/bonfire.jpg' width={300} height={300} alt="bonfire pigeon hat collective"/>
<Image src='/images/concert.jpg' width={300} height={300} alt="house show pigeon hat collective" />
    <div className="col-span-2 text-center py-8 leading-loose">
      <h1 className="text-4xl font-bold mb-4">About</h1>
      <p className="text-lg mx-5 text-gray-600">{phc.description}</p>
    </div></div>
  );
};

export default AboutPage;

 
