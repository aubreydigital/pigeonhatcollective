'use client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import 'animate.css';

const HomePage: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="text-center py-8">
      <CSSTransition
        in={showContent}
        timeout={1000}
        classNames="fade"
        unmountOnExit
      >
        <div>
      <section><h1 className="text-xs text-center p-1 pb-5 lg:text-xl font-sans">greetings earthlings</h1></section>
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Upcoming Events</h2>
      <div className="grid grid-cols-1 gap-4" style={{ height: '20em'}}>
        {/* Event cards */}
        <div className="bg-white p-4 rounded shadow h-full">
          <h3 className="text-lg font-semibold mb-2">Event 1</h3>
          <p>Date: 20th June 2023</p>
          <p>Location: City, Country</p>
        </div>
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

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Social Links</h2>
      <div className="flex space-x-4">
        {/* Social links */}
        <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
Twitter
</a>
<a href="#" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
Instagram
</a>
<a href="#" className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">
Facebook
</a>
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
