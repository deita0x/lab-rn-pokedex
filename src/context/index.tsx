import React, {createContext, useReducer} from 'react';
import {State, Action, ContextProps, ProviderProps} from './types';

const cartReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const PokedexContext = createContext<ContextProps>({
  pokemonList: [],
});

export function PokedexProvider({children}: ProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, {
    pokemonList: [],
  });

  return (
    <PokedexContext.Provider value={{...state}}>
      {children}
    </PokedexContext.Provider>
  );
}
