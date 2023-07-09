'use client';
import { useState, useEffect } from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaEnvelope } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { connectToDB } from '@utils/database';

const Profile = () => {
  const [user, setUser] = useState([])
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`/api/events`);
      const data = await res.json();
      setUser(data)
      console.log(data)
    }

    fetchUser();
  }, [])
  return (
    <div className="pt-10">
      <h1 className="text-white text-center">{session?.user?.name}</h1></div>
  )
}

export default Profile