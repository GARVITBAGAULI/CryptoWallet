import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Source/Screens/HomeScreen';
import LoginScreen from './Source/Screens/LoginScreen';
import RegisterScreen from './Source/Screens/RegisterScreen';
import VerifyScreen from './Source/Screens/VerifyScreen';
import Forget from './Source/Screens/Forget';
import MyWallletScreen from './Source/Screens/MyWallletScreen';
import BottomTabScreen from './Source/Screens/BottomTabScreen';
import ImportWalletScreen from './Source/Screens/ImportWalletScreen';
import PrivateKeyScreen from './Source/Screens/PrivateKeyScreen';
import MnemonicScreen from './Source/Screens/MnemonicScreen';
import GenerateWalletScreen from './Source/Screens/GenerateWalletScreen';
import RecoveryScreen from './Source/Screens/RecoveryScreen';
import VerifyMnemonicsScreen from './Source/Screens/VerifyMnemonicsScreen';
import AddTokenScreen from './Source/Screens/AddTokenScreen';
import CustomToken from './Source/Screens/CustomToken';
import SendBitcoin from './Source/Screens/SendBitcoin';
import ConfirmSend from './Source/Screens/ConfirmSend';
import SendComplete from './Source/Screens/SendComplete';
import TransactionWallet from './Source/Screens/TransactionWallet';
import BuyBitcoin from './Source/Screens/BuyBitcoin';
import Network from './Source/Screens/Network';

import WalletList from './Source/Screens/WalletList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateWalletScreen from './Source/Screens/CreateWalletScreen';
import AddAddress from './Source/Screens/AddAddress';
import AddressBook from './Source/Screens/AddressBook';

const Stack = createNativeStackNavigator();
const App = () => {
  const [walletExist, setWalletExist] = useState(false);

  async function getWallet() {
    const value = await AsyncStorage.getItem('walletData');
    if (value !== null) {
      setWalletExist(true);
    }
  }

  useEffect(() => {
    getWallet();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="VerifyScreen" component={VerifyScreen} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="FirstScreen"
          component={walletExist ? BottomTabScreen : CreateWalletScreen}
        />
        <Stack.Screen name="BottomTab" component={BottomTabScreen} />

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}

        <Stack.Screen name="CreateWallet" component={CreateWalletScreen} />

        <Stack.Screen name="ImportWallet" component={ImportWalletScreen} />
        <Stack.Screen name="PrivateKey" component={PrivateKeyScreen} />
        <Stack.Screen name="MnemonicsPhrase" component={MnemonicScreen} />
        <Stack.Screen name="GenerateWallet" component={GenerateWalletScreen} />
        <Stack.Screen name="Recovery" component={RecoveryScreen} />
        <Stack.Screen
          name="VerifyMnemonics"
          component={VerifyMnemonicsScreen}
        />
        <Stack.Screen name="AddToken" component={AddTokenScreen} />
        <Stack.Screen name="CustomToken" component={CustomToken} />
        <Stack.Screen name="SendBitcoin" component={SendBitcoin} />
        <Stack.Screen name="ConfirmSend" component={ConfirmSend} />
        <Stack.Screen name="SendComplete" component={SendComplete} />
        <Stack.Screen name="Transaction" component={TransactionWallet} />
        <Stack.Screen name="Network" component={Network} />
        <Stack.Screen name="addAddress" component={AddAddress} />
        <Stack.Screen name="AddressBook" component={AddressBook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
