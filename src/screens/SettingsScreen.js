import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import CustomInputBox from '../components/CustomInputBox';

export default function SettingsScreen({ navigation: { goBack } }) {
  const [input, setInput] = React.useState('');
  const [localNumber, setLocalNumber] = React.useState('');

  const submitHandle = async () => {
    try {
      await AsyncStorage.setItem('@acilnumara', input);
      Alert.alert(
        'Başarılı',
        'Numara başarıyla kaydedildi. Lütfen uygulamayı tekrar başlatınız.',
      );
    } catch (e) {
      Alert.alert('Hata', 'Numara kaydedilemedi.');
    }
  };

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem('@acilnumara');
      if (value !== null) {
        setLocalNumber(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    readData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerTop}>
        <TouchableOpacity onPress={() => goBack()}>
          <Text style={{textAlign: 'left'}}>
            <Icon name="md-chevron-back-sharp" color="#F56565" size={36} />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <View style={styles.innerBox}>
          <View>
            <View>
              <Text style={styles.introductoryText}>
                Acil durumlar da ulaşabileceğin numarayı değiştir
              </Text>
            </View>
            <View>
              <CustomInputBox onChangeText={setInput} placeholder="Aile numarasını değiştir..." />
              <View>
                <Text style={styles.innerText}>
                  Mevcut numara: {localNumber}
                </Text>
              </View>
              <CustomButton text="Kaydet" submitHandle={submitHandle} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a202c',
  },
  headerTop: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  box: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 10,
  },
  innerBox: {
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 2,
  },
  introductoryText: {
    fontSize: 40,
    color: '#F56565',
    textAlign: 'center',
    fontWeight: '700',
  },
});
