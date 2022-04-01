import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import SimpsonDetail from '../screens/SimpsonDetail';

import AddNewCharacter from '../screens/AddNewCharacter';
const Stack = createNativeStackNavigator();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SimpsonDetail" component={SimpsonDetail} />
        <Stack.Screen name="AddNewCharacter" component={AddNewCharacter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
