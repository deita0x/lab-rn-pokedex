export interface State {
  pokemonList: [];
}

export interface ContextProps {
  pokemonList: [];
}

export type Action = {type: 'FETCH_REQUEST'};

export type ProviderProps = {
  children: React.ReactNode;
};
