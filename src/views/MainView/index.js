import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2

import FilmsView from '../FilmsView';
import MapView from '../MapView';
import LocationsView from '../LocationsView';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  console.log(routeName)
  if (routeName === 'Films') {
    iconName = 'ios-film';
  } else if (routeName === 'Map') {
    iconName = 'ios-map';
  } else if (routeName === 'Locations') {
    iconName = 'ios-pin';
  }


  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const TabNavigator = createBottomTabNavigator({
  Films: FilmsView,
  Map: MapView,
  Locations: LocationsView,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) =>
      getTabBarIcon(navigation, focused, tintColor),
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});

export default createAppContainer(TabNavigator);
