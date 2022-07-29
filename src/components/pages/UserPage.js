import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
        <View style={styles.header}>
            <Ionicons style={styles.heading} name="md-chevron-back" size={24} color="white" />
            <Text style={styles.user}>User</Text>
        </View>
        <View style={styles.personInfo}>
            <Image
                style={styles.icon}
                source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
                }}
            />
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
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'flex-start',
    marginTop: 70,
  },
  user: {
      fontWeight: 'bold',
      color: '#fff',
      marginLeft: 80,
  },
  icon: {
      width: 100,
      height: 100,
  },
  personInfo: {
    flex: 1,
    alignItems: "center"
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
      width: 350,
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
