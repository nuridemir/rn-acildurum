import {ActivityIndicator} from 'react-native';
import React from 'react';
import Routes from './navigation/Routes';

export default function App() {

  // if (loading)
  //   return (
  //     <>
  //       <ActivityIndicator />
  //     </>
  //   );

  return (
    <>
      <Routes />
    </>
  );
}