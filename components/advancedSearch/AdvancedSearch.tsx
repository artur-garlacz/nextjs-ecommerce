import Button from '@components/ui/Button';
import { SearchIcon } from '@heroicons/react/outline';
import React, { ReactElement } from 'react';
import { AdvancedSearchProvider } from './context/searchContext';
import { FilterDialog } from './FilterDialog';
import SearchField from './SearchField';

type Props = {
  children: ReactElement | ReactElement[];
};

export const AdvancedSearch = ({ children }: Props) => {
  return (
    <AdvancedSearchProvider>
      <div className="w-full mt-4">
        <SearchField />
      </div>
      <FilterDialog />

      <>
        <div></div>
        {children}
      </>
    </AdvancedSearchProvider>
  );
};
