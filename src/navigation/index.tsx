import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, PokemonDetailScreen, AddPokemonScreen} from '../screens';
import {RootStackParamList} from './types';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PokemonDetail" component={PokemonDetailScreen} />
        <Stack.Screen name="AddPokemon" component={AddPokemonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
