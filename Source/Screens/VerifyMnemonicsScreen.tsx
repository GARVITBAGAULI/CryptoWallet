import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


// const DATA = ['chat', 'frog', 'jacket', 'shoot', 'history', 'between', 'flock', 'gift', 'device', 'admit', 'toss', 'modify'
// ];



const VerifyMnemonicsScreen = ({ navigation, route, }: any) => {
  const wallet = route.params.wallet;
  const [jumbledMnemonics, setJumbledMnemonics] = useState([]);
  const [rearrangedMnemonic, setRearrangedMnemonic] = useState([]);
  const [originalMnemonic,setOriginalMnemonic] = useState([]);
  const storeData = async (wallet:any) => {
  
    try {
        const value = await AsyncStorage.getItem('walletData')
        if(value!==null){
             const  jsonValue = JSON.parse(value);
            jsonValue.push(wallet)
            await AsyncStorage.setItem('walletData', JSON.stringify(jsonValue))
        }
        else{
            const empty_array = [];
            empty_array.push(wallet);
            await AsyncStorage.setItem('walletData', JSON.stringify(empty_array));
        }  
     
    } catch (e) {
      console.log(e);
      
      
      
    }
  }

  

  

  function addMnemonicToInput(item:any,index:any){
    // console.log(item);
    
    const addedArray = rearrangedMnemonic.concat(item);
    setRearrangedMnemonic(addedArray);
    // var idx = jumbledMnemonics.indexOf(item);
    jumbledMnemonics.splice(index,1)
   // rearrangedMnemonic.splice(index,1)
  }
  function removeMnemonicToInput(item:any,index:any){
    // console.log(item);
    rearrangedMnemonic.splice(index,1)
    const removeArray = jumbledMnemonics.concat(item);
    setJumbledMnemonics(removeArray)
    // var idx = jumbledMnemonics.indexOf(item);
   
   
  }
  
  function verify(){
    console.log(originalMnemonic,'original');
    console.log(rearrangedMnemonic,'rearranged');
    
    if(originalMnemonic.join() == rearrangedMnemonic.join()) {
      storeData(wallet);
     
      navigation.navigate("BottomTab");
    }
    else{
     
      Alert.alert("Error",'Please enter correct mnemonics',[{text: 'OK', onPress: () => console.log('OK Pressed')}])
    }
  }



  
  const RenderItem = (item: any,index:any) => {
    return (
      <TouchableOpacity 
      key={index}
      onPress={()=>addMnemonicToInput(item,index)}
      
      style={{ justifyContent: 'center', paddingHorizontal: 15, backgroundColor: '#5F30EB', borderRadius: 6, height: 34, marginRight: 15, marginBottom: 18 }}

      >
        <Text style={{ color: '#E2E2E2', fontSize: 16 }}>{item}</Text>
      </TouchableOpacity>
    )
  }
  const RenderInput = (item: any,index:any) => {
    return (
      <TouchableOpacity 
      key={index}
      onPress={() => removeMnemonicToInput(item,index)}
      style={{ justifyContent: 'center', paddingHorizontal: 15, backgroundColor: '#5F30EB', borderRadius: 6, height: 34, marginRight: 15, marginBottom: 18 }} >
        <Text style={{ color: '#E2E2E2', fontSize: 16 }}>{item}</Text>
      </TouchableOpacity>
    )
  }
  function shuffle(array: []) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
  useEffect(() => {
   // console.log(originalMnemonic, '@#$%%%%%%');
    setOriginalMnemonic(wallet.mnemonic.split(' '));
    const shuffled = shuffle(wallet.mnemonic.split(' '));
   
    setJumbledMnemonics(shuffled);
  }, [])

  return (
    <View style={{ backgroundColor: '#291443', flex: 1, padding: 20, justifyContent: "space-between" }}>
      <View >
        <TouchableOpacity style={{ marginTop: 24, alignItems: 'center', flexDirection: 'row' }} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/back.png')} />
          <Text style={{ color: '#fff', fontSize: 20, marginLeft: 10 }}>Verify Mnemonics </Text>
        </TouchableOpacity>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 42 }} >
          <Text style={{ fontSize: 19, color: '#fff', }}>Verify you recovery phrase</Text>
          <Text style={{ fontSize: 15, textAlign: 'center', color: '#fff', marginTop: 12 }}>Please click the mnemonics by original order</Text>
          {/* <View  style={{marginTop:25,height:99,width:'100%',borderRadius:10, backgroundColor:'rgba(255,255,255,0.2)'}}> 
      <Text>{rearrangedMnemonic}</Text>
        </View> */}
          <View style={styles.input}  >
            {rearrangedMnemonic.map((item,index) => RenderInput(item,index))}
          </View>
          <View style={styles.mnemonics}  >
            {jumbledMnemonics.map((item,index) => RenderItem(item,index))}
          </View>
        </View>
      </View>
      <View>

      </View>
      <View>
        <TouchableOpacity style={styles.BtnImport}  onPress={verify} >
          <Text style={{ color: '#fff', fontSize: 18 }}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  BtnImport: {
    backgroundColor: '#A12288',
    height: 55,
    width: "100%",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,

  },
  mnemonics: {
    // backgroundColor:'#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 25

  },
  input: {
    // backgroundColor:'#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 25,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    padding: 10,
    width: '100%'


  }
});

export default VerifyMnemonicsScreen