import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react';

const Button = ({children, ...props}) => {
    return (
        <TouchableHighlight {...props} style={styles.container}>
            <View style={styles.button}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        width: 300,
        padding: 15,
        backgroundColor: '#ECBF4A',
        borderRadius: 10,
    },

    text: {
        color: '#000'
    }
});

export default Button;