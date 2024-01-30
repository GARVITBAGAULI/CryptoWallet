import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Wallet, utils } from 'ethers';
import  'react-native-get-random-values';
import "@ethersproject/shims";

const GenerateWalletScreen = ({ navigation }: any) => {

  const [name,setName] = useState('');

  function nextPressed(){
    if(name.length == 0){
      Alert.alert("Error",'Please enter wallet name',[{text: 'OK', onPress: () => console.log('OK Pressed')}])
  }else{
      // let Mnemonic:any= utils.entropyToMnemonic(utils.randomBytes(16))     //.split(' ');     
      //    console.log('Mnemonic:',JSON.stringify(Mnemonic));
      //    console.log('length:',Mnemonic.length)
      // console.log('Mnemonic:',Mnemonic);
     
  
        //  const wallet = Wallet.fromMnemonic(Mnemonic);
        const wallet = Wallet.createRandom();
      
          const obj = {
              walletName: name,
              address: wallet.address,
              mnemonic: wallet.mnemonic.phrase,
              privateKey: wallet.privateKey,
              publicKey: wallet.publicKey,
          }
          // console.log(obj);
          
     


 navigation.navigate("Recovery",{wallet: obj});
  
  }   
  }

  // useEffect(()=>{
  //   console.log(name);
    
  // },[name])
  return (
    <View style={{ backgroundColor: '#291443', flex: 1, padding: 20, justifyContent:"space-between" }}>
      <View>
        <TouchableOpacity style={{ marginTop: 24,flexDirection:'row',alignItems:'center' }} onPress={() => navigation.navigate('CreateWallet')}>
        <Image source={require('../assets/back.png')} />
        <Text style={{ color: '#fff', fontSize: 20,marginLeft:10 }}>Generate Wallet </Text>
      </TouchableOpacity>

      <Text style={{ color: '#fff', marginTop: 45, fontSize: 16 }}>Name</Text>
      <TextInput style={{ marginTop: 5, height: 50, width: '100%', borderRadius: 10,color:'#959595', backgroundColor: 'rgba(255,255,255,0.2)',fontSize:18,paddingLeft:10 }} 
          placeholder='Wallet1'
          placeholderTextColor={'#959595'}
          onChangeText={(text:string)=>setName(text)}
        
          
      />

      {/* <Text style={{ color: '#fff', marginTop: 15, fontSize: 16 }}>Password</Text>
      <TextInput  style={{ marginTop: 5, height: 50, width: '100%', borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.2)',color:'#959595',paddingLeft:10 }} 
      secureTextEntry={true}
      />

      <Text style={{ color: '#fff', marginTop: 15, fontSize: 16 }}>Confirm Password</Text>
      <TextInput  style={{ marginTop: 5, height: 50, width: '100%', borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.2)',color:'#959595',paddingLeft:10 }}
      secureTextEntry={true} /> */}
</View>
      <View >
        <TouchableOpacity style={styles.BtnImport}  onPress={nextPressed} >
                    <Text style={{color:'#fff',fontSize:18}}>Next</Text>
                </TouchableOpacity>
                </View>
    </View>
  )
}

const styles = StyleSheet.create({
  BtnImport: {
    backgroundColor: '#A12288',
    height:55,
    width: "100%",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:30,
    
    
    
    
},
});


export default GenerateWalletScreen