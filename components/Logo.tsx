'use client';
import { useEffect } from 'react';
import { Press_Start_2P } from 'next/font/google';

const start = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400']
})

const Logo = () => {

  return (
    <div className={start.className}>
      <h1>pigeon hat collective</h1>
    </div>
  );
};

export default Logo;
