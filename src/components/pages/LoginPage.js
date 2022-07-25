import { TextInput, View, StyleSheet } from 'react-native'
import React from 'react'
import Button from '../Button'

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholderTextColor="#ABABAC" placeholder='Login' style={styles.input} />
      <TextInput placeholderTextColor="#ABABAC" placeholder='Password' style={styles.input} />
      <Button onPress={() => navigation.navigate('Transfer')}>Login</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120E0B',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    width: '80vw',
    backgroundColor: '#1E2021',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 17,
    marginBottom: 15,
    color: '#fff'
  },
});

export default LoginPage;