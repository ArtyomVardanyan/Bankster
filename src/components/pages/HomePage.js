import { View, StyleSheet, Image, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const HomePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.hello}>
                <View style={styles.userInfo}>
                    <Image
                        style={styles.logo}
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
                        }}
                    />
                    <Text style={styles.name}>&nbsp;&nbsp;&nbsp;<Text style={styles.bold}>Hello,</Text> Vaxo</Text>
                </View>
                <Text onPress={() => {navigation.navigate('Login')}} style={styles.icon}>
                <MaterialIcons name="logout" size={24} color="#5A5857" />
                </Text>
            </View>
            <View style={styles.cart}>
                <View style={styles.mastercard}><Image
                    style={styles.iconMastercard}
                    source={{
                        uri: 'https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png',
                    }}
                /></View>
                <View><Text style={styles.price}>$54.567</Text></View>
                <View style={styles.info}>
                    <Text style={styles.infoCode}>• 3952</Text>
                    <Text style={styles.infoDate}> 09 / 28 </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#120E0B',
        alignItems: 'center',
        width: '100%',
        paddingTop: 50,
    },
    logo: {
        width: 45,
        height: 45,
    },
    name: {
        color: '#fff'
    },
    hello: {
        width: 350,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cart: {
        width: 350,
        height: 200,
        backgroundColor: '#1F1D1B',
        flexDirection: 'column',
        padding: 20,
        borderRadius: 20,
        marginTop: 50,
    },
    iconMastercard: {
        width: 50,
        height: 30,
    },
    price: {
        color: '#fff',
        fontSize: 45,
        marginTop: 28,
    },
    mastercard: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    bold: {
        fontWeight: 'bold',
    },
    info: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 'auto'
    },
    infoDate: {
        color: '#fff',
        backgroundColor: '#5A5857',
        padding: 4,
        borderRadius: 50,
    },
    infoCode: {
        color: '#5A5857',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default HomePage;