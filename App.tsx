import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CircularScreen from './src/screens/CircularScreen';

const navigator = createStackNavigator({
  Circle: CircularScreen,
},
  {
    initialRouteName: 'Circle',
    defaultNavigationOptions: {
      title: "Circle Animation",
      headerShown: false,
    }
  }
);

const AppContainer = createAppContainer(navigator);

export default function App() {
  return (
    <AppContainer />
  );
}
