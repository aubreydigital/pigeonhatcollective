"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreateEvent = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({
    artists: [],
    venue: '',
    address: '',
    cost: 0,
    dayof: 0,
    date: '',
    image: '',
    title: '',
    over21: false,
    tickets: '',
    tags: [],
  })

  const createEvent = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/events/new", {
        method: "POST",
        body: JSON.stringify({
          artists: post.artists,
          venue: post.venue,
          address: post.address,
          cost: post.cost,
          dayof: post.dayof,
          date: post.date,
          image: post.image,
          title: post.title,
          tickets: post.tickets,
          over21: post.over21,
          userId: session?.user?.id,
          tags: post.tags
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createEvent}
    />
  );
};

export default CreateEvent;