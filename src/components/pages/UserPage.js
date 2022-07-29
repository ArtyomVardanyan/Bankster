import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from '../Button';
import { useState } from 'react';

export default function UserPage({ navigation }) {
  const [value, setValue] = useState()
  const [name, setName] = useState()

  const Click = () => {
    setName(value)
    setValue('')
  }

  return (
    <View style={styles.container}>

      <TouchableHighlight onPress={() => { navigation.navigate('Home') }}>
        <View style={styles.header}>
          <Ionicons name="md-chevron-back" size={24} color="white" />
          <Text style={styles.user}>Home</Text>
        </View>
      </TouchableHighlight>
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
        <TextInput placeholder={"Enter your new username"}
          placeholderTextColor={"#ABABAC"}
          style={styles.changeNameInput}
          value={value}
          onChange={(e) => setValue(e.target.value)} />
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
    backgroundColor: '#120E0B',
  },
  header: {
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 70,
    width: 350,
  },
  user: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 23,
  },
  icon: {
    width: 100,
    height: 100,
  },
  personInfo: {
    marginTop: 200,
    alignItems: "center"
  },
  anun: {
    color: '#fff',
    fontSize: 25,
    marginTop: 10,
  },
  changeName: {
    flex: 1,
    marginBottom: 10,
    alignItems: 'center',
  },

  changeNameInput: {
    width: 350,
    backgroundColor: '#1E2021',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 17,
    marginBottom: 15,
    color: '#fff'
  },
});
