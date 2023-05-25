'use client';
import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

const merchandise = [
  {
    id: 1,
    title: 'Shirt',
    price: '$19.99',
    image: '/images/tshirt.jpg',
    description: 'lorem ipsum dro espdf efghoss elfefp  sdflfdsdfl dfefo dflfefo dsafl'
  },
  {
    id: 2,
    title: 'Digital Download',
    price: '$9.99',
    image: '/images/dd.jpg',
    description: 'lorem ipsum dro espdf efghoss elfefp  sdflfdsdfl dfefo dflfefo dsafl'
  },
  {
    id: 3,
    title: 'Sticker Pack',
    price: '$5.99',
    image: '/images/stickers.jpg',
    description: 'lorem ipsum dro espdf efghoss elfefp  sdflfdsdfl dfefo dflfefo dsafl'
  },
  {
    id: 4,
    title: 'Pin',
    price: '$7.99',
    image: '/images/pin.jpg',
    description: 'lorem ipsum dro espdf efghoss elfefp  sdflfdsdfl dfefo dflfefo dsafl'
  },
  {
    id: 5,
    title: 'Hoodie',
    price: '$29.99',
    image: '/images/hoodie.jpg',
    description: 'lorem ipsum dro espdf efghoss elfefp  sdflfdsdfl dfefo dflfefo dsafl'
  },
  {
    id: 6,
    title: 'Hat',
    price: '$14.99',
    image: '/images/hat.jpg',
    description: 'lorem ipsum dro espdf efghoss elfefp  sdflfdsdfl dfefo dflfefo dsafl'
  },
];

const MerchItemPage: React.FC = (id) => {

  const merchItem = merchandise.find((item) => item.id === Number(id.params.id));

  if (!merchItem) {
    // Handle case when merchandise item is not found
    return <div>Merchandise item not found</div>;
  }

  const { title, price, image, description } = merchItem;

  return (
    <div className="mx-auto text-center">
      <h2>{title}</h2>
      <Image className="mx-auto rounded text-center" src={image} alt={title} width={300} height={300} />
      <p>Price: {price}</p>
      <p>{description}</p>
    </div>
  );
};

export default MerchItemPage;
