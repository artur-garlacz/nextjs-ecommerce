import { dehydrate, QueryClient } from 'react-query';
import type { GetServerSideProps } from 'next';
import { Products } from '@components/products/Products';
import { Checkout } from '@components/cart/Checkout';
import { getSession } from 'next-auth/react';
import { Layout } from '@components/layout/Layout';
import { AdvancedSearch } from '@components/advancedSearch/AdvancedSearch';
import { ScrollToTopArrow } from '@components/ui/ScrollToTop';
import { TransitionButton } from '@components/ui/TransitionButton/TransitionButton';

export default function Home() {
  return (
    <Layout>
      <AdvancedSearch>
        <TransitionButton>
          <span>Buy</span>
          <span>Sell</span>
        </TransitionButton>
        <Products />
        <ScrollToTopArrow />
      </AdvancedSearch>
      <Checkout />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const session = await getSession(context);

  return {
    props: {
      session,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
