import { StyleSheet, View } from 'react-native';
import UserPage from './src/components/pages/UserPage';
import LoginPage from './src/components/pages/LoginPage';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TransferPage from './src/components/pages/TransferPage';
//import { TransferPage } from './TransferPage';

export default function App() {
  return (
    <View style={styles.container}>
      <UserPage />
      <LoginPage />
        <TransferPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120E0B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
