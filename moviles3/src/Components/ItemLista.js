import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const ItemLista = ({data}) => {

    const { name, lastName, phone, birthDate, city, identification } = data

    return (
            <View style={style.container}>
                <View style={style.insideContainer}>
                    <View style={style.infoStyle}>
                        <Text style={style.titleStyle}>Full name</Text>
                        <Text>{name} {lastName}</Text>
                        <Text style={style.titleStyle}>ID</Text>
                        <Text>{identification}</Text>
                        <Text style={style.titleStyle}>Birth date</Text>
                        <Text>{birthDate}</Text>
                        <Text style={style.titleStyle}>Phone</Text>
                        <Text>{phone}</Text>
                        <Text style={style.titleStyle}>City</Text>
                        <Text>{city}</Text>
                    </View>
                </View>
            </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignContent: 'center',
        borderWidth: 1,
        borderColor: 'lightgray'
    }, 
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 15
    },
    insideContainer: {
        flexDirection: 'row'
    },
    infoStyle: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
