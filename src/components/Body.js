import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import SendSMS from 'react-native-sms';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddNumber from '../components/AddNumber';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Body() {
  const navigation = useNavigation();
  const [input, setInput] = React.useState('');

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem('@acilnumara');
      if (value !== null) {
        setInput(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    readData();
  }, []);

  const [acil, setAcil] = useState('155');
  const [acilBody, setAcilBoyd] = useState('Yardıma ihticayım var!');
  const handleAcilSms = () => {
    SendSMS.send(
      {
        body: acilBody,
        recipients: [input],
        successTypes: ['sent', 'queued'],
      },
      (completed, cancelled, error) => {
        if (completed) {
          console.log('SMS Sent Completed');
        } else if (cancelled) {
          console.log('SMS Sent Cancelled');
        } else if (error) {
          console.log('Some error occured');
        }
      },
    );
  };
  const handleAcilAileAra = () => {
    RNImmediatePhoneCall.immediatePhoneCall(input);
  };
  const handleAcilAra = () => {
    RNImmediatePhoneCall.immediatePhoneCall(acil);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerTop}>
        <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={{textAlign: 'right'}}>
            <Icon name="ios-settings-sharp" color="#fff" size={24} />
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.headerText}>Acil Durum Çağrısı</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAcilAra}>
        <Text style={styles.text}>Polisi Ara</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleAcilAileAra}>
        <Text style={styles.text}>Aileni Ara</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleAcilSms}>
        <Text style={styles.text}>Ailene acil sms at</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
  },
  headerTop: {
    marginVertical: 10,
    textAlign: 'right',
  },
  button: {
    width: '100%',
    marginBottom: 20,
    borderRadius: 20,
  },
  text: {
    padding: 20,
    backgroundColor: 'tomato',
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '700'
  },
  headerText: {
    fontSize: 34,
    marginVertical: 40,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center'
  },
  container2: {
    padding: 10,
    textAlign: 'center',
    marginTop: 100,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});
