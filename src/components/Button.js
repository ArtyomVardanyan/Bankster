import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react';

const Button = ({ children, type, ...props }) => {
    console.log(type);
    return (

        <TouchableHighlight {...props}>
            <View style={type === 'easy' ? styles.easy : styles.button}>
                <Text style={type === 'easy' ? styles.easyText : styles.buttonText}>{children}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        width: '80vw',
        padding: 15,
        backgroundColor: '#ECBF4A',
        borderRadius: 10,
    },
    easyText: {
        color: '#ECBF4A',
        borderRadius: 10,
    },
    buttonText: {
        color: '#000'
    },
    text: {
        color: '#fff'
    }
});

export default Button;