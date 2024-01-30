import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyWallletScreen from './MyWallletScreen';
import CreateWalletScreen from './CreateWalletScreen';
import WalletList from './WalletList';
const Stack = createNativeStackNavigator();
const AddWalletScreen = ({}) => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
        
      }}>
          <Stack.Screen name="walletList" component={WalletList}/>
       <Stack.Screen name="MyWalletScreen" component={MyWallletScreen}/>
        
        
      </Stack.Navigator>
   
  )
}

export default AddWalletScreen