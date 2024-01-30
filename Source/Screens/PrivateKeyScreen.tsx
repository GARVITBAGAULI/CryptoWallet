import { View, Text, TouchableOpacity, TextInputBase, TextInput, StyleSheet, Image } from 'react-native'
import React from 'react'

const PrivateKeyScreen = ({ navigation }: any) => {
    return (
        <View style={{ backgroundColor: '#291443', flex: 1, padding: 20 }}>
            <TouchableOpacity style={{ marginTop: 24,flexDirection:'row',alignItems:'center' }} onPress={() => navigation.navigate('ImportWallet')}>
            <Image source={require('../assets/back.png')} />
                <Text style={{ color: '#fff', fontSize: 20,marginLeft:5 }}>By Private Key </Text>
            </TouchableOpacity>
        
                <Text style={{color:'#fff',marginTop:50,fontSize:16}}>Enter Private Key</Text>

                <TextInput  style={{marginTop:5,height:150,width:'100%',borderRadius:10, backgroundColor:'rgba(255,255,255,0.2)'}} />
    
                <TouchableOpacity style={styles.BtnImport} onPress={() => navigation.navigate('PrivateKey')}>
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
        marginTop:35,
        
        
        
        
    },
});

export default PrivateKeyScreen