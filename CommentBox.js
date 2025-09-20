import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";

export default function CommentBox() {
  const [comments, setComments] = useState([
    { id: "1", text: "This is awesome!" },
    { id: "2", text: "Wow, great work!" },
  ]);
  const [input, setInput] = useState("");

  const postComment = () => {
    if (input.trim()) {
      setComments([...comments, { id: Date.now().toString(), text: input }]);
      setInput("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Facebook Comments</Text>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.commentBubble}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write a comment..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={postComment} style={styles.button}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#f0f2f5" },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  commentBubble: {
    padding: 8,
    marginVertical: 3,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  inputContainer: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 5,
  },
  button: { backgroundColor: "#1877f2", padding: 10, borderRadius: 20 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});