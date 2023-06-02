'use client';
import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import axios from 'axios';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      setEmailError('Invalid email format');
      return;
    }

    // Send email data to admin
    const emailData: EmailData = {
      name,
      email,
      message
    };

    // Send email data to server
    try {
      await axios.post('/api/send-email', {
        name,
        email,
        message,
      });
      console.log('Email sent successfully');
      // Handle success, such as displaying a success message to the user
    } catch (error) {
      console.error('Failed to send email', error);
      // Handle error, such as displaying an error message to the user
    }

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  return (
    <div className="container text-white mx-auto mt-10 py-10 text-center">
      <form className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div className="col-span-2">
          <h2 className="sm:text-base lg:text-xl font-semibold mb-2">Contact Form</h2>
          <div className="mb-4 text-black">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              className="border border-gray-300 px-4 py-2 rounded-md w-64"
            />
          </div>
          <div className="mb-4 text-black">
            <input
              type="email"
              placeholder="Email (required)"
              value={email}
              onChange={handleEmailChange}
              className="border border-gray-300 px-4 py-2 rounded-md w-64"
              required
            />
          </div>
          <div className="mb-4 text-black">
            <textarea
              placeholder="Message"
              value={message}
              onChange={handleMessageChange}
              className="border border-gray-300 px-4 py-2 rounded-md h-60 w-64"
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage