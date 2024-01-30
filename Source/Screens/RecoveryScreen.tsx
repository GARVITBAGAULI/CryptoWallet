import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Wallet } from 'ethers';
import Clipboard from '@react-native-clipboard/clipboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
// const DATA = ['chat', 'frog', 'jacket', 'shoot', 'history', 'between', 'flock', 'gift', 'device', 'admit', 'toss', 'modify'
// ];
const RecoveryScreen = ({route, navigation }: any) => {
   
    const wallet = route.params.wallet;
    const [mnemonic,setMnemonic] = useState([]);
    // const[data,setData] = useState([]);
    
 
      
    
    
     
   
    const RenderItem = (item: any,index:any) => {
        return (
            <View key={index} style={{ justifyContent: 'center', paddingHorizontal: 15, backgroundColor: '#5F30EB', borderRadius: 6, height: 34, marginRight: 15, marginBottom: 18 }}>
                <Text style={{ color: '#E2E2E2', fontSize: 16 }}>{item}</Text>
            </View>
        )
    }
    const copyToClipboard = () => {
        Clipboard.setString(wallet.mnemonic);
      };
    const onNext = () => {
        navigation.navigate("VerifyMnemonics",{wallet: wallet});
    }
useEffect(()=>{
    //console.log(wallet,'@#$%%%%%%');
    setMnemonic(wallet.mnemonic.split(' '));
    // storeData(wallet);
  
  // console.log(data);
   
},[])
  
    return (
        <View style={{ backgroundColor: '#291443', flex: 1, padding: 20, justifyContent: "space-between" }}>
            <View >
                <TouchableOpacity style={{ marginTop:24,flexDirection:'row',alignItems:'center' }} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/back.png')} />
                    <Text style={{ color: '#fff', fontSize: 20,marginLeft:10 }}>Recovery Phrase </Text>
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 42 }} >
                    <Text style={{ fontSize: 19, color: '#fff'}}>Your recovery pharse</Text>
                    <Text style={{ fontSize: 15, textAlign: 'center', color: '#fff', marginTop: 12 }}>Write down or copy these words in the right order and save them somewhere safe</Text>

                </View>
                <View style={styles.mnemonics}>
                    {mnemonic.map((item,index) => RenderItem(item,index))}
                </View>
                <View style={{alignItems:'center',marginTop:33}}>
                    <TouchableOpacity style={styles.Btncopy} onPress={() => copyToClipboard()}  >
                        <Image source={require('../assets/copyIcon.png')} />
                        <Text style={{ color: '#3E3E3E', fontSize: 18, marginLeft: 10 }}>Copy all words</Text>
                    </TouchableOpacity>
                </View>
            </View>




            <View>
                <TouchableOpacity style={styles.BtnImport} onPress={() => onNext() }  >

                    <Text style={{ color: '#fff', fontSize: 18 }}>Next</Text>
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
    Btncopy: {
        backgroundColor: '#fff',
        height: 49,
        
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        flexDirection: 'row',
        paddingHorizontal:20
    },
    mnemonics: {
        // backgroundColor:'#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 25

    }
});

export default RecoveryScreen