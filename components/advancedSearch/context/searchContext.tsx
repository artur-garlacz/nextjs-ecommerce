import { createContext, useReducer, useMemo } from 'react';
import { searchReducer } from './reducers/searchReducer';
import type { Action, State } from './types';

type Dispatch = (action: Action) => void;
type SearchProviderProps = { readonly children: React.ReactNode };

const initialState: State = {
  search: '',
  displayMethod: 'grid',
  sortMethod: 'asc',
  isOpenModal: false,
  filters: [],
};

export const SearchStateContext = createContext<{ state: State; dispatch: Dispatch }>({
  state: initialState,
  dispatch: () => {},
});

export const AdvancedSearchProvider = ({ children }: SearchProviderProps) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <SearchStateContext.Provider value={value}>{children}</SearchStateContext.Provider>;
};
