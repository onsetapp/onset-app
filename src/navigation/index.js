import React from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2

import FilmsScreen from '../screens/FilmsScreen';
import MapScreen from '../screens/MapScreen';
import LocationsScreen from '../screens/LocationsScreen';

const getTabBarIcon = (navigation, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'FilmsTab') {
    iconName = 'ios-film';
  } else if (routeName === 'MapTab') {
    iconName = 'ios-map';
  } else if (routeName === 'LocationsTab') {
    iconName = 'ios-pin';
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

/////////////////////////////////////////////////////////////////////////////

const FilmsTab = createStackNavigator({
  Films: {
    path: '/films',
    screen: FilmsScreen
  }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
})

const LocationsTab = createStackNavigator({
  Locations: {
    path: '/locations',
    screen: LocationsScreen
  }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
})

const TabNavigator = createBottomTabNavigator({
  FilmsTab: FilmsTab,
  MapTab: MapScreen,
  LocationsTab: LocationsTab,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) =>
      getTabBarIcon(navigation, tintColor),
  }),
  tabBarOptions: {
    activeTintColor: '#c7aa3c',
    inactiveTintColor: 'gray',
  },
  initialRouteName: 'FilmsTab',
});

export default createAppContainer(TabNavigator);
