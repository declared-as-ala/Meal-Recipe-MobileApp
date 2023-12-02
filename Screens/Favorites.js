import React from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MEALS } from '../data/dummy_data';

const Favorites = ({ navigation }) => {
  const favoriteMeals = MEALS.filter((item) => item.isFavorite);

  const renderMealItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.favoriteItem}
        onPress={() => navigation.navigate('Detailmeal', { mealId: item.id, title: item.title })}
      >
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.mealInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.detailText}>Duration: {item.duration} minutes</Text>
          <Text style={styles.detailText}>Complexity: {item.complexity}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {favoriteMeals.length > 0 ? (
        <FlatList
          data={favoriteMeals}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderMealItem}
        />
      ) : (
        <Text style={styles.header}>No favorite meals yet!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  favoriteItem: {
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  mealInfo: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  detailText: {
    marginBottom: 4,
    color: '#777',
  },
});

export default Favorites;
