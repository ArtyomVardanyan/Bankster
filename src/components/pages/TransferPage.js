import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const TransferPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navigate}> 
            <Text style={styles.heading}>
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
        width: '90%',
        
    },
    navigate: {
        alignItems: 'center',
        marginTop: '20px',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heading: {
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: '0px',
    },
    transfer: {
        fontWeight: 'bold',
        color: '#fff',
        marginRight: '130px',
    },
    name: {
        marginTop: '200px',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    nameText:{
        color: '#fff',
    },
    money: {
        marginTop: '20px',
        alignItems: 'center',
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: '100px',
        

    },
    numbers: {
        alignItems: 'center',
        color: "#fff",
    }


});

export default TransferPage;