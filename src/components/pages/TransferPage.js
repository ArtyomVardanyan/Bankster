import React from 'react'
import { StyleSheet, View, Text, Image, TextInput, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const TransferPage = () => {
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
                <Text style={styles.nameText}>Mikayel</Text>
                <Text style={styles.nameText}>Muradyan</Text>
            </View>
            <View style={styles.money}>
                <Text style={styles.money}>$100,00</Text>
            </View>
            <TextInput placeholderTextColor="#ABABAC" placeholder='Visa' style={styles.input} />
            <View>
            <Button style={styles.btn} onPress={() => navigation.navigate('Transfer')}>$100 Pay</Button>
            </View>
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
    back: {
        fontWeight: 'bold',
        color: '#fff',
        // flexDirection: 'row',
        marginRight: '20px'
    },
    transfer: {
        fontWeight: 'bold',
        // flexDirection: 'row',
        color: '#fff',
        marginRight: '50px'
    },
    logo: {
        width: '90px',
        height: '90px',
        // flexDirection: 'row',
        alignItems: 'center',
     },      
    name: {
        marginTop: '200px',
        alignItems: 'center',
        flexDirection: 'row',
        fontWeight: 'bold',
    },
    surname: {
        marginTop: '200px',
        alignItems: 'center',
        flexDirection: 'row',
        fontWeight: 'bold',
    },
    nameText:{
        color: '#fff',
        alignItems: 'center',
        flexDirection:'row',
    },
    money: {
        alignItems: 'center',
        width: '80vw',
        color: '#fff',
        flexDirection:'row',
        // fontWeight: 'bold',
        // marginBottom: '100px',
    },
    input: {
      width: '80vw',
      backgroundColor: '#1E2021',
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 17,
      marginBottom: 15,
      color: '#fff'
    },
    btn: {
      marginBottom: 15,
      color: '#fff'
    },
});

export default TransferPage;