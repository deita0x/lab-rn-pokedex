import {useContext} from 'react';
import {PokedexContext} from '../context';

export default function usePokedex() {
  const pokedexContext = useContext(PokedexContext);

  return {
    ...pokedexContext,
  };
}
