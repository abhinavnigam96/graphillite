import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Canvas } from "@react-three/fiber/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Suspense } from 'react';
import { Starlink } from '@/components/Starlink';

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated barStyle={"light-content"} />
      <View style={styles.stepContainer}>
        <Text style={styles.textTitle}>Paired Successfully</Text>
        <Text style={styles.text}>Connected to that tiny dot you might see in the sky when its dark and you have no light pollution in your vicinity</Text>
      </View>
      <View style={styles.modelContainer}>
        <Canvas>
          <directionalLight position={[1, 0, 0]} args={["white", 2]} />
          <directionalLight position={[-1, 0, 0]} args={["white", 2]} />
          <directionalLight position={[0, 0, 1]} args={["white", 2]} />
          <directionalLight position={[0, 0, -1]} args={["white", 2]} />
          <directionalLight position={[0, 1, 0]} args={["white", 16]} />
          <directionalLight position={[0, -1, 0]} args={["white", 2]} />
          <Suspense>
            <Starlink />
          </Suspense>
        </Canvas>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  modelContainer: {
    flex: 1,
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
  stepContainer: {
    marginVertical: 20,
    gap: 8
  },
  button: {
    backgroundColor: 'white',
    padding: 14,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: 'InterBold',
    fontSize: 14,
    color: 'black'
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
