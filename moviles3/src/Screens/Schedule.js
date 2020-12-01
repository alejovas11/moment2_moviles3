import React from 'react';
import { StyleSheet, View, Dimensions, ImageBackground } from 'react-native';
import { CitasForm } from '../Components/CitasForm';

const windowWidth = Dimensions.get('window').width;

export const Schedule = ({navigation}) => {
    return (
        <ImageBackground source={require('../../assets/1.jpg')} style={style.backgroundImage}>
            <View style={style.container}>
                <CitasForm navigation={navigation}/>
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


