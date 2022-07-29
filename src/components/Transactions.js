import { View, StyleSheet, Image, Text } from 'react-native';

const Transactions = ({ name, imageUrl }) => {
    return (
        <View style={styles.transactionsElement}>
            <View style={styles.transactionsInfo}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
                    }}
                />
                <Text style={styles.transactionsName}>&nbsp;&nbsp;&nbsp;Bagrat</Text>
            </View>
            <View>
                <Text style={styles.transactionsPrice}>- $450</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    transactionsElement: {
        marginTop: 20,
        padding: 20,
        width: 350,
        height: 75,
        backgroundColor: '#1F1D1B',
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    transactionsInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    transactionsName: {
        color: '#5A5857',
    },
    transactionsPrice: {
        color: '#fff',
        fontSize: 18,
    },
    logo: {
        width: 45,
        height: 45,
        borderRadius: 50,
    },
});

export default Transactions;
