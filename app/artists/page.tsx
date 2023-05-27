import Link from "next/link";
import Image from "next/image";

export const metadata: object = {
  'title': 'pigeon hat collective | artists',
  'description': 'pigeon hat collective musical artists bands singers players businesses'
}

const ArtistPage: React.FC = () => {

  const artists = [
    {
      id: 1,
      title: 'Trash Animals',
      price: 'alt psychedelic folk rock',
      image: '/images/tshirt.jpg',
    },
    {
      id: 2,
      title: 'Kurian',
      price: 'hip hop',
      image: '/images/dd.jpg',
    },
    {
      id: 3,
      title: 'The String Riflemen',
      price: 'alternative rock',
      image: '/images/stickers.jpg',
    },
    {
      id: 4,
      title: 'Aubrey Digital',
      price: 'folk hop',
      image: '/images/pin.jpg',
    },
    {
      id: 5,
      title: 'Switterbeet',
      price: 'indie rock',
      image: '/images/hoodie.jpg',
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Artists</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {artists.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <Link href={'/merch/'+item.id}>
            <Image
              src={item.image}
              alt={item.title}
              height={48}
              width={48}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-500">{item.price}</p></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistPage;
