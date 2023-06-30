'use client';

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form'

const CreateEvent = () => {
  const [submitting, setSubmitting] = useState(false);
  const [event, setEvent] = useState({

  })
  return (
    // <Form  />
    <></>
  )
}

export default CreateEvent