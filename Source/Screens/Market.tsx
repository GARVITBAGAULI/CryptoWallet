import { View, Text } from 'react-native'
import React from 'react'
import NetworkSwap from './NetworkSwap'
import SwapToken from './SwapToken'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const Market = () => {

  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
        
      }}>
          <Stack.Screen name="networkSwap" component={NetworkSwap}/>
       <Stack.Screen name="swapToken" component={SwapToken}/>
        
        
      </Stack.Navigator>
  )
}

export default Market