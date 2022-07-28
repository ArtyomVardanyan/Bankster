import React from 'react'
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import Button from '../Button'
import { Ionicons } from '@expo/vector-icons';

const TransferPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.navigate}>
                <Text onPress={() => navigation.navigate('Login')} style={styles.back}>
                    <Ionicons style={styles.back} name="md-chevron-back" size={24} color="black" />
                </Text>
                <Text style={styles.transfer}>Transfer</Text>
            </View>
            <Image
                style={styles.logo}
                source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
                }}
            />
            <View style={styles.name}>
                <Text style={styles.nameText}>Your name</Text>
            </View>
            <View style={styles.money}>
                <Text style={styles.money}>$100.00</Text>
            </View>
            <TextInput placeholderTextColor="#ABABAC" placeholder='Visa' style={styles.input} />
            <View>
                <Button style={styles.btn} onPress={() => navigation.navigate('Transfer')}>$100.00 Pay</Button>
            </View>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#120E0B',
        alignItems: 'center',
        width: '80%',
      },
    navigate: {
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:350,
    },
    back: {
        fontWeight: 'bold',
        color: '#fff',
        width: 350,
    },
    transfer: {
        fontWeight: 'bold',
        color: '#fff',
        flexDirection: 'row',
        width: 475,
    },
    logo: {
        width: 90,
        height: 90,
        marginTop: 20,
        alignItems: 'center',
    },
    name: {
        marginTop: 20,
    },
    nameText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    money: {
        alignItems: 'center',
        marginTop: 10,
        color: '#fff',
        flexDirection: 'row',
        marginBottom: 100,
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
});

export default TransferPage;