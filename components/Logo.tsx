'use client';
import { useEffect } from 'react';
import { Press_Start_2P } from 'next/font/google';
import Image from 'next/image'
const start = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400']
})

const Logo = () => {

  return (
    <div className={`${start.className} flex text-center justify-center`}>
      <Image src='/assets/images/pigeonlogo.png' width={30} height={30} style={{marginTop: '-4px'}} alt="pigeon hat logo" />
      <h1>pigeon hat collective</h1>
    </div>
  );
};

export default Logo;
