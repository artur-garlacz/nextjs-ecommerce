import { useQuery } from 'react-query';
import { getProduct, getProducts } from '../api/getProducts';

export const useGetProducts = () => {
  return useQuery('products', getProducts);
};

export const useGetProduct = (productId: string) => {
  return useQuery(['products', productId], () => getProduct(productId));
};
