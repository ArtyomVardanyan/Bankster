import { StyleSheet, View } from 'react-native';
import UserPage from './src/components/pages/UserPage';

export default function App() {
  return (
    <View style={styles.container}>
      <UserPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120E0B',
  },
});
