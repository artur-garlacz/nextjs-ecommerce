import type { ReactNode } from 'react';
import { Header } from './header/Header';

type LayoutProps = {
  readonly children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main className="h-full w-full bg-white py-16 px-4 flex flex-col items-center justify-center">
      {children}
    </main>
  </>
);
