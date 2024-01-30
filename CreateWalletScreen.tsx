import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateWalletScreen = ({navigation}:any) => {
  const [walletExist,setWalletExist] = useState(false);

  async function getWallet(){
    const value = await AsyncStorage.getItem('walletData')
        if (value !== null) {
            setWalletExist(true);
  }
}

useEffect(()=>{
  getWallet();
},[])
  return (
    <View style={{flex:1}}>
      <ImageBackground source={require('../assets/addWalletBackground.png')} style={{flex:1,padding:20,justifyContent:'space-between'}}>
      <View style={{marginTop:10}}>
        {walletExist?<TouchableOpacity style={{flexDirection: 'row', alignItems: 'center',}} onPress={() => navigation.goBack()}>
      <Image source={require('../assets/back.png')} />
                    <Text style={{color:'#fff',fontSize:20}}>   Add Wallet</Text>
                </TouchableOpacity>:<View >
      
      <Text style={{color:'#fff',fontSize:20}}>   Add Wallet</Text>
  </View>}
      
                
      </View>
      <View style={{justifyContent:"center",alignItems:'center',padding:20,marginBottom:100}}>
      <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('GenerateWallet')}>
                    <Text style={{color:'#fff',fontSize:18}}>Generate New Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.BtnImport} onPress={() => navigation.navigate('ImportWallet')}>
                    <Text style={{color:'#fff',fontSize:18}}>Import Wallet</Text>
                </TouchableOpacity>
      </View>
     

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

    Btn: {
        backgroundColor: '#A12288',
        height:55,
        width: "100%",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
        
        
        
    },
    BtnImport: {
        backgroundColor: '#A12288',
        height:55,
        width: "100%",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        
        
        
        
    },
});

export default CreateWalletScreen