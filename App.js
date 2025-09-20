import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

// CounterApp Component
const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.value}>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button title="Decrement" onPress={() => setCount(count - 1)} />
    </View>
  );
};

// ColorChangerApp Component
const ColorChangerApp = () => {
  const [bgColor, setBgColor] = useState('white');

  return (
    <View style={[styles.section, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>Color Changer App</Text>
      <Button title="White" onPress={() => setBgColor('white')} />
      <Button title="Light Blue" onPress={() => setBgColor('lightblue')} />
      <Button title="Light Green" onPress={() => setBgColor('lightgreen')} />
    </View>
  );
};

// Main App
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CounterApp />
      <ColorChangerApp />
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  section: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    elevation: 3, // shadow for Android
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  value: {
    fontSize: 20,
    marginBottom: 10,
  },
});