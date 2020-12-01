import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { ItemLista } from '../Components/ItemLista';

const getInfo = 'http://localhost:3000/getCitas';
const getInfoPython = 'http://localhost:5000/getCitas';

export const ListAppointment = ({navigation}) => {

    const [appointmentData, setAppointmentData] = useState(null)

    const getData = async() => {
        try {
            return await fetch(getInfo)
                .then(response => response.json())
                .then(data => setAppointmentData(data))
                .catch(e => console.log(e))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [appointmentData])

    return (
        <View>
            {
                (!appointmentData)
                    ? <Text>Cargando..</Text>
                    : <FlatList
                        data={appointmentData.citas}
                        renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('Details', item)}><ItemLista data={item}/></TouchableOpacity>}
                        keyExtractor={item => item._id}
                        
                        >
                    </FlatList>
                    
            }
            
        </View>
    )
}
