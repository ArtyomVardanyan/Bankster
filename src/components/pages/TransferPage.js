import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const TransferPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                <Ionicons style={styles.heading} name="md-chevron-back" size={24} color="black" />
            </Text>
            <Text style={styles.heading}>Transfer</Text>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#120E0B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        color: '#fff'
    }
});

export default TransferPage;