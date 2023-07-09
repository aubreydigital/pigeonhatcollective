import Link from "next/link";
import Image from "next/image";

export const metadata: object = {
  'title': 'artists | pigeon hat collective',
  'description': 'pigeon hat collective musical artists bands singers players businesses'
}

const ArtistPage: React.FC = () => {

  const artists = [
    {
      id: 1,
      title: 'Tierney',
      query: 'tierney',
      price: 'indie rock',
      image: '/assets/images/artists/switterbeet2.jpg',
    },
    {
      id: 2,
      title: 'Kurian',
      query: 'kurian',
      price: 'hip hop',
      image: '/assets/images/artists/kurian_artist.jpeg',
    },
    {
      id: 3,
      title: 'Dennis Fija',
      query: 'dennis_fija',
      image: '/assets/images/artists/dennisFija.jpeg',
    },
    {
      id: 4,
      title: 'Limn',
      query: 'limn',
      image: '/assets/images/artists/limn.jpg',

    },
    {
      id: 5,
      title: 'Sonia Barcelona',
      query: 'sonia_barcelona',
      image: '/assets/images/artists/soniaBarcelona.jpeg',
    },
    {
      id: 6,
      title: 'aubrey digital',
      price: 'folk hop',
      query: 'aubrey_digital',
      image: '/assets/images/artists/aubreyDigital2.jpg',
    },
    {
      id: 7,
      title: 'Chamberpunk/ Matthew Boyles',
      query: 'chamberpunk',
      image: '/assets/images/artists/chamberpunk.jpeg',

    },
    {
      id: 8,
      query: 'ronnie_wylder',
      title: 'Ronnie Wylder',
      image: '/assets/images/artists/ronnieWylder.jpg'
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl text-center text-white font-bold mb-4">Artists</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {artists && artists.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow mx-3">
            <Link href={'/artists/'+item.query}>
            {/* <Link href={'/'}> */}
            <Image
              src={item.image || ''}
              alt={item.title}
              height={600}
              width={400}
              className="w-full h-48 object-cover object-top mb-4"
              // placeholder="blur"
              // blurDataURL={item.image || ''}

            />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            {/* <p className="text-gray-500">{item.price}</p> */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistPage;
