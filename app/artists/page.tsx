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
      image: '/assets/images/artists/kurianprofile2.JPG',
    },
    {
      id: 3,
      title: 'Dennis Fija',
      query: 'dennis_fija',
      image: '/assets/images/artists/dennisfijaprofile.jpeg',
    },
    {
      id: 4,
      title: 'Limn',
      query: 'limn',
      image: '/assets/images/artists/limnprofile.jpeg',

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
      image: '/assets/images/artists/aubreyprofile.jpeg',
    },
    {
      id: 7,
      title: 'Chamberpunk/ Matthew Boyles',
      query: 'chamberpunk',
      image: '/assets/images/artists/chamberpunkprofile.jpeg',

    },
    {
      id: 8,
      query: 'ronnie_wylder',
      title: 'Ronnie Wylder',
      image: '/assets/images/artists/ronnieWylder.jpg'
    },
    {
      id: 9,
      query: 'michaella',
      title: 'Michaella',
      image: '/assets/images/artists/michaellaprofile.JPG'
    },
    {
      id: 10,
      query: 'germs',
      title: 'Jeremy Luker aka Germs aka Opossum',
      image: '/assets/images/artists/germsprofile.JPG'
    },
    {
      id: 11,
      query: 'ryan_pasion',
      title: 'Ryan Pasion',
      image: '/assets/images/artists/pasionprofile.jpeg'
    },
    {
      id: 12,
      query: 'mariposa',
      title: 'MariposA',
      image: '/assets/images/artists/mariprofile.JPG'
    },
    // {
    //   id: 13,
    //   query: 'Javad',
    //   title: 'Javad',
    //   image: '/assets/images/artists/javadprofile.JPG'
    // },
    {
      id: 14,
      query: 'ivan',
      title: 'Ivan Gonzalez',
      image: '/assets/images/artists/ivanprofile.JPG'
    },
    {
      id: 15,
      query: 'nicho',
      title: 'Dennis/Nicho Escobar',
      image: '/assets/images/artists/nichoprofile.jpeg'
    },
    {
      id: 16,
      query: 'wyatt',
      title: 'AJ (Wyatt and the Ashes)',
      image: '/assets/images/artists/ajprofile.JPG'
    },
    {
      id: 17,
      query: 'mendoza',
      title: 'Chris Mendoza',
      image: '/assets/images/artists/mendozaprofile.JPG'
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
