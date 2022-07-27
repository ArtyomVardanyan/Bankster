import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const TransferPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navigate}> 
            <Text onPress={() => navigation.navigate('Login')} style={styles.heading}>
                <Ionicons style={styles.heading} name="md-chevron-back" size={24} color="black" />
            </Text>
                <Text style={styles.transfer}>Transfer</Text>
            </View>
            <View style={styles.name}>
                <Text style={styles.nameText}>Mikayel Muradyan</Text>
            </View>
            <View ><Text style={styles.money}>$100,00</Text></View>
            <View ><Text style={styles.numbers}>1 2 3</Text></View>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#120E0B',
        width: '80%',
        
    },
    navigate: {
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heading: {
        fontWeight: 'bold',
        color: '#fff',
    },
    transfer: {
        fontWeight: 'bold',
        color: '#fff',
        marginRight: 130,
    },
    name: {
        marginTop: 200,
        alignItems: 'center',
        fontWeight: 'bold',
    },
    nameText:{
        color: '#fff',
    },
    money: {
        marginTop: 20,
        alignItems: 'center',
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 100,
        

    },
    numbers: {
        alignItems: 'center',
        color: "#fff",
    }


});

export default TransferPage;