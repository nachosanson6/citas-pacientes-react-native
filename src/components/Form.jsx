import React from 'react'
import { Modal, SafeAreaView, Text, StyleSheet, TextInput, View, ScrollView } from 'react-native'

const Form = ({ showModal, setShowModal }) => {
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
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Nombre Propietario</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre Propietario'
                            placeholderTextColor={'#666'}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            placeholderTextColor={'#666'}
                            keyboardType='email-address'
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Teléfono</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Teléfono'
                            placeholderTextColor={'#666'}
                            keyboardType='number-pad'
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Síntomas</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Síntomas'
                            placeholderTextColor={'#666'}
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
    }
})

export default Form
