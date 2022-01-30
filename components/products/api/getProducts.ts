import { fetcher } from '@utils/fetcher';
import { productSchema, productsSchema } from '../utils/schemas';

export const getProducts = async () => {
  return await fetcher('/api/products', {
    method: 'GET',
    schema: productsSchema,
  });
};

export const getProduct = async (productId: string) => {
  return await fetcher(`/api/products/${productId}`, {
    method: 'GET',
    schema: productSchema,
  });
};
