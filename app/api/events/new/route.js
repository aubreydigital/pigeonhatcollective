import Event from "@models/event";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
  const { userId, artists, visual, vendors, venue, address, cost, dayof, over21, date, image, title, tickets, tags } = await req.json();


    try {
        await connectToDB();
    const newEvent = new Event({ creator: userId, artists, visual, vendors, venue, address, cost, dayof, over21, date, image, title, tickets, tags })


        await newEvent.save();
        return new Response(JSON.stringify(newEvent), { status: 201 })
    } catch (error) {
        // return new Response("Failed to create a new Event", { status: 500 });
        console.log(error);
    }
}
