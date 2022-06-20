import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useContext, useState} from 'react';
export default function AddNumber({updateEmergencyNumber}) {
  const [number, setNumber] = useState('');

  function submitHandle() {
    console.log("first")
  }

  return (
    <View>
      <View>
        <Text style={{color: 'white'}}>
          Uygulama hoşgeldin, bir numara eklemen gerekiyor!
        </Text>
      </View>
      <View>
        <TextInput
          style={{backgroundColor: '#eee', marginVertical: 20}}
          onChange={e => setNumber(e.target.value)}
        />
        <Button title="kaydet" onPress={submitHandle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
