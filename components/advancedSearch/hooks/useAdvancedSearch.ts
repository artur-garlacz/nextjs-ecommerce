import { useMemo, useContext } from 'react';

import { SearchStateContext } from '../context/searchContext';

export const useAdvancedSearch = () => {
  const context = useContext(SearchStateContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return useMemo(() => context, [context]);
};
