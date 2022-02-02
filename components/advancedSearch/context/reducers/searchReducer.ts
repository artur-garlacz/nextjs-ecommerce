import type Prisma from '@prisma/client';
import type { Action, State } from '../types';

export const searchReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'updateSearchQuery': {
      return {
        ...state,
        searchQuery: action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};
