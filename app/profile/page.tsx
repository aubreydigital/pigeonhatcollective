'use client';
import { useState, useEffect } from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaEnvelope } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { connectToDB } from '@utils/database';
import Image from 'next/image';

const Profile = () => {
  const [user, setUser] = useState([])
  const router = useRouter();
  const { data: session } = useSession();
console.log(session)
  return (
    <div className="pt-10 flex flex-col text-center items-center mx-auto w-full justify-center">
      <h1 className="text-white text-center mb-4">{session?.user?.name}</h1>
      {session && <Image width={250} height={250} src={`${session?.user?.image}`} alt={`${session?.user?.name}`}/>}
    </div>
  )
}

export default Profile