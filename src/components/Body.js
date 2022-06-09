import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import SendSMS from 'react-native-sms';

export default function Body() {
  const [acilArama, setAcilArama] = React.useState('155');
  const [acilSms, setAcilSms] = React.useState('155s');
  const [bodySMS, setBodySMS] = React.useState('Yardıma ihtiyacım var!');

  const handleAcilSms = () => {
    SendSMS.send(
      {
        body: bodySMS,
        recipients: [acilSms],
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

  const handleAcilAra = () => {
    RNImmediatePhoneCall.immediatePhoneCall(acilArama);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Acil Durum Çağrısı</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAcilAra}>
        <Text style={styles.text}>Acil Ara</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleAcilSms}>
        <Text style={styles.text}>Sms</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
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
  },
  headerText: {
    fontSize: 34,
    marginBottom: 40,
    fontWeight: '600',
    color: 'white',
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
