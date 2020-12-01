import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ListAppointment } from '../Screens/ListAppointment';
import { AppointmentDetails } from '../Screens/AppointmentDetails';

const AppointmentNavigator = createStackNavigator();

export const AppointmentStack = () => {
    return (
        <AppointmentNavigator.Navigator>
            <AppointmentNavigator.Screen name="AppointmentList" component={ListAppointment} />
            <AppointmentNavigator.Screen name="Details" component={AppointmentDetails} />
        </AppointmentNavigator.Navigator>
    )
}
