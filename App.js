import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CategoriesScreen from './Screens/CategoriesScreen';
import MealsOverView from './Screens/MealsOverView';
import MealdDetail from './Screens/MealdDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Favorites from './Screens/Favorites';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeTabs"
            component={HomeTabs}
            options={{
              headerShown: false, // Hide the header for the tab navigator
            }}
          />

          <Stack.Screen
            name="Meals OverView"
            component={MealsOverView}
            options={({ route }) => ({ title: route.params.catid })}
          />

          <Stack.Screen
            name="Detailmeal"
            component={MealdDetail}
            options={({ route }) => ({ title: route.params.title })}
          />
        </Stack.Navigator>

        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
