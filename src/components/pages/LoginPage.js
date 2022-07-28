import { TextInput, View, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import Button from '../Button'

const LoginPage = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <TextInput placeholderTextColor="#ABABAC" placeholder='Login' style={styles.input} />
      <TextInput placeholderTextColor="#ABABAC" placeholder='Password' style={styles.input} />
      <Button style={styles.btn} onPress={() => navigation.navigate('Home')}>Login</Button>
      <View style={styles.text}>
       <Button type='easy' onPress={() => {navigation.navigate('Register')}}>Registration</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120E0B',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  input: {
    width: 350,
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
    width: 350,
    marginTop: -15,
    alignItems: 'flex-end',
    // flexDirection: 'column',
    marginTop: 5,
  }
});

export default LoginPage;