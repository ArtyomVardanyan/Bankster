import { StyleSheet, View } from 'react-native';
import LoginPage from './src/components/pages/LoginPage';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginPage />
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
