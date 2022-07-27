import { StyleSheet, Text, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Button from '../Button';
import { useState } from 'react';

export default function UserPage() {
  const [value, setValue] = useState()
  const [name, setName] = useState()

  const Click = () => {
    setName(value)
    setValue('')
  }

  return (
    <View style={styles.container}>
        <View style={styles.personInfo}>
            <FontAwesome name="user-circle" color="white" />
            <Text style={styles.anun}>{name}</Text>
        </View>
        <View style={styles.changeName}>
            <TextInput placeholder={"Change Your name"}
                       placeholderTextColor={"#ABABAC"} 
                       style={styles.changeNameInput}
                       value={value}
                       onChange={(e) => setValue(e.target.value)}/>
            <Button onPress={Click}>Change name</Button>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'flex-start',
    flexDirection: 'column',
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
  },
  changeName: {
      flex: 1,
      marginBottom: 200,
      alignItems: 'center',
  },
  changeNameInput: {
      width: 300,
      height: 50,
      fontSize: 16,
      borderRadius: 3,
      backgroundColor: '#1E2021',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 17,
      marginBottom: 30,
  }
});
