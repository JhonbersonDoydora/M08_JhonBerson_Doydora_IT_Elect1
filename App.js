import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ChatScreen from './ChatScreen'; 
import CommentSection from './CommentSection';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ChatScreen />
      <CommentSection />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Add any global styles here if needed
  },
});

export default App;