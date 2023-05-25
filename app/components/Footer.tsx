import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  // Example event data
  const latestEvent = {
    title: 'Latest Event',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae condimentum velit.',
    link: '/events/latest',
  };

  // Example blog post data
  const latestBlogPost = {
    title: 'Latest Blog Post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae condimentum velit. Nullam quis vestibulum velit.',
    link: '/blog/latest',
  };

  const contactInfo = {
    phone: '+1 123-456-7890',
    email: 'info@example.com',
  };

  return (
    <footer className="footer">
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center footer-content">
      <h1 className="pt-5 text-white sm:text-base lg:xl font-semibold">pigeon hat collective</h1>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {/* Latest Event */}
          <div>
            <h2 className="text-2xl font-bold">{latestEvent.title}</h2>
            <p className="text-gray-400">{latestEvent.description}</p>
            <Link href={latestEvent.link} legacyBehavior>
              <a className="text-blue-600 hover:text-blue-800">Read more</a>
            </Link>
          </div>

          {/* Latest Blog Post */}
          <div>
            <h2 className="text-2xl font-bold">{latestBlogPost.title}</h2>
            <p className="text-gray-400">{latestBlogPost.content.substring(0, 100)}</p>
            <Link href="/blog" legacyBehavior>
              <a className="text-blue-600 hover:text-blue-800">Read more</a>
            </Link>
          </div>

          {/* Contact Info and Social Links */}
          <div>
            <h2 className="text-2xl font-bold">Contact</h2>
            <p>
              <FaPhone className="inline-block mr-2" />
              {contactInfo.phone}
            </p>
            <p>
              <FaEnvelope className="inline-block mr-2" />
              <Link href={`mailto:${contactInfo.email}`}>{contactInfo.email}</Link>
            </p>
            <div className="mt-4">
              <Link href="#" className="text-blue-600 hover:text-blue-800 mx-2">
                <FaFacebook />
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-800 mx-2">
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pb-7">
          <p>&copy; {new Date().getFullYear()} Pigeon Hat Collective</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
