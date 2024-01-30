import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { daiAbi } from '../ethers/integration'
import { ethers } from 'ethers'

const CustomToken = ({ navigation,route }: any) => {
    const [myNetwork,setMyNetwork] = useState({});
    const[name,setName] = useState("");
    const[symbol,setSymbol] = useState('');
    const [decimal, setDecimal] = useState("");
    const [smartContract, setSmartContract] = useState("");
    const wallet = route.params.wallet
    const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com/');
  const daiContract = new ethers.Contract(smartContract, daiAbi, provider);
 

  
 
  async function searchPressed(){
 const contractName = await daiContract.name()
 setName(contractName);
 const contractSymbol = await daiContract.symbol()
 setSymbol(contractSymbol);
 const contractDecimal = await daiContract.decimals()
 setDecimal(Number(contractDecimal).toString());
//console.log(Number(contractDecimal).toString(),contractName,contractSymbol)

  }
    const getNetwork = async () => {

        const jsonValue = await AsyncStorage.getItem('default_Network')
        if (jsonValue != null) {
            const selectedNetwork = JSON.parse(jsonValue);
            // console.log(selectedNetwork, 'tbygby');
          setMyNetwork(selectedNetwork)
            
        }
    }
    const Tokens = {
        walletAddress: wallet.address,
        smartContract:smartContract,
        name: name,
        symbol: symbol,
        decimal: decimal,
        network: myNetwork,
        
    }

    useEffect(() => {
        getNetwork();
   //   console.log(wallet.address);
      
       
    }, [])

    const storeToken = async (Token:any) => {
        // console.log(Token);
        
  
        try {
            const value = await AsyncStorage.getItem('tokens')
            if(value!==null){
                 const  jsonValue = JSON.parse(value);
                jsonValue.push(Token)
                await AsyncStorage.setItem('tokens', JSON.stringify(jsonValue))
            }
            else{
                const empty_array = [];
                empty_array.push(Token);
                await AsyncStorage.setItem('tokens', JSON.stringify(empty_array));
            }  
         
        } catch (e) {
          console.log(e);
          
          
          
        }
      }

    return (
        <View style={{ flex: 1, backgroundColor: '#291443' }}>
            <TouchableOpacity style={{ marginTop: 44, flexDirection: 'row', alignItems: 'center', marginLeft:10 }} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/back.png')} />
                <Text style={{ color: '#fff', fontSize: 20,marginLeft:10 }}>Add Custom Token </Text>
            </TouchableOpacity>
            <View style={{ backgroundColor: '#37348E', marginTop: 18, padding: 15, flexDirection: "row" ,justifyContent:'space-between',height:60,alignItems:'center'}}>
                <Text style={{ color: '#fff' }}> Network </Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{ color: '#fff',}}>{myNetwork.networkName}</Text>
                <Image source={require('../assets/forward.png')} />
                </View>
            </View>
            <View style={{ flex: 1, padding: 20,marginTop: 28,  }}>
               
         <Text style={{ color: '#fff', fontSize: 16 }}>Smart Contract</Text>
        <View style={{ marginTop: 5,marginBottom:20, height: 54, width: '100%', borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.2)',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <TextInput style={{padding:20,width:'93%',color:'#fff',fontSize:18}} 
          placeholder='Search Contract'
          placeholderTextColor={'#959595'}
          onChangeText={(text:string)=> setSmartContract(text)}
          
    

      />
      <TouchableOpacity onPress={searchPressed}>
      <Image style={{marginRight:10}} source={require('../assets/searchIcon.png')} />
      </TouchableOpacity>
                
        </View>

                <Text style={{ color: '#fff', marginTop: 17, fontSize: 16 }}>Name</Text>
      <TextInput style={{ marginTop: 5, height: 54, width: '100%', borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.2)' ,padding:20,color:'#fff',fontSize:18}} 
          placeholder='Enter Token Name'
          placeholderTextColor={'#959595'}
          onChangeText={(text:string)=> setName(text)}
          value={name}
      />

<Text style={{ color: '#fff', marginTop: 17, fontSize: 16 }}>Symbol</Text>
      <TextInput style={{ marginTop: 5, height: 54, width: '100%', borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.2)',padding:20,color:'#fff',fontSize:18 }} 
     
          placeholder='Enter Symbol Name'
          placeholderTextColor={'#959595'}
          onChangeText={(text:string)=> setSymbol(text)}
          value={symbol}
      />


<Text style={{ color: '#fff', marginTop: 17, fontSize: 16 }}>Decimal</Text>
      <TextInput style={{ marginTop: 5, height: 54, width: '100%', borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.2)',padding:20,color:'#fff',fontSize:18 }} 
          placeholder='Enter Decimal Value'
          placeholderTextColor={'#959595'}
          onChangeText={(text:string)=> setDecimal(text)}
          value={decimal}
      />

<TouchableOpacity style={styles.BtnImport} onPress={() => storeToken(Tokens)}>
                    <Text style={{color:'#fff',fontSize:18}}>Add Token</Text>
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
        marginTop:32,
        
        
        
        
    },
 });

export default CustomToken