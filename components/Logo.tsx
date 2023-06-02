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
      <Image src='/assets/images/pigeonhatclogo.png' width={742/20} height={816/20} alt="pigeon hat logo" />
      <h1 className="mt-3 ml-1">pigeon hat collective</h1>
    </div>
  );
};

export default Logo;
