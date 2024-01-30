import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddWalletScreen from './AddWalletScreen';
import ContactScreen from './ContactScreen';
import HistoryScreen from './HistoryScreen';
import SettingsScreen from './SettingsScreen';
import Market from './Market';


const Tab = createBottomTabNavigator();
const BottomTabScreen = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown:false,
            tabBarActiveBackgroundColor:'rgba(0,0,0,0.3)',  
            // tabBarInactiveBackgroundColor:'rgba(101, 35, 109, 0.5)',
            tabBarStyle: { position: 'absolute',bottom:20,height:65,borderRadius:50,backgroundColor:'#65236D',paddingTop:10,width:'90%',marginHorizontal:20 },
            tabBarLabelStyle:{marginBottom:20,color:'#fff',fontSize:12},
            tabBarItemStyle:{height:60,borderRadius:40}

            

        }}>

            <Tab.Screen name="Addwallet" component={AddWalletScreen}  options={{
          tabBarLabel: 'Wallet',
          unmountOnBlur:true,
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../assets/bottom/wallet.png')} />
          ),
        }}/>
            <Tab.Screen name="Contacts" component={ContactScreen} options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../assets/bottom/contact.png')} />
          ),
        }}/>
         <Tab.Screen name="market" component={Market} options={{
          tabBarLabel: 'Market',
          tabBarIcon: ({ color, size }) => (
           <View style={{backgroundColor:'#5F30EB',height:50,width:50,alignItems:'center',justifyContent:'center',borderRadius:40,marginBottom:40}}>
              <Image source={require('../assets/walletArrow.png')} />
           </View>
          ),
        }}/>
            <Tab.Screen name="History" component={HistoryScreen} options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../assets/bottom/history.png')} />
          ),
        }}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../assets/bottom/setting.png')} />
          ),
        }} />

        </Tab.Navigator>
    )
}

export default BottomTabScreen