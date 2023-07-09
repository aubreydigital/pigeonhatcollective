import  { connectToDB } from '@utils/database';
import Event from '@models/event';

export const POST = async (req) => {
  const { userId, artists, venue, address, cost, dayof, over21, date, image, title, tickets, tags } = await req.json();

  try {
    await connectToDB();
    const newEvent = new Event({ creator: userId, artists, venue, address, cost, dayof, over21, date, image, title, tickets, tags })
  
    await newEvent.save();

    return new Response(JSON.stringify(newEvent), { status: 201 })
  } catch(err) {
    return new Response("Failed to create a new event", { status: 500 })
  }
}

