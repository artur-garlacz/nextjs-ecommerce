import { ReactNode, createContext, useReducer, useContext, useMemo, useState } from 'react';
import { searchReducer } from './reducers/searchReducer';
import type { Action, State } from './types';

type Dispatch = (action: Action) => void;
type SearchProviderProps = { readonly children: React.ReactNode };

export const SearchStateContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined,
);

const initialState: State = {
  searchQuery: '',
  displayMethod: 'grid',
  sortMethod: 'asc',
  filters: [],
};

export const AdvancedSearchProvider = ({ children }: SearchProviderProps) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <SearchStateContext.Provider value={value}>{children}</SearchStateContext.Provider>;
};
