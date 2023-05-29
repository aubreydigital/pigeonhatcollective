import Link from "next/link";
import Image from 'next/image';

const artists = [
  {
    id: 1,
    title: 'Trash Animals',
    query: 'trash_animals',
    price: 'alt psychedelic folk rock',
    image: '/assets/images/artists/trashAnimals.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus ducimus, sequi sint nobis expedita minima dolorem cum quo soluta libero enim, impedit iusto aliquam tempora possimus. Sunt doloremque labore minus ducimus consectetur natus possimus assumenda, non commodi impedit amet repellendus provident excepturi cupiditate explicabo quibusdam veniam quam dolores, est repudiandae alias! Iure omnis repellat delectus voluptatum, pariatur quod quaerat fugit enim corporis, laudantium rerum odit facilis soluta, illo nemo accusamus magnam dolorum qui sunt?'
  },
  {
    id: 2,
    title: 'Kurian',
    query: 'kurian',
    price: 'hip hop',
    image: '/assets/images/artists/kurian.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus ducimus, sequi sint nobis expedita minima dolorem cum quo soluta libero enim, impedit iusto aliquam tempora possimus. Sunt doloremque labore minus ducimus consectetur natus possimus assumenda, non commodi impedit amet repellendus provident excepturi cupiditate explicabo quibusdam veniam quam dolores, est repudiandae alias! Iure omnis repellat delectus voluptatum, pariatur quod quaerat fugit enim corporis, laudantium rerum odit facilis soluta, illo nemo accusamus magnam dolorum qui sunt?'
  },
  {
    id: 3,
    title: 'The String Rifleband',
    query: 'the_string_rifleband',
    price: 'alternative rock',
    image: '/assets/images/artists/theStringRiflemen.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus ducimus, sequi sint nobis expedita minima dolorem cum quo soluta libero enim, impedit iusto aliquam tempora possimus. Sunt doloremque labore minus ducimus consectetur natus possimus assumenda, non commodi impedit amet repellendus provident excepturi cupiditate explicabo quibusdam veniam quam dolores, est repudiandae alias! Iure omnis repellat delectus voluptatum, pariatur quod quaerat fugit enim corporis, laudantium rerum odit facilis soluta, illo nemo accusamus magnam dolorum qui sunt?'
  },
  {
    id: 4,
    title: 'Aubrey Digital',
    price: 'folk hop',
    query: 'aubrey_digital',
    image: '/assets/images/artists/aubreyDigital.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus ducimus, sequi sint nobis expedita minima dolorem cum quo soluta libero enim, impedit iusto aliquam tempora possimus. Sunt doloremque labore minus ducimus consectetur natus possimus assumenda, non commodi impedit amet repellendus provident excepturi cupiditate explicabo quibusdam veniam quam dolores, est repudiandae alias! Iure omnis repellat delectus voluptatum, pariatur quod quaerat fugit enim corporis, laudantium rerum odit facilis soluta, illo nemo accusamus magnam dolorum qui sunt?'
  },
  {
    id: 5,
    title: 'Switterbeet',
    price: 'indie rock',
    query: 'switterbeet',
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

const { title, price, image, description } = artist

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
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-2">{price}</p>
            <p className="text-gray-800 py-5 lg:px-10 text-xs lg:text-base leading-loose">{description}</p>
          </div>
        </div>
      </div>
      <Link className="text-white mb-10" href="/merch">Back</Link>

    </div>
)
}