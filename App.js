import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/Home';
import RacesScreen from './screens/Races';
import SeasonDataScreen from './screens/SeasonData';
import RaceDataScreen from './screens/RaceData';
import DriversScreen from './screens/Drivers';
import ConstructorsScreen from './screens/Constructors';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    SeasonData: {
      screen: SeasonDataScreen,
    },
    Races: {
      screen: RacesScreen,
    },
    RaceData: {
      screen: RaceDataScreen,
    },
    Drivers: {
      screen: DriversScreen,
    },
    Constructors: {
       screen: ConstructorsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
    }
  }
);

export default createAppContainer(AppNavigator);