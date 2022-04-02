import type Prisma from '@prisma/client';
import Link from 'next/link';
import React from 'react';
import ContentLoader from 'react-content-loader';
import { useCart } from '../../cart/hooks/useCart';

type ProductProps = {
  product: Readonly<Required<Prisma.Product>>;
  loading?: undefined;
};

type LoadingProductProps = {
  product?: undefined;
  loading?: true;
};

export const ProductCard = ({ loading, product }: ProductProps | LoadingProductProps) => {
  const { dispatch } = useCart();

  // const buyProduct = () => mutate(product);

  const addToCart = () => {
    if (!loading && product) {
      dispatch({ type: 'addProduct', payload: product });
      dispatch({ type: 'openMenu' });
    }
  };

  if (loading || !product) {
    return (
      <ContentLoader id={'loading-card'} speed={2} height={460} width={'100%'}>
        <rect x="0" y="0" rx="6" width="100%" height="320" />
        <rect x="0" y="330" rx="6" width="65%" height="20" />
        <rect x="71%" y="330" rx="6" width="30%" height="20" />
        <rect x="0" y="360" rx="6" width="100%" height="36" />
      </ContentLoader>
    );
  }

  const { id, image, name, price } = product;
  return (
    <article className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">
        <img
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          src={image}
          alt=""
        />
      </div>
      <div className="mt-3 flex justify-between">
        <h2 className="text-sm text-gray-700">
          <span aria-hidden="true" className="absolute inset-0" />
          {name}
        </h2>
        <p className="text-sm font-medium text-gray-900">{price / 100} zł</p>
      </div>
      <button
        onClick={addToCart}
        className="mt-3 group outline-none relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
      >
        Dodaj do koszyka
      </button>
      <button className="mt-3 group outline-none relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-gray-100 hover:bg-gray-300 focus:outline-none">
        <Link href={`/products/${id}`}>Szczegóły</Link>
      </button>
    </article>
  );
};
