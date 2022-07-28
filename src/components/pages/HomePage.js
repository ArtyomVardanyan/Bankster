import { View, StyleSheet, Image, Text } from 'react-native'
import React from 'react'

const HomePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.hello}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
                    }}
                />
                <Text style={styles.name}>&nbsp;&nbsp;&nbsp;Hello, Vaxo</Text>
            </View>
            <View style={styles.cart}>
                <View style={styles.mastercard}><Image
                    style={styles.icon}
                    source={{
                        uri: 'https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png',
                    }}
                /></View>
            </View>
            <View></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#120E0B',
        alignItems: 'center',
        width: '80%',
        marginTop: 20,
    },
    logo: {
        width: 40,
        height: 40,
    },
    name: {
        color: '#fff'
    },
    hello: {
        width: '80%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    cart: {
        width: '80%',
        height: '20%',
        backgroundColor: '#1F1D1B',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 20,
        borderRadius: 20,
        marginTop: 50,
    },
    icon: {
        width: 50,
        height: 30,
    },
    price: {
        color: '#fff',
    },
    mastercard: {

    }
});

export default HomePage;