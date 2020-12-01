import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native'
import { DetalleForm } from '../Components/DetalleForm';

export const AppointmentDetails = ({ route, navigation }) => {

    return (
        <ImageBackground source={require('../../assets/2.jpg')} style={style.backgroundImage}>
            <View style={style.container}>
                <DetalleForm route={ route } navigation={ navigation }/>
            </View>
        </ImageBackground>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
})
