import Link from "next/link";
import Image from "next/image";

export const metadata: object = {
  'title': 'merch | pigeon hat collective',
  'description': 'pigeon hat collective '
}

const MerchPage: React.FC = () => {

  // Sample merchandise data (replace with your actual merchandise data)
  const merchandise = [
    {
      id: 1,
      title: 'Shirt',
      price: '$19.99',
      image: '/assets/images/tshirt.jpg',
      link: 'https://buy.stripe.com/test_fZeg1070V5V455maEF'
    },
    {
      id: 2,
      title: 'Digital Download',
      price: '$9.99',
      image: '/assets/images/dd.jpg',
      link: 'https://buy.stripe.com/test_7sI7uu84ZfvE41idQV'
    },
    {
      id: 3,
      title: 'Sticker Pack',
      price: '$5.99',
      image: '/assets/images/stickers.jpg',
      link: 'https://buy.stripe.com/test_28og101GB83ceFWcMM'
    },
    {
      id: 4,
      title: 'Pin',
      price: '$7.99',
      image: '/assets/images/pin.jpg',
      link: 'https://buy.stripe.com/test_aEUg10dpj83cfK04gk'
    },
    {
      id: 5,
      title: 'Hoodie',
      price: '$29.99',
      image: '/assets/images/hoodie.jpg',
      link: 'https://buy.stripe.com/test_aEU2aa2KF1EOcxObIL'
    },
    {
      id: 6,
      title: 'Hat',
      price: '$14.99',
      image: '/assets/images/hat.jpg',
      link: 'https://buy.stripe.com/test_14kaGG0CxerA55m002'
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4 text-white text-center">Merchandise</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-4 lg:grid-cols-4 gap-4">
        {merchandise.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <Link href={item.link ? item.link : '/merch/'+item.id} target={item.link ? '_blank' : '_self'}>
            <Image
              src={item.image}
              alt={item.title}
              height={48}
              width={48}
              className="w-full h-48 object-cover mb-4"
              placeholder="blur"
              blurDataURL={item.image}
            />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-500">{item.price}</p></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchPage;
