import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';

const Friend = ({ name, imageUrl }) => {
    return (
        <View style={styles.friendsContet}>

            <Image
                style={styles.friendsLogo}
                source={{
                    uri: imageUrl,
                }}
            />

            <Text style={styles.friendsName}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    friendsLogo: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    friendsContet: {
        alignItems: 'center',
        marginRight: 25,
    },
    friendsName: {
        color: '#fff',
        marginTop: 10,
        color: '#5A5857',
    },
});

export default Friend;
