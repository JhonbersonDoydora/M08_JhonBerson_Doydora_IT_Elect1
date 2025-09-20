import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Messenger from "./Messenger";
import CommentBox from "./CommentBox";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Messenger Section */}
        <Messenger />

        {/* Comment Section */}
        <CommentBox />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
});