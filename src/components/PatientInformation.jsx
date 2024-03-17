import React from 'react'
import { Pressable, SafeAreaView, Text, View, StyleSheet } from 'react-native'
import { formatedDate } from '../helpers'

const PatientInformation = ({ patient, setShowPatientModal, setPatient }) => {


    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.titulo}>Informacion <Text style={styles.tituloBold}>Paciente</Text></Text>
            <View>
                <Pressable style={styles.btnCancel} onPress={() => {
                    setShowPatientModal(false)
                    setPatient({})
                }}>
                    <Text style={styles.btnCancelText}>X Cerrar</Text>
                </Pressable>
            </View>

            <View style={styles.content}>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.information}>{patient.paciente}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Propietario:</Text>
                    <Text style={styles.information}>{patient.propietario}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.information}>{patient.email}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Telefono:</Text>
                    <Text style={styles.information}>{patient.telefono}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Fecha alta:</Text>
                    <Text style={styles.information}>{formatedDate(patient.date)}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Síntomas:</Text>
                    <Text style={styles.information}>{patient.sintomas}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f59e0b',
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
    btnCancel: {
        backgroundColor: '#e06900',
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
    content: {
        backgroundColor: '#fff',
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    campo: {
        marginBottom: 10,
    },
    label: {
        textTransform: 'uppercase',
        color: '#374151',
        fontWeight: '600',
        fontSize: 12
    },
    information: {
        fontWeight: '700',
        fontSize: 20,
        color: '#334155'
    }
})

export default PatientInformation
