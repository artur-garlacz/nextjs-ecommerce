import { Product } from './Product';
import { useInfiniteQuery } from 'react-query';
import { getProducts } from './api/getProducts';
import type Prisma from '@prisma/client';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const Products = () => {
  // const { data: products } = useGetProducts();
  const { ref, inView } = useInView();

  const { isLoading, isError, data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      'products',
      async ({ pageParam = '' }) => {
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
    }
  }, [inView]);

  return (
    <div className="bg-white max-w-2xl mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8 mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {data &&
        data.pages.map((page) => (
          <React.Fragment key={page.nextId ?? 'lastPage'}>
            {page.items?.map((product) => (
              <Product key={product.id} {...(product as Required<Prisma.Product>)} />
            ))}

            {!page.nextId && <h2>You have seen all products.</h2>}
          </React.Fragment>
        ))}

      {isFetchingNextPage ? <div className="loading">Loading...</div> : null}

      <span style={{ visibility: 'hidden' }} ref={ref}>
        intersection observer marker
      </span>
    </div>
  );
};
