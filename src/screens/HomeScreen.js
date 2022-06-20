import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
} from 'react-native';
import React from 'react';
import Body from '../components/Body';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [input, setInput] = React.useState('');
  const [localNumber, setLocalNumber] = React.useState('');

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem('@acilnumara');
      if (value !== null) {
        setLocalNumber(value);
      }
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };

  React.useEffect(() => {
    readData();
  }, []);

  const submitHandle = async () => {
    try {
      await AsyncStorage.setItem('@acilnumara', input);
      alert('Numara başarıyla kaydedildi. Uygulamayı tekrardan başlatınız.');
    } catch (e) {
      alert('Numara kaydedilemedi!');
    }
  };

  if (localNumber) {
    return <Body />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text style={styles.introductoryText}>
            Uygulama hoşgeldin, acil durumlar da ailen den birine ulaşabileceğin bir
            numara eklemen gerekiyor!
          </Text>
          <Text style={styles.innerText}>
            İstediğin zaman ayarlardan değiştirebilirsin
          </Text>
        </View>
        <View>
          <TextInput style={styles.inputBox} onChangeText={setInput} />
          <Button title="Kaydet" style={styles.button} onPress={submitHandle} />
        </View>
      </View>
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
  introductoryText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {},
  inputBox: {
    backgroundColor: '#eee',
    color: '#333',
    borderRadius: 8,
    marginVertical: 20,
  },
  innerText: {
    color: '#eee',
    textAlign: 'center',
  },
});
