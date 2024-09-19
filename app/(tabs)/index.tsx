import { Image, StyleSheet, Platform, View, Text, StatusBar } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function index() {
  return (
    <View style={styles.container}>
      <StatusBar animated barStyle={"light-content"} />
      <View>
        <Text style={styles.textTitle}>Abhinav Successfully</Text>
        <Text style={styles.textTitle}>Abhinav Successfully</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  textTitle: {
    fontFamily: 'InterBold',
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  },
  text: {
    fontFamily: 'InterLight',
    color: 'white',
    fontSize: 14,
    textAlign: 'center'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
