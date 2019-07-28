/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment,Component} from 'react';
import {
  
  StyleSheet,
  
} from 'react-native';

import {createBottomTabNavigator,createStackNavigator,createAppContainer} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/LoginScreen'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Geolocation from '@react-native-community/geolocation';

Geolocation.getCurrentPosition(info => console.log(info));

const TabNavigator = createBottomTabNavigator({
  welcome: WelcomeScreen,
  login: LoginScreen,
  
},{
  defaultNavigationOptions: {
    tabBarVisible: false,
  },
    
    lazy:true
});
const AppContainer = createAppContainer(TabNavigator);
class App extends Component{
 
  render(){
        return (
         
              <AppContainer />
           
        );
        }
};

const styles = StyleSheet.create({
  
});

export default App;
