import React, { useState } from 'react'
import { Modal, SafeAreaView, Text, StyleSheet, TextInput, View, ScrollView } from 'react-native'
import DatePicker from '@react-native-community/datetimepicker'

const Form = ({ showModal, setShowModal }) => {
    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [date, setDate] = useState(new Date())

    return (
        <Modal
            animationType='slide'
            visible={showModal}
        >
            <SafeAreaView style={styles.contenido}>
                <ScrollView>
                    <Text style={styles.titulo}>Nueva {''}
                        <Text style={styles.tituloBold}>Cita</Text>
                    </Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Nombre Paciente</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre Paciente'
                            placeholderTextColor={'#666'}
                            value={paciente}
                            onChangeText={setPaciente}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Nombre Propietario</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre Propietario'
                            placeholderTextColor={'#666'}
                            value={propietario}
                            onChangeText={setPropietario}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            placeholderTextColor={'#666'}
                            keyboardType='email-address'
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Teléfono</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Teléfono'
                            placeholderTextColor={'#666'}
                            keyboardType='number-pad'
                            value={telefono}
                            onChangeText={setTelefono}
                            maxLength={9}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Fecha</Text>
                        <DatePicker
                            value={date}
                            onDateChange={setDate}
                            mode='datetime'
                            display='spinner'
                            textColor='white'
                            themeVariant="dark"
                            is24Hour={true}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Síntomas</Text>
                        <TextInput
                            style={[styles.input, styles.sintomasInput]}
                            placeholder='Síntomas'
                            placeholderTextColor={'#666'}
                            value={sintomas}
                            onChangeText={setSintomas}
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>


                </ScrollView>
            </SafeAreaView>
        </Modal >
    )
}

const styles = StyleSheet.create({
    contenido: {
        backgroundColor: '#6d28d9',
        flex: 1,
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#fff'
    },
    tituloBold: {
        fontWeight: '900'
    },
    inputContainer: {
        marginTop: 10,
        marginHorizontal: 30,
    },
    label: {
        color: '#fff',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
    },
    sintomasInput: {
        height: 100
    },

})

export default Form
