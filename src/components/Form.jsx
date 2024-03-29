import React, { useEffect, useState } from 'react'
import { Modal, SafeAreaView, Text, StyleSheet, TextInput, View, ScrollView, Pressable, Alert } from 'react-native'
import DatePicker from '@react-native-community/datetimepicker'

const Form = ({ showModal, setShowModal, setPatients, patients, patient, setPatient }) => {
    const [id, setId] = useState('')
    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [date, setDate] = useState(new Date())


    useEffect(() => {

        if (Object.keys(patient).length > 0) {
            setId(patient.id)
            setPaciente(patient.paciente)
            setPropietario(patient.propietario)
            setEmail(patient.email)
            setTelefono(patient.telefono)
            setSintomas(patient.sintomas)
            setDate(patient.date)
        }

    }, [patient])

    const handleChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    }

    const handleNewDate = () => {
        if ([paciente, propietario, date, email, sintomas].includes('')) {
            Alert.alert(
                'hay errores',
                'Todos los campos son obligatorios',
                [{ text: 'OK' }])
            return
        }

        const newPacient = {
            paciente,
            propietario,
            email,
            telefono,
            date,
            sintomas
        }

        if (id) {
            newPacient.id = id
            const updatedPatients = patients.map(patientState =>
                patientState.id === newPacient.id ? newPacient : patientState)

            setPatients(updatedPatients)
            setPatient({})

        } else {
            newPacient.id = Date.now()
            setPatients([...patients, newPacient])
        }


        setShowModal(false)
        setId('')
        setPaciente('')
        setPropietario('')
        setEmail('')
        setTelefono('')
        setSintomas('')
        setDate(new Date())
    }
    return (
        <Modal
            animationType='slide'
            visible={showModal}
        >
            <SafeAreaView style={styles.contenido}>
                <ScrollView>
                    <Text style={styles.titulo}>{patient.id ? 'Editar' : 'Nueva'} {''}
                        <Text style={styles.tituloBold}>Cita</Text>
                    </Text>

                    <Pressable style={styles.btnCancel} onPress={() => {
                        setShowModal(false)
                        setPatient({})
                        setId('')
                        setPaciente('')
                        setPropietario('')
                        setEmail('')
                        setTelefono('')
                        setSintomas('')
                        setDate(new Date())
                    }}>
                        <Text style={styles.btnCancelText}>X Cancelar</Text>
                    </Pressable>

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
                        <View style={styles.picker}>
                            <DatePicker
                                value={date}
                                onChange={handleChange}
                                mode='datetime'
                                display='spinner'
                                textColor='black'
                                themeVariant="dark"
                                is24Hour={true}
                            />
                        </View>
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

                    <Pressable style={styles.btnSend} onPress={handleNewDate}>
                        <Text style={styles.btnSendText}>{patient.id ? 'Editar ' : 'Agregar '}Paciente</Text>
                    </Pressable>


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
    picker: {
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    btnCancel: {
        backgroundColor: '#5827a4',
        marginVertical: 30,
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white'
    },
    btnCancelText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase'
    },
    btnSend: {
        backgroundColor: '#f59e0b',
        marginVertical: 50,
        marginHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white'
    },
    btnSendText: {
        color: '#5827a4',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase'
    }

})

export default Form
