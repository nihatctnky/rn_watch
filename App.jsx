import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/router/RootNavigation';


const App = () => {
  return (
    <NavigationContainer>
    <RootNavigation />
  </NavigationContainer>
);
  
}

export default App

const styles = StyleSheet.create({})