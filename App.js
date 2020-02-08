import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import MainScreen from './components/MainScreen'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainScreen></MainScreen>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
