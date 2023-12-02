import React, { useLayoutEffect } from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy_data';
import IconButtons from '../components/IconButtons';


const MealDetail = ({ route, navigation }) => {
  const { mealId, title } = route.params;
  const filteredMeal = MEALS.find((item) => item.id === mealId);
  const iconpress = () => {
    console.log("pressed")
    const mealIdToUpdate = 0; // Replace with the desired mealId
const isFavoriteValue = true; // Replace with the desired value

if (mealIdToUpdate >= 0 && mealIdToUpdate < MEALS.length) {
  // Update the isFavorite property of the specified meal in the MEALS array
  MEALS[mealIdToUpdate].setIsFavorite(isFavoriteValue);
} else {
  console.error(`Invalid mealId: ${mealIdToUpdate}`);
}
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconButtons onPress={iconpress} />,
    });
  }, [navigation, iconpress]);
  const renderIngredient = (ingredient) => (
    <Text key={ingredient} style={styles.listItem}>
      {ingredient}
    </Text>
  );

  const renderStep = (step) => (
    <Text key={step} style={styles.listItem}>
      {step}
    </Text>
  );

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailText}>Affordability: {item.affordability}</Text>
        <Text style={styles.detailText}>Complexity: {item.complexity}</Text>
        <Text style={styles.detailText}>Duration: {item.duration} minutes</Text>

        <Text style={styles.sectionTitle}>Ingredients:</Text>
        {item.ingredients.map(renderIngredient)}

        <Text style={styles.sectionTitle}>Steps:</Text>
        {item.steps.map(renderStep)}

        <Text style={styles.detailText}>Gluten-Free: {item.isGlutenFree ? 'Yes' : 'No'}</Text>
        <Text style={styles.detailText}>Vegan: {item.isVegan ? 'Yes' : 'No'}</Text>
        <Text style={styles.detailText}>Vegetarian: {item.isVegetarian ? 'Yes' : 'No'}</Text>
        <Text style={styles.detailText}>Lactose-Free: {item.isLactoseFree ? 'Yes' : 'No'}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <FlatList
        data={[filteredMeal]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#555',
  },
  details: {
    width: '100%',
  },
  detailText: {
    marginBottom: 4,
    color: '#777',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
    color: '#ff7f50',
  },
  listItem: {
    marginVertical: 2,
    color: '#555',
  },
});

export default MealDetail;
