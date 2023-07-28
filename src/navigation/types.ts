import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  PokemonDetail: undefined;
  AddPokemon: undefined;
};
export type NavigationProps = StackNavigationProp<RootStackParamList>;

export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;
export type ProfileProps = StackScreenProps<
  RootStackParamList,
  'PokemonDetail'
>;
export type MembersProps = StackScreenProps<RootStackParamList, 'AddPokemon'>;
