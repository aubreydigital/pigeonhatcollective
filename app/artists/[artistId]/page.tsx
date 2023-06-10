import Link from "next/link";
import Image from 'next/image';
import { FaEnvelope, FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const artists = [
  {
    id: 1,
    title: 'Trash Animals',
    query: 'trash_animals',
    price: 'alt psychedelic folk rock',
    image: '/assets/images/artists/trashAnimals.jpg',
    facebook: 'trashanimals',
    twitter: 'trashanimals',
    instagram: 'trashanimals',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus ducimus, sequi sint nobis expedita minima dolorem cum quo soluta libero enim, impedit iusto aliquam tempora possimus. Sunt doloremque labore minus ducimus consectetur natus possimus assumenda, non commodi impedit amet repellendus provident excepturi cupiditate explicabo quibusdam veniam quam dolores, est repudiandae alias! Iure omnis repellat delectus voluptatum, pariatur quod quaerat fugit enim corporis, laudantium rerum odit facilis soluta, illo nemo accusamus magnam dolorum qui sunt?'
  },
  {
    id: 2,
    title: 'Kurian',
    query: 'kurian',
    price: 'hip hop',
    facebook: 'kurian',
    twitter: 'kurian',
    tiktok: '@kurian',
    instagram: 'kurian',
    image: '/assets/images/artists/kurian.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus ducimus, sequi sint nobis expedita minima dolorem cum quo soluta libero enim, impedit iusto aliquam tempora possimus. Sunt doloremque labore minus ducimus consectetur natus possimus assumenda, non commodi impedit amet repellendus provident excepturi cupiditate explicabo quibusdam veniam quam dolores, est repudiandae alias! Iure omnis repellat delectus voluptatum, pariatur quod quaerat fugit enim corporis, laudantium rerum odit facilis soluta, illo nemo accusamus magnam dolorum qui sunt?'
  },
  {
    id: 3,
    title: 'The String Rifleband',
    query: 'the_string_rifleband',
    price: 'alternative rock',
    facebook: 'stringrifleband',
    twitter: 'stringrifleband',
    tiktok: '@stringrifleband',
    instagram: 'stringrifleband',
    image: '/assets/images/artists/theStringRiflemen.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus ducimus, sequi sint nobis expedita minima dolorem cum quo soluta libero enim, impedit iusto aliquam tempora possimus. Sunt doloremque labore minus ducimus consectetur natus possimus assumenda, non commodi impedit amet repellendus provident excepturi cupiditate explicabo quibusdam veniam quam dolores, est repudiandae alias! Iure omnis repellat delectus voluptatum, pariatur quod quaerat fugit enim corporis, laudantium rerum odit facilis soluta, illo nemo accusamus magnam dolorum qui sunt?'
  },
  {
    id: 4,
    title: 'Aubrey Digital',
    price: 'folk hop',
    query: 'aubrey_digital',
    facebook: 'aubreydigital',
    twitter: 'aubreydigital',
    tiktok: '@aubreydigital',
    instagram: 'aubreydigital',
    image: '/assets/images/artists/aubreyDigital.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus ducimus, sequi sint nobis expedita minima dolorem cum quo soluta libero enim, impedit iusto aliquam tempora possimus. Sunt doloremque labore minus ducimus consectetur natus possimus assumenda, non commodi impedit amet repellendus provident excepturi cupiditate explicabo quibusdam veniam quam dolores, est repudiandae alias! Iure omnis repellat delectus voluptatum, pariatur quod quaerat fugit enim corporis, laudantium rerum odit facilis soluta, illo nemo accusamus magnam dolorum qui sunt?'
  },
  {
    id: 5,
    title: 'Switterbeet',
    price: 'indie rock',
    query: 'switterbeet',
    email: 'switterbeet@gmail.com',
    facebook: 'switterbeet',
    twitter: 'switterbeet',
    tiktok: '@switterbeet',
    instagram: 'switterbeet',
    image: '/assets/images/artists/switterbeet.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus ducimus, sequi sint nobis expedita minima dolorem cum quo soluta libero enim, impedit iusto aliquam tempora possimus. Sunt doloremque labore minus ducimus consectetur natus possimus assumenda, non commodi impedit amet repellendus provident excepturi cupiditate explicabo quibusdam veniam quam dolores, est repudiandae alias! Iure omnis repellat delectus voluptatum, pariatur quod quaerat fugit enim corporis, laudantium rerum odit facilis soluta, illo nemo accusamus magnam dolorum qui sunt?'
  }
];

export const metadata: object = {
  'title': 'pigeon hat collective | artists',
  'description': 'pigeon hat collective musical artists bands singers players businesses'
}

export default function ArtistPage({ params }: { params: { artistId: string } }) {
const artist = artists.find((artist) => artist.query === String(params.artistId));
if (!artist) {
  // Handle case when artist item is not found
  return <div>Artist not found</div>;
}

const { title, price, image, description, email, facebook, tiktok, instagram, twitter } = artist

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-800 bg-opacity-50">
      <div className="max-w-3xl my-10 bg-white rounded-lg overflow-hidden overflow-y-auto shadow-lg">
        <div className="flex pt-10">
          <div className="w-1/2">
            <div className="relative pl-2 flex justify-center items-center">
              <Image src={image} placeholder="blur"
              blurDataURL={image} alt={title} width={300} height={300} />
            </div>
          </div>
          <div className="w-1/2 p-4">
          <div className="flex items-center pb-4">
      {email ? <Link href={`mailto:${email}`} target="_blank" className="hover:text-gray-300 ml-4">
          <FaEnvelope className="md:w-5 md:h-5" />
        </Link> : null}
     {tiktok ? <Link href={`https://tiktok.com/${tiktok}`} target="_blank" className="hover:text-gray-300 ml-4">
          <FaTiktok className="md:w-5 md:h-5" />
        </Link> : null}
        {twitter ? <Link href={`https://twitter.com/${twitter}`} target="_blank" className="hover:text-gray-300 ml-4">
          <FaTwitter className="md:w-6 md:h-6" />
        </Link> : null}
        {instagram ? <Link href={`https://www.instagram.com/${instagram}`} target="_blank" className="hover:text-gray-300 ml-4">
          <FaInstagram className="md:w-6 md:h-6" />
        </Link> : null}
        {facebook ? <Link href={`https://www.facebook.com/${facebook}`} target="_blank" className="hover:text-gray-300 ml-4">
          <FaFacebook className="md:w-6 md:h-6" />
        </Link> : null}
      </div>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-2">{price}</p>
            <p className="text-gray-800 py-5 lg:px-10 text-xs lg:text-base leading-loose">{description}</p>
          </div>
        </div>
      </div>
      <Link className="text-white mb-10" href="/artists">Back</Link>

    </div>
)
}