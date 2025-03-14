// app/index.tsx
import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import GameScreen from './screens/GameScreen';  // Update naar ./screens/
import  HomeScreen  from './screens/HomeScreen';
import BadgesScreen  from './screens/BadgeScherm'

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
        <Stack.Screen name="BadgeScherm" component={BadgesScreen} />
      </Stack.Navigator>
  );
}