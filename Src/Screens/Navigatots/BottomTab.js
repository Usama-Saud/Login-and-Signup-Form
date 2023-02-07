import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Reset from '../ResetPass/Reset';
import Forget from '../ForgetPassword/Forget';

import Icon from 'react-native-vector-icons/AntDesign';
import Login from '../Login/Login';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{tabBarHideOnKeyboard: true}}>
      {/* <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={Signup} /> */}
      <Tab.Screen
        name="Forget"
        component={Login}
        options={{
          tabBarIcon: () => <Icon name="user" size={25} color={'#000'} />,
          tabBarActiveTintColor: '#086898',
          tabBarInactiveTintColor: '#c34434',
          tabBarActiveBackgroundColor: '#45c387',
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon name="lock" size={25} color={'#000'} />,
          tabBarActiveTintColor: '#086898',
          tabBarInactiveTintColor: '#c34434',
          tabBarActiveBackgroundColor: '#45c387',
        }}
        name="Reset"
        component={Reset}
      />
    </Tab.Navigator>
  );
}
