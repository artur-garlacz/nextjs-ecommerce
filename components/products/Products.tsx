import { ProductCard } from './ProductCard/ProductCard';
import { useInfiniteQuery } from 'react-query';
import { getProducts } from './api/getProducts';
import type Prisma from '@prisma/client';
import React, { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useDebounce from 'hooks/useDebounce';
import { useAdvancedSearch } from '@components/advancedSearch/hooks/useAdvancedSearch';

export const Products = () => {
  const { ref, inView } = useInView();
  const {
    state: { search },
  } = useAdvancedSearch();
  const { isLoading, data, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['products', useDebounce(search)],
    async ({ pageParam = '', ...rest }: any) => {
      await new Promise((res) => setTimeout(res, 1000));
      const data = await getProducts(`cursor=${pageParam}&search=${search}`);
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
    <>
      <div className="bg-white w-full mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:px-8 mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data &&
          data.pages.map((page) => (
            <React.Fragment key={page.nextId ?? 'lastPage'}>
              {page.items?.map((product) => (
                <ProductCard key={product.id} product={product as Required<Prisma.Product>} />
              ))}
            </React.Fragment>
          ))}

        {(isLoading || isFetchingNextPage) && <ProductCard loading={true} />}

        <span style={{ visibility: 'hidden' }} ref={ref}>
          intersection observer marker
        </span>
      </div>
      {data && !hasNextPage && <div>I've seen all the products.</div>}
    </>
  );
};
