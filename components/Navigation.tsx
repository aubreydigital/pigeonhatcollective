'use client';
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import Logo from './Logo'
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const inLoggedIn = true
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-center">
            <div className="flex-shrink-0 text-center">
              <Link href="/" className="text-white text-xs font-semibold">
                {/* <h1 className="text-white text-xs font-semibold pr-4 inter.className">pigeon hat collective</h1> */}
                <Logo />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
              <Link
                  href="/merch"
                  className="text-gray-300 hover:bg-transparent hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Merch
                </Link>
                <Link
                  href="/artists"
                  className="text-gray-300 hover:bg-transparent hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Artists
                </Link>
                <Link
                  href="/about"
                  className="text-gray-300 hover:bg-transparent hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  href="/events"
                  className="text-gray-300 hover:bg-transparent hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Events
                </Link>
                {/* <Link
                  href="/contact"
                  className="text-gray-300 hover:bg-transparent hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link> */}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                {/* <!-- Notification icon --> */}
              </button>
              <div className="ml-3 relative">
                <div>
                  <button className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    {/* <!-- User avatar --> */}
                  </button>
                </div>
                {/* <!-- Dropdown menu --> */}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/merch"
            className="text-gray-300 hover:bg-transparent hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Merch
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:bg-transparent hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            href="/events"
            className="text-gray-300 hover:bg-transparent hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Events
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:bg-transparent hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>

      </div>
      {/* Social links */}
      <div className="hidden md:flex items-center justify-end pr-4 pb-5">
      <Link href="https://tiktok.com/@pigeonhatcollective" target="_blank" className="text-white hover:text-gray-300 ml-4">
          <FaTiktok className="w-5 h-5" />
        </Link>
        <Link href="https://twitter.com/pigeonhatc" target="_blank" className="text-white hover:text-gray-300 ml-4">
          <FaTwitter className="w-6 h-6" />
        </Link>
        <Link href="https://instagram.com/pigeonhatcollective" target="_blank" className="text-white hover:text-gray-300 ml-4">
          <FaInstagram className="w-6 h-6" />
        </Link>
        <Link href="https://facebook.com/pigeonhatcollective" target="_blank" className="text-white hover:text-gray-300 ml-4">
          <FaFacebook className="w-6 h-6" />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;