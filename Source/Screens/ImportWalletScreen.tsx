import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const ImportWalletScreen = ({navigation}:any) => {
  return (
    <View style={{backgroundColor:'#291443',flex:1,padding:20}}>
              <TouchableOpacity style={{marginTop:24,flexDirection:'row',alignItems:'center'}} onPress={() => navigation.navigate('CreateWallet')}>
                  <Image source={require('../assets/back.png')} />
                    <Text style={{color:'#fff',fontSize:20,marginLeft:5}}>Import Wallet</Text>
                
                </TouchableOpacity>
                <View style={{alignItems:"center",justifyContent:'center'}}>
                <Text style={{fontSize:15,color:'#fff',marginTop:70}}>Import existing wallet by</Text>
                <TouchableOpacity style={styles.BtnImport} onPress={() => navigation.navigate('PrivateKey')}>
                    <Text style={{color:'#fff',fontSize:18}}>Private Key</Text>
                </TouchableOpacity>
                <Text style={{fontSize:15,color:'#fff',marginTop:20}}>or</Text>
                <TouchableOpacity style={styles.BtnMnemonic} onPress={() => navigation.navigate('MnemonicsPhrase')}>
                    <Text style={{color:'#976AD8',fontSize:18}}>Mnemonic Phrase</Text>
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
        marginTop:30,
        
        
        
        
    },
    BtnMnemonic: {
        backgroundColor: '#fff',
        height:55,
        width: "100%",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
        
        
        
        
    },

})

export default ImportWalletScreen