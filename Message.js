import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";

export default function Messenger() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hey, how are you?", sender: "other" },
    { id: "2", text: "I’m good! You?", sender: "me" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: input, sender: "me" }]);
      setInput("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messenger</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageBubble,
              item.sender === "me" ? styles.myMessage : styles.otherMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#e5ddd5", borderBottomWidth: 1 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  messageBubble: {
    padding: 10,
    marginVertical: 4,
    borderRadius: 12,
    maxWidth: "70%",
  },
  myMessage: { backgroundColor: "#0084ff", alignSelf: "flex-end" },
  otherMessage: { backgroundColor: "#d9d9d9", alignSelf: "flex-start" },
  messageText: { color: "#fff" },
  inputContainer: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 5,
  },
  button: { backgroundColor: "#0084ff", padding: 10, borderRadius: 20 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});