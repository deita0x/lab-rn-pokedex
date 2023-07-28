import React from 'react';
import {View, Text, FlatList, StyleSheet, ListRenderItem} from 'react-native';

type PokemonItem = {
  name: string;
  url: string;
};

const mockData: PokemonItem[] = [
  {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  },
  {
    name: 'ivysaur',
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
  },
  {
    name: 'venusaur',
    url: 'https://pokeapi.co/api/v2/pokemon/3/',
  },
];

export default function HomeScreen() {
  const renderItem: ListRenderItem<PokemonItem> = ({item}) => (
    <View>
      <Text>{item.name} </Text>
      <Text>{item.url} </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
