const EventsPage: React.FC = () => {
  // Sample event data (replace with your actual event data)
  const events = [
    {
      id: 1,
      title: 'Concert 1',
      type: 'Concert',
      date: 'June 1, 2023',
      location: 'City, Country',
    },
    {
      id: 2,
      title: 'Donation Event 1',
      type: 'Donation Event',
      date: 'June 5, 2023',
      location: 'City, Country',
    },
    // Add more events as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white p-4 rounded shadow"
          >
            <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
            <p>Type: {event.type}</p>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;