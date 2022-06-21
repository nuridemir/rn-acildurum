import {StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({text, submitHandle}) {
  return (
    <TouchableOpacity style={styles.button} onPress={submitHandle}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3a323d',
    borderRadius: 8,
    padding: Dimensions.get('window').width / 24,
    marginTop: Dimensions.get('window').width / 30,
  },
  buttonText: {
    color: '#F56565',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 18,
  },
});
