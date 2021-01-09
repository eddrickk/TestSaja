import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import { createAppContainer, createSwitchNavigator, SafeAreaView } from 'react-navigation'
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import HomeScreen from './src/screens/HomeScreen'
import SearchScreen from './src/screens/Home/SearchScreen'
import FreeCyclingScreen from './src/screens/Home/FreeCyclingScreen'
import SearchFriendScreen from './src/screens/Friends/SearchFriendScreen'

const navigator = createSwitchNavigator(
  {
    Home: HomeScreen,
    mainFlow: createMaterialBottomTabNavigator(
    {
      homeFlow: createSwitchNavigator(
        {
          Search: {
            screen: SearchScreen,
            navigationOptions: {
              title: 'Home',
              headerShown: false
            }
          },
          freeCyclingFlow: createSwitchNavigator({
            FreeCycling: {
              screen: FreeCyclingScreen,
              navigationOptions: {
                title: 'Home',
                headerShown: false
              }
            },
            FreeCyclingStart: {
              screen: FreeCyclingStartScreen,
              navigationOptions: {
                title: 'Home',
                headerShown: false
              }
            },
            freeCyclingStop: {
              screen: FreeCyclingStopScreen,
              navigationOptions: {
                title: 'Home',
                headerShown: false
              }
            },
          }),
          
          GibahFlow: createSwitchNavigator({
            GibahIn: {
              screen: GibahScreen,
              navigationOptions: {
                title: 'GibahIn',
                headerShown: false
              }
            },
            GibahStart: {
              screen: GibahStartScreen,
              navigationOptions: {
                title: 'GibahIn',
                headerShown: false
              }
            },
            GibahStop: {
              screen: GibahStopScreen,
              navigationOptions: {
                title: 'GibahIn',
                headerShown: false
              }
            },
          })
          
        },{
          initialRouteName: 'Search'
        }
        ),
      friendFlow: createStackNavigator(
        {
          SearchFriend: SearchFriendScreen,
	  CreateFriend: CreateFriendScreen
        }
      ),
    }),
  },
);

export default createAppContainer(navigator);
