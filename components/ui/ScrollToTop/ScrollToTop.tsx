import { ArrowUpIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import React, { useLayoutEffect } from 'react';

export const ScrollToTop: React.FC = ({ children }) => {
  const router = useRouter();
  useLayoutEffect(() => window.scrollTo(0, 0), [router.pathname]);
  return React.isValidElement(children)
    ? React.cloneElement(children, { className: 'h-full flex flex-col' })
    : null;
};

export const ScrollToTopArrow = () => {
  const handleClick = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  return (
    <button
      className="fixed right-4 bottom-4 bg-black w-12 h-12 rounded-full flex items-center justify-center shadow-gray-600 shadow-sm"
      onClick={handleClick}
    >
      <ArrowUpIcon color="white" className="h-6" />
    </button>
  );
};
