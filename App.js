import UserPage from './src/components/pages/UserPage';
import LoginPage from './src/components/pages/LoginPage';
import { StyleSheet, Text, View } from 'react-native';
import TransferPage from './src/components/pages/TransferPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="User" component={UserPage} />
          <Stack.Screen name="Transfer" component={TransferPage} />
        </Stack.Navigator>
      </NavigationContainer>
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
