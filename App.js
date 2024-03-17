import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Pressable, Modal, FlatList, Alert } from 'react-native';
import Form from './src/components/Form';
import Patient from './src/components/Patient';
import PatientInformation from './src/components/PatientInformation';


export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [showPatientModal, setShowPatientModal] = useState(false)
  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  // Filtra el paciente por la id
  const editPatient = (id) => {
    const editPatient = patients.filter(patient => patient.id === id)
    setPatient(editPatient[0])

  }

  const deletePatient = (id) => {
    Alert.alert(
      '¿Deseas eliminar este paciente?',
      'Un paciente eliminado no se puede recuperar',
      [
        { text: 'Cancelar' },
        {
          text: 'Si, Eliminar', onPress: () => {
            const updatedPatients = patients.filter(patientsState => patientsState.id !== id)
            setPatients(updatedPatients)
          }
        }
      ]
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo} >Administrador de citas {''}
        <Text style={styles.titulobold}>Veterinaria</Text>
      </Text>

      <Pressable
        onPress={() => {
          setShowModal(true)

        }}
        style={styles.btnNuevaCita}>
        <Text style={styles.btnTextoNuevCita}>Nueva cita</Text>
      </Pressable>

      {patients.length === 0 ?
        <Text style={styles.noPatients}>No hay pacientes</Text> :
        <FlatList
          style={styles.flatlist}
          data={patients}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {

            return (
              <Patient item={item}
                setShowModal={setShowModal}
                editPatient={editPatient}
                deletePatient={deletePatient}
                setShowPatientModal={setShowPatientModal}
                setPatient={setPatient}
              />
            )
          }}
        />
      }
      {showModal && (
        <Form
          showModal={showModal}
          setShowModal={setShowModal}
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient} />
      )}

      <Modal
        visible={showPatientModal}
        animationType='fade'
      >
        <PatientInformation
          patient={patient}
          setShowPatientModal={setShowPatientModal}
          setPatient={setPatient} />
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    flex: '1'
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'

  },
  titulobold: {
    fontWeight: '900',
    color: '#6d28d9'
  },
  btnNuevaCita: {
    backgroundColor: '#6d28d9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextoNuevCita: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  noPatients: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'
  },
  flatlist: {
    marginTop: 50,
    marginHorizontal: 30
  }

});
