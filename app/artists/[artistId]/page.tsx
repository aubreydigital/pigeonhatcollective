const artists = [
  {
    id: 1,
    title: 'Trash Animals',
    query: 'trash_animals',
    price: 'alt psychedelic folk rock',
    image: '/assets/images/artists/trashAnimals.jpg',
  },
  {
    id: 2,
    title: 'Kurian',
    query: 'kurian',
    price: 'hip hop',
    image: '/assets/images/artists/kurian.jpg',
  },
  {
    id: 3,
    title: 'The String Rifleband',
    query: 'the_string_rifleband',
    price: 'alternative rock',
    image: '/assets/images/artists/theStringRiflemen.jpg',
  },
  {
    id: 4,
    title: 'Aubrey Digital',
    price: 'folk hop',
    query: 'aubrey_digital',
    image: '/assets/images/artists/aubreyDigital.jpg',
  },
  {
    id: 5,
    title: 'Switterbeet',
    price: 'indie rock',
    query: 'switterbeet',
    image: '/assets/images/artists/switterbeet.jpg',
  }
];

export const metadata: object = {
  'title': 'pigeon hat collective | artists',
  'description': 'pigeon hat collective musical artists bands singers players businesses'
}

export default function ArtistPage({ params }: { params: { artistId: string } }) {
console.log(params.artistId)
const artist = artists.find((artist) => artist.query === String(params.artistId));
console.log(artist)

  return (
    <h1>fuck off</h1>
)
}