import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
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
            <Icon name="ios-settings-sharp" color="#F56565" size={30} />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <View style={styles.innerBox}>
          <TouchableOpacity style={styles.button} onPress={handleAcilAra}>
            <Image
              style={styles.images}
              source={require('../assets/images/alert.png')}
            />
            <Text style={styles.text}>Polisi Ara</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleAcilAileAra}>
            <Image
              style={styles.images}
              source={require('../assets/images/family.png')}
            />
            <Text style={styles.text}>Aileni Ara</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleAcilSms}>
            <Image
              style={styles.images}
              source={require('../assets/images/conversation.png')}
            />
            <Text style={styles.text}>Ailene sms at</Text>
          </TouchableOpacity>
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
    paddingRight: 20,
  },
  box: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 10,
  },
  innerBox: {
    height: Dimensions.get('window').height / 1.5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
  },
});
