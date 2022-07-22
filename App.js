import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TransferPage from './src/components/pages/TransferPage';
//import { TransferPage } from './TransferPage';

export default function App() {
  return (
    <View style={styles.container}>
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
