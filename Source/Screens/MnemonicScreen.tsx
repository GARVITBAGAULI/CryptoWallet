import { View, Text, TouchableOpacity, TextInputBase, TextInput, StyleSheet, Image } from 'react-native'
import React from 'react'

const MnemonicsScreen = ({ navigation }: any) => {
    return (
        <View style={{ backgroundColor: '#291443', flex: 1, padding: 20 }}>
            <TouchableOpacity style={{ flexDirection:'row',alignItems:'center',marginTop:24 }} onPress={() => navigation.navigate('ImportWallet')}>
                <Image source={require('../assets/back.png')} />
                <Text style={{ color: '#fff', fontSize: 20,marginLeft:10 }}>By Mnemonic Phrase </Text>
            </TouchableOpacity>
        
                <Text style={{color:'#fff',marginTop:42,fontSize:16}}>Please enter mnemonic phrases and separated them by a space</Text>

                <TextInput  style={{marginTop:13,height:150,width:'100%',borderRadius:10, backgroundColor:'rgba(255,255,255,0.2)'}} />
    
                <TouchableOpacity style={styles.BtnImport} >
                    <Text style={{color:'#fff',fontSize:18}}>Start Import</Text>
                </TouchableOpacity>
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
        marginTop:34,
        
        
        
        
    },
});

export default MnemonicsScreen