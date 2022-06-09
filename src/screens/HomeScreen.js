import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Body from '../components/Body';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Body />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
