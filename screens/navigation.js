import React from 'react';
import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import homeScreen from './homeScreen';
import itemScreen from './itemScreen';

import welcomeScreen from './welcomeScreen';
import genderScreen from './genderScreen';
import orientationScreen from './orientationScreen';
import locationScreen from './locationScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcomeScreen">  
        <Stack.Screen name="welcomeScreen" component={welcomeScreen} />
        <Stack.Screen name="genderScreen" component={genderScreen} />
        <Stack.Screen name="orientationScreen" component={orientationScreen} />
        <Stack.Screen name="locationScreen" component={locationScreen} />
        
        <Stack.Screen name="homeScreen" component={homeScreen} />
        <Stack.Screen name="itemScreen" component={itemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  }
});
