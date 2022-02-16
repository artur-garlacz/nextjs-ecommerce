import { fetcher } from '@utils/fetcher';
import { setPaginationSchema } from '@utils/itemSchema';
import { productSchema } from '../utils/schemas';

export const getProducts = async (params?: string) => {
  return await fetcher(`/api/products?${params}`, {
    method: 'GET',
    schema: setPaginationSchema(productSchema),
  });
};

export const getProduct = async (productId: string) => {
  return await fetcher(`/api/products/${productId}`, {
    method: 'GET',
    schema: productSchema,
  });
};
