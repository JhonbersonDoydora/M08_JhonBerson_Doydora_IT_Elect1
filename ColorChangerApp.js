import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function ColorChangerApp() {
  // State to store background color
  const [bgColor, setBgColor] = useState('#FFFFFF'); // default white

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Button title="White" onPress={() => setBgColor('#FFFFFF')} />
      <Button title="Light Blue" onPress={() => setBgColor('#ADD8E6')} />
      <Button title="Light Green" onPress={() => setBgColor('#90EE90')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
