'use client';
import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
// import { useRouter } from 'next/router';
const merchandise = [
  {
    id: 1,
    title: 'Shirt',
    price: '$19.99',
    image: '/images/tshirt.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, similique? Labore cupiditate repellat eius itaque unde, provident nam reiciendis dolorem, modi consectetur iure doloribus magni blanditiis eligendi! Itaque, quidem distinctio!'
  },
  {
    id: 2,
    title: 'Digital Download',
    price: '$9.99',
    image: '/images/dd.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, similique? Labore cupiditate repellat eius itaque unde, provident nam reiciendis dolorem, modi consectetur iure doloribus magni blanditiis eligendi! Itaque, quidem distinctio!'
  },
  {
    id: 3,
    title: 'Sticker Pack',
    price: '$5.99',
    image: '/images/stickers.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, similique? Labore cupiditate repellat eius itaque unde, provident nam reiciendis dolorem, modi consectetur iure doloribus magni blanditiis eligendi! Itaque, quidem distinctio!'
  },
  {
    id: 4,
    title: 'Pin',
    price: '$7.99',
    image: '/images/pin.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, similique? Labore cupiditate repellat eius itaque unde, provident nam reiciendis dolorem, modi consectetur iure doloribus magni blanditiis eligendi! Itaque, quidem distinctio!'
  },
  {
    id: 5,
    title: 'Hoodie',
    price: '$29.99',
    image: '/images/hoodie.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, similique? Labore cupiditate repellat eius itaque unde, provident nam reiciendis dolorem, modi consectetur iure doloribus magni blanditiis eligendi! Itaque, quidem distinctio!'
  },
  {
    id: 6,
    title: 'Hat',
    price: '$14.99',
    image: '/images/hat.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, similique? Labore cupiditate repellat eius itaque unde, provident nam reiciendis dolorem, modi consectetur iure doloribus magni blanditiis eligendi! Itaque, quidem distinctio! ipsum dro espdf efghoss elfefp  sdflfdsdfl dfefo dflfefo dsafl'
  },
];

export default function MerchItemPage({ params }: { params: { merchId: number } }) {
  console.log(params)
  const merchItem = merchandise.find((item) => item.id === Number(params.merchId));

  if (!merchItem) {
    // Handle case when merchandise item is not found
    return <div>Merchandise item not found</div>;
  }
  
  const { title, price, image, description } = merchItem;

  const handleAddToCart = () => {
    // Add logic to add the item to the shopping cart
    console.log('Item added to cart:', merchItem);
  };

  return (
<div className="flex flex-col justify-center items-center h-screen bg-gray-800 bg-opacity-50">
      <div className="max-w-3xl my-10 bg-white rounded-lg overflow-hidden overflow-y-auto shadow-lg">
        <div className="flex pt-10">
          <div className="w-1/2">
            <div className="relative pl-2 flex justify-center items-center">
              <Image src={image} alt={title} width={300} height={300} />
            </div>
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-2">Price: {price}</p>
            <p className="text-gray-800 py-5 lg:px-10 text-xs lg:text-base leading-loose">{description}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Link className="text-white" href="/merch">Back</Link>

    </div>

  );
}

export async function generateStaticParams() {
  return merchandise.map((item) => ({
    params: {
      merchId: item.id.toString(),
    },
  }));
}
// export default MerchItemPage;
