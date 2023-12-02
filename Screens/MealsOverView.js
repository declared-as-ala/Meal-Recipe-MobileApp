import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CATEGORIES, MEALS } from '../data/dummy_data';

export default function MealsOverView({ route, navigation }) {
  const { catid } = route.params;
  const filteredMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catid) >= 0);
  const categoryTitle = CATEGORIES.find((category) => category.id === catid)?.title;
  const mealId = filteredMeals[Math.floor(Math.random() * filteredMeals.length)]?.id;

  const handleMealPress = (meal) => () => {
    navigation.navigate('Detailmeal', { mealId: meal.id, title: meal.title });
  };

  useEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryTitle]);

  if (!filteredMeals || filteredMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No meals found for the selected category.</Text>
      </View>
    );
  }
  

  return (
    <ScrollView style={styles.container}>
      {filteredMeals.map((meal) => (
        <TouchableOpacity key={meal.id} onPress={handleMealPress(meal)}>
          <View style={styles.mealContainer}>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.title}>{meal.title}</Text>
              <Text>{meal.duration} minutes</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  mealContainer: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  details: {
    padding: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});
