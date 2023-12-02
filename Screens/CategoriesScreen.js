// CategoriesScreen.js
import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { CATEGORIES } from "../data/dummy_data";


const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={{ ...styles.categoryItem, backgroundColor: item.color }}
      onPress={() => {
        navigation.navigate("Meals OverView", { catid: item.id }); // Corrected parameter name
      }}
    >
      
      <View>
        <Text style={styles.categoryItemText}>{item.title}</Text>
   
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id.toString()}
     
    />
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    height: 150,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  categoryItemText: {
    fontSize: 20,
  },
});

export default CategoriesScreen;
