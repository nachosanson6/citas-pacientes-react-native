import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { formatedDate } from '../helpers'

const Patient = ({ item, setShowModal, editPatient, deletePatient, setShowPatientModal, setPatient }) => {
  const { paciente, date, id } = item

  // Función para formatear la fecha 


  return (
    <Pressable onPress={() => {
      setShowPatientModal(true)
      setPatient(item)
    }}>
      <View style={styles.container}>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.text}>{paciente}</Text>
        <Text style={styles.date}>{formatedDate(date)}</Text>

        <View style={styles.btnContainer}>
          <Pressable
            style={[styles.btn, styles.editbtn]}
            onPress={() => {
              setShowModal(true)
              editPatient(id)
            }}
          >
            <Text style={styles.btnText}>Editar</Text>
          </Pressable>

          <Pressable
            style={[styles.btn, styles.deletebtn]}
            onPress={() => deletePatient(id)}>
            <Text style={styles.btnText}>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomColor: '#94a3b8',
    borderBottomWidth: 2
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10
  },
  text: {
    color: '#6d28d9',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10
  },
  date: {
    color: '#374151',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editbtn: {
    backgroundColor: '#f59e0b'
  },
  deletebtn: {
    backgroundColor: '#ef4444'

  },
  btnText: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
    color: '#fff'
  }

})

export default Patient
