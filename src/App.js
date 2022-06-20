import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Routes from './navigation/Routes';

export default function App() {
  // const [loading, setLoading] = React.useState(true);

  // React.useEffect(() => {
  //   setLoading(false)
  // }, []);

  // if(loading)
  //   return <><Text>Loading...</Text></>

  return (
    <>
      <Routes />
    </>
  );
}

const styles = StyleSheet.create({});
