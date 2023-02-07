import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTab from './BottomTab';
import DrawerTab from './DrawerTab';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Reset from '../ResetPass/Reset';
import Forget from '../ForgetPassword/Forget';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Reset"
          component={Reset}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />

        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen
          options={{headerShown: false, headerTintColor: '#498208'}}
          name="DrawerTab"
          component={DrawerTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
