import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from './styles/colors';
import Navigator from './screens/Navigator';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
