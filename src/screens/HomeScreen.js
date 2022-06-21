import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
  Alert,
  Image,
} from 'react-native';
import React from 'react';
import Body from '../components/Body';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import CustomInputBox from '../components/CustomInputBox';

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
      console.log('Failed to fetch the input from storage');
    }
  };

  React.useEffect(() => {
    readData();
  }, []);

  const submitHandle = async () => {
    try {
      await AsyncStorage.setItem('@acilnumara', input);
      Alert.alert(
        'Başarılı',
        'Numara başarıyla kaydedildi. Uygulamayı tekrardan başlatınız.',
      );
    } catch (e) {
      Alert.alert('Hata', 'Numara kaydedilemedi!');
    }
  };

  if (localNumber) {
    return <Body />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerBox}>
        <View style={styles.imagesBox}>
          <Image
            style={styles.images}
            source={require('../assets/images/alert.png')}
          />
        </View>
        <View>
          <Text style={styles.introductoryText}>
            Uygulamaya hoşgeldin. Bir numara tanımla.
          </Text>
        </View>
        <View>
          <CustomInputBox
            onChangeText={setInput}
            placeholder="Aile numarası giriniz..."
          />
          <CustomButton text="Kaydet" submitHandle={submitHandle} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a202c',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerBox: {
    width: Dimensions.get('window').width / 1.1,
  },
  introductoryText: {
    fontSize: 32,
    color: '#F56565',
    textAlign: 'center',
    fontWeight: '700',
    marginVertical: Dimensions.get('window').width / 30,
  },
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
  imagesBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
