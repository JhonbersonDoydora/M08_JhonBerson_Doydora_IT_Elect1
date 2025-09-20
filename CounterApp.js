// CounterApp.js
import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>

      <Text style={styles.count}>{count}</Text>

      <View style={styles.buttonRow}>
        <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
          <Text style={styles.buttonText}>+ 1</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => setCount(count - 1)}>
          <Text style={styles.buttonText}>- 1</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f4f5f7",
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  count: { fontSize: 48, fontWeight: "bold", marginBottom: 20 },
  buttonRow: { flexDirection: "row", gap: 15 },
  button: {
    backgroundColor: "#222",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "600" },
});