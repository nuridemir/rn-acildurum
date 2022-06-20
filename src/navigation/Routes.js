import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
    <NavigationContainer>
      <Stack.Navigator>
        {MainStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
    );
}