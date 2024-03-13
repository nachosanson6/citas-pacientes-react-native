import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Pressable, Modal } from 'react-native';
import Form from './src/components/Form';


export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [patients, setPatients] = useState([])


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo} >Administrador de citas {''}
        <Text style={styles.titulobold}>Veterinaria</Text>
      </Text>

      <Pressable
        onPress={() => setShowModal(true)}
        style={styles.btnNuevaCita}>
        <Text style={styles.btnTextoNuevCita}>Nueva cita</Text>
      </Pressable>
      <Form
        showModal={showModal}
        setShowModal={setShowModal}
        patients={patients}
        setPatients={setPatients} />

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
  }

});
