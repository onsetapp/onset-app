import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2

import FilmsScreen from '../FilmsScreen';
import MapScreen from '../MapScreen';
import LocationsScreen from '../LocationsScreen';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
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
  Films: FilmsScreen,
  Map: MapScreen,
  Locations: LocationsScreen,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) =>
      getTabBarIcon(navigation, focused, tintColor),
  }),
  tabBarOptions: {
    activeTintColor: '#c7aa3c',
    inactiveTintColor: 'gray',
  },
  initialRouteName: 'Films',
});

export default createAppContainer(TabNavigator);
