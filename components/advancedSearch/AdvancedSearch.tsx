import React, { ReactElement } from 'react';
import { AdvancedSearchProvider } from './context/searchContext';
import SearchField from './SearchField';

type Props = {
  children: ReactElement;
};

export const AdvancedSearch = ({ children }: Props) => {
  return (
    <AdvancedSearchProvider>
      <div className="w-full mt-4">
        <SearchField />
      </div>
      <div>
        <div></div>
        {children}
      </div>
    </AdvancedSearchProvider>
  );
};
