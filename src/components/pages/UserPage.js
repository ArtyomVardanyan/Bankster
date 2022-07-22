import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function UserPage() {
  return (
    <View style={styles.container}>
        <View className="personInfo" style={styles.personInfo}>
            <FontAwesome name="user-circle" size={90} color="white" />
            <Text style={styles.anun}>Anun Azganun</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textColor: '#00FF00',
  },
  personInfo: {
    marginTop: 200,
    flex: 1,
    alignItems: "center",
  },
  anun: {
      color: '#fff',
      fontSize: 25,
      marginTop: 10,
  }
});
