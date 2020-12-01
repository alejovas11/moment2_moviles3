import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { AppointmentStack } from './src/Stacks/AppointmentStack';
import { ScheduleStack } from './src/Stacks/ScheduleStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      >
        <Tab.Screen 
          name='Citas' 
          component={AppointmentStack} 
        />
        <Tab.Screen 
          name='Crear' 
          component={ScheduleStack} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


