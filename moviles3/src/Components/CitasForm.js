import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, TextInput, Button, Alert } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const postInfo = 'http://localhost:3000/addCita'
const postInfoPython = 'http://localhost:5000/addCita'

export const CitasForm = (props) => {

    const { navigation } = props;

    const [formData, setFormData] = useState({})

    const onChange = (e, type) => {
        setFormData({
          ...formData,
          [type]: e.nativeEvent.text,
        });
    };

    const sendData = async(formData) => {
        try {    
            return await fetch(postInfo, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then((response) => response.json())
            .then(() => {
                navigation.navigate('Citas')
            })
            .catch((e) => {
                console.log(e);
            })
        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = () => {
        sendData(formData) 
            
    }

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Name'
                style={styles.formInput}
                onChange={(e) => onChange(e, 'name')}
            />
            <TextInput 
                placeholder='Last Name'
                style={styles.formInput}
                onChange={(e) => onChange(e, 'lastName')}
            />
            <TextInput 
                placeholder='Id'
                style={styles.formInput}
                onChange={(e) => onChange(e, 'identification')}
            />
            <TextInput 
                placeholder='Birthdate'
                style={styles.formInput}
                onChange={(e) => onChange(e, 'birthDate')}
            />
            <TextInput 
                placeholder='City'
                style={styles.formInput}
                onChange={(e) => onChange(e, 'city')}
            />
            <TextInput 
                placeholder='Neighborhood'
                style={styles.formInput}
                onChange={(e) => onChange(e, 'neighborhood')}
            />
            <TextInput 
                placeholder='Phone number'
                style={styles.formInput}
                onChange={(e) => onChange(e, 'phone')}
            />
            <Button 
                title='Create'
                onPress={onSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        shadowColor: "black",
        borderColor: 'lightgray',
        margin: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignContent: 'center',
    },
    formInput: {
        margin: 10,
        padding: 10,
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'lightgray'
    }
})
