import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignupPage from './src1/Screens/SignupScreen/SignupScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    <SignupPage/>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
