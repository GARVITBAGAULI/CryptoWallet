import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const BuyBitcoin = ({navigation}:any) => {
  return (
    <View style={{backgroundColor:'#291443',flex:1,padding:20}}>
     <TouchableOpacity style={{ marginTop: 24, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('Transaction')}>
                    <Image source={require('../assets/back.png')} />
                    <Text style={{ color: '#fff', fontSize: 20,marginLeft:10 }}>Buy</Text>
                </TouchableOpacity>

                <Text style={{ color: '#fff', fontSize: 16, marginTop: 40 }}>Select Currency</Text>
            <View style={{ borderColor: '#89549D', flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.2)', marginTop: 10, borderRadius: 10, height: 45 ,justifyContent:'space-between'}}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ marginLeft: 10, color: '#fff',fontSize:18 }} > Enter Amount</Text>
                </View>
                <View style={{ borderLeftWidth: 1, borderLeftColor: 'rgba(255,255,255,0.2)', alignItems: 'center', justifyContent: 'center',flexDirection:'row',width:'25%' }}>
                    <Image style={{ height:30,width:30}} source={require('../assets/BitIcon.png')} />
                    <Image style={{ marginLeft: 10 ,}} source={require('../assets/dropDown.png')} />
                </View>
            </View>

            <Text style={{ color: '#fff', fontSize: 16, marginTop: 23 }}>Amount to Paid</Text>
            <View style={{ borderColor: '#89549D', flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.2)', marginTop: 10, borderRadius: 10, height: 45 ,justifyContent:'space-between'}}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    
                </View>
                <View style={{ borderLeftWidth: 1, borderLeftColor: 'rgba(255,255,255,0.2)', alignItems: 'center', justifyContent: 'center',flexDirection:'row',width:'25%' }}>
                 <Text style={{fontSize:18,color:'#fff',marginLeft:5}}>USD</Text>
                    <Image style={{ marginLeft: 10 ,}} source={require('../assets/dropDown.png')} />
                </View>

            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
            <Text style={{color:'#fff'}}>Transaction Fee:</Text>
            <Text style={{color:'#fff'}}>0.00001356 BTC (0.12 USD)</Text>
            </View>
            <TouchableOpacity style={styles.BtnImport} >
                    <Text style={{color:'#fff',fontSize:18}}>Proceed to Payment Gateway</Text>
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
        marginTop:15,
        
        
        
        
    },
});


export default BuyBitcoin