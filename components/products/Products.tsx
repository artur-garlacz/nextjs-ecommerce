import { Product } from './Product';
import { useInfiniteQuery } from 'react-query';
import { getProducts } from './api/getProducts';
import type Prisma from '@prisma/client';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const Products = () => {
  // const { data: products } = useGetProducts();
  const { ref, inView } = useInView();
  const [name, setName] = useState('w');
  const { isLoading, isError, data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['products', name],
      async ({ pageParam = '', ...rest }: any) => {
        console.log(rest, pageParam);
        await new Promise((res) => setTimeout(res, 1000));
        const data = await getProducts(`cursor=${pageParam}`);
        return data;
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextId ?? false,
      },
    );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
      setName('test');
    }
  }, [inView]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="bg-white w-full mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:px-8 mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {data &&
        data.pages.map((page) => (
          <React.Fragment key={page.nextId ?? 'lastPage'}>
            {page.items?.map((product) => (
              <Product key={product.id} {...(product as Required<Prisma.Product>)} />
            ))}
          </React.Fragment>
        ))}

      {isFetchingNextPage && <div className="loading">Loading...</div>}
      {data && !hasNextPage && <div>I've seen all the products.</div>}

      <span style={{ visibility: 'hidden' }} ref={ref}>
        intersection observer marker
      </span>
    </div>
  );
};
