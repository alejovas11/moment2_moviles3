import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Dimensions, StyleSheet, Alert } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const deleteInfo = 'http://localhost:3000/deleteCita';
const updateInfo = 'http://localhost:3000/updateCita';
const deleteInfoPython = 'http://localhost:5000/deleteCita';
const updateInfoPython = 'http://localhost:5000/updateCita';

export const DetalleForm = (props) => {

    const [formData, setFormData] = useState({})

    const { route, navigation } = props;

    useEffect(() => {
        setFormData(route.params)
    }, [])
    
    const onChange = (e, type) => {
        setFormData({
          ...formData,
          [type]: e.nativeEvent.text,
        });
    };

    const deleteData = async(id) => {
        try {
            return await fetch(`${deleteInfo}/${id}`, {
                method: 'DELETE'
            })
            .then(response => response.json())  
            .then(() => navigation.goBack())
            .catch(e => console.log(e))
        } catch (error) {
            console.log(error);  
        }
    }

    const updateData = async(id, formData) => {
        try { 
            return await fetch(`${updateInfo}/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then((response) => response.json())
            .then(() => navigation.goBack())
            .catch(e => console.log(e))
        } catch (error) {
            console.log(error);
        }
    }

    const onDelete = () => {

        Alert.alert(
            'Warning',
            'Are you sure you want to delete it?',
            [
                {
                    text:'Delete',
                    onPress: () => deleteData(formData._id)
                },
                {
                    text:'Cancel',
                    onPress: () => console.log('Cancelled')
                }
            ],
            { cancelable: false }
        )
        
        
    }

    const onUpdate = () => {
        updateData(formData._id, formData)
    }

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Name'
                style={styles.formInput}
                value={ (!formData) ? 'Cargando' : formData.name }
                onChange={(e) => onChange(e, 'name')}
            />
            <TextInput 
                placeholder='Last Name'
                style={styles.formInput}
                value={ (!formData) ? 'Cargando' : formData.lastName }
                onChange={(e) => onChange(e, 'lastName')}
            />
            <TextInput 
                placeholder='Id'
                style={styles.formInput}
                value={ (!formData) ? 'Cargando' : formData.identification }
                onChange={(e) => onChange(e, 'identification')}
            />
            <TextInput 
                placeholder='Birthdate'
                style={styles.formInput}
                value={ (!formData) ? 'Cargando' : formData.birthDate }
                onChange={(e) => onChange(e, 'birthDate')}
            />
            <TextInput 
                placeholder='City'
                style={styles.formInput}
                value={ (!formData) ? 'Cargando' : formData.city }
                onChange={(e) => onChange(e, 'city')}
            />
            <TextInput 
                placeholder='Neighborhood'
                style={styles.formInput}
                value={ (!formData) ? 'Cargando' : formData.neighborhood }
                onChange={(e) => onChange(e, 'neighborhood')}
            />
            <TextInput 
                placeholder='Phone number'
                style={styles.formInput}
                value={ (!formData) ? 'Cargando' : formData.phone }
                onChange={(e) => onChange(e, 'phone')}
            />
            <View style={styles.buttonContainer}>
                <Button 
                    title='Update'
                    onPress={onUpdate}
                />
                <Button 
                    title='Delete'
                    onPress={onDelete}
                />
            </View>
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
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    }
})
