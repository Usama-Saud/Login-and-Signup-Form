import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomTab from './BottomTab';

const Drawer = createDrawerNavigator();

export default function DrawerTab() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        // options={{headerShown: false}}
        name="BottomTabNav"
        component={BottomTab}
      />

      <Drawer.Screen
        name="more"
        component={() => {
          return (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30}}>More Data here</Text>
            </View>
          );
        }}
      />
    </Drawer.Navigator>
  );
}
