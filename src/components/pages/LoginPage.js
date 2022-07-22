import { TextInput, View, StyleSheet } from 'react-native'
import React from 'react'
import Button from '../Button'

const LoginPage = () => {
    return (
        <View style={styles.container}>
            <TextInput placeholderTextColor="#ABABAC"  placeholder='Login' style={styles.input} />
            <TextInput placeholderTextColor="#ABABAC"  placeholder='Password' style={styles.input} />
            <Button>Login</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      backgroundColor: '#1E2021',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 17,
        marginBottom: 15,
        color: '#fff'

    },
  });

export default LoginPage;