import { TextInput, View, StyleSheet, TouchableHighlight, Text } from 'react-native'
import React from 'react'
import Button from '../Button'

const RegisterPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholderTextColor="#ABABAC" placeholder='Email' style={styles.input} />
      <TextInput placeholderTextColor="#ABABAC" placeholder='Name' style={styles.input} />
      <TextInput placeholderTextColor="#ABABAC" type='password' placeholder='Password' style={styles.input} />
      <Button style={styles.btn} onPress={() => navigation.navigate('Login')}>Registration</Button>
      <View style={styles.text}>
        <Text style={styles.question}>Do you have an account? <Button type='easy' onPress={() => navigation.navigate('Login')}>Login</Button></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#120E0B',
    justifyContent: 'center',
    alignItems: 'center',

    width: '90%',
  },
  input: {
    width: '80%',
    backgroundColor: '#1E2021',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 17,
    marginBottom: 15,
    color: '#fff'
  },
  btn: {
    marginBottom: 15,
  },
  text: {
    width: '80%',
    marginTop: -15,
    alignItems: 'flex-end',
    flexDirection: 'column',
    marginTop: 5,
  },
  question: {
    color: '#fff',
  }
});

export default RegisterPage;