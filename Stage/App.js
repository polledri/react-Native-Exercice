import { StyleSheet, Image, Text, View } from 'react-native';
import Square from './Square';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./assets/background.jpg')} />
      <Square/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  img: {
    width: '100%',
    height: '30%',
  },
});