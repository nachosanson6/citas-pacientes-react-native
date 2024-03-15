import React from 'react'
import { SafeAreaView, Text } from 'react-native'
Text
const PatientInformation = ({ patient }) => {

    console.log(patient)

    return (
        <SafeAreaView>
            <Text>Informacion Paciente</Text>
            <Text>{patient.propietario}</Text>

        </SafeAreaView>
    )
}

export default PatientInformation
