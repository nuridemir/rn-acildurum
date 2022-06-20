import React, {createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NumberContext = createContext();

const setStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};

const getStorage = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(data);
  } catch (e) {
    console.log(e);
  }
};

export function NumberContextProvider({children}) {
  const [emergencyNumber, setEmergencyNumber] = React.useState('');
  const [emergencySMSNumber, setEmergencySMSNumber] = React.useState('');
  const [emergencySMSBody, setEmergencySMSBody] = React.useState(
    'Yardıma ihtiyacım var!!!',
  );

  /*
    -> burada state içinde getStorage ile storage daki item'ı aldık. eğer varsa bunu yoksa boş string return ettik.
       Yani emergencyNumber 'ın initial değeri bu return ettiğimiz data oldu.
       
    const [emergencyNumber, setEmergencyNumber] = React.useState(() => {
        const value = getStorage('emergencyNumber');
        
        return value ? value : ''       
    });
  */

  useEffect(() => {
    const value = getStorage('emergencyNumber');
    setEmergencyNumber(value);
  }, []);

  const updateEmergencyNumber = value => {
    setEmergencyNumber(value);
    setStorage('emergencyNumber', value);
  };

  const values = {
    emergencyNumber,
    emergencySMSNumber,
    emergencySMSBody,
    updateEmergencyNumber,
  };

  return (
    <NumberContext.Provider value={values}>{children}</NumberContext.Provider>
  );
}

export default NumberContext;
