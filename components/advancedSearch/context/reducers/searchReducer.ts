import type { Action, State } from '../types';

export const searchReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'toggleModal': {
      return {
        ...state,
        isOpenModal: action.payload,
      };
    }
    case 'updateSearch': {
      return {
        ...state,
        search: action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};
