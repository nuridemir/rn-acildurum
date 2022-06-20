import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen() {
  const [input, setInput] = React.useState('');

  const submitHandle = async () => {
    try {
      await AsyncStorage.setItem('@acilnumara', input);
      alert('Numara başarıyla kaydedildi. Lütfen uygulamayı tekrar başlatınız.');
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View>
          <View>
            <Text style={{color: 'white', fontSize: 24, textAlign: 'center'}}>
              Acil durumlarda ulaşabileceğin numarayı değiştir
            </Text>
          </View>
          <View>
            <TextInput
              style={{backgroundColor: '#eee', marginVertical: 20, color: '#333'}}
              onChangeText={setInput}
            />
            <Button title="kaydet" onPress={submitHandle} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
