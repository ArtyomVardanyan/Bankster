import { TextInput, View, StyleSheet, Text } from 'react-native'
import React from 'react'
import Button from '../Button'
import { auto } from 'eol';

const LoginPage = ({ navigation }) => {

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>LogIn</Text>
        <TextInput placeholderTextColor="#ABABAC" placeholder='Login' style={styles.input} />
        <TextInput placeholderTextColor="#ABABAC" placeholder='Password' style={styles.input} />
        <Button style={styles.btn} onPress={() => navigation.navigate('Home')}>Login</Button>
        <View style={styles.text}>
          <Button type='easy' onPress={() => { navigation.navigate('Register') }}>Registration</Button>
        </View>

      </View>
      <View style={styles.version}>
        <Text style={styles.versionText}>Banktser version 1.0</Text>
      </View>
      </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120E0B',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
  title: {
    color: '#fff',
    marginBottom: 25,
    fontWeight: 'bold',
    fontSize: 25,
  },
  text: {
    width: 350,
    marginTop: '-15px',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  version: {
    marginTop: 'auto',
    backgroundColor: '#120E0B',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 15,
  },
  versionText: {
    color: "#ABABAC",
  }
});

export default LoginPage;
