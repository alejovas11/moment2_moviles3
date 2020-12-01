import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Schedule } from '../Screens/Schedule';

const ScheduleNavigator = createStackNavigator();

export const ScheduleStack = () => {
    return (
        <ScheduleNavigator.Navigator>
            <ScheduleNavigator.Screen name="Schedule" component={Schedule} />
        </ScheduleNavigator.Navigator>
    )
}
