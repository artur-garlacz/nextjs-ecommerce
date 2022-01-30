import { useRouter } from 'next/router';
import { useGetProduct } from './hooks/useGetProducts';

export const ProductDetails = () => {
  const router = useRouter();
  const productId = typeof router.query?.id === 'string' ? router.query.id : '';

  const { data: product } = useGetProduct(productId);
  console.log(product);
  return <div>qwe</div>;
};
