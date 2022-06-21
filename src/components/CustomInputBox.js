import {StyleSheet, Dimensions, TextInput} from 'react-native';
import React from 'react';

export default function CustomInputBox({onChangeText, placeholder}) {
  return (
    <TextInput
      style={styles.inputBox}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
}

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#2d3748',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: Dimensions.get('window').width / 40,
    borderColor: '#718096',
    borderWidth: 1,
    marginTop: Dimensions.get('window').width / 20,
    marginBottom: Dimensions.get('window').width / 60,
  },
});
