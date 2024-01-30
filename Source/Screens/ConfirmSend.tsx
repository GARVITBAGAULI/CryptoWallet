import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SendTokens } from '../ethers/sendFunction';
import { SendEth } from '../ethers/sendEth';

const ConfirmSend = ({ navigation, route }: any) => {
    const recipientAddress = route.params.to;
    const token = route.params.token;
    const amount = route.params.amount;
    const network = route.params .network;
 const wallet = route.params.wallet;


    function ConfirmPressed(){
        const payloadSpecific = {
            recipientAddress: recipientAddress,
            amount: amount,
            ownerKey: wallet.privateKey,
            address:wallet.address,
            network: network,
            token:token
        }
       // console.log(payloadSpecific,"iuwedghdjn");
         if(token.name=="Matic Token"){
             SendEth(payloadSpecific);
         }else{
             SendTokens(payloadSpecific,navigation)
            };
        
      
        
    }
    useEffect(() => {
       // console.log(recipientAddress, "owejnkheloooooo");
//console.log(token.address);


    }, [])

    return (

        <View style={{ flex: 1, backgroundColor: '#291443', padding: 20 }}>
            <TouchableOpacity style={{ marginTop: 24, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/back.png')} />
                <Text style={{ color: '#fff', fontSize: 20, marginLeft: 10 }}>Confirm Send </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, color: '#fff', marginTop: 34 }}>Transaction Detail</Text>
            <View style={{ backgroundColor: 'rgba(255,255,255,0.3)', marginTop: 10, padding: 15, borderRadius: 10 }}>
                <Text style={{ color: '#fff', fontSize: 15 }}>Currency</Text>
                <Text style={{ color: '#fff', fontSize: 15, marginTop: 5 }}>{token.name}</Text>
            </View>

            <View style={{ backgroundColor: 'rgba(255,255,255,0.3)', marginTop: 5, padding: 15, borderRadius: 10 }}>
                <Text style={{ color: '#fff', fontSize: 15 }}>To</Text>
                <Text style={{ color: '#fff', fontSize: 15, marginTop: 5 }}>{recipientAddress}</Text>
            </View>

            <View style={{ backgroundColor: 'rgba(255,255,255,0.3)', marginTop: 5, padding: 15, borderRadius: 10 }}>
                <Text style={{ color: '#fff', fontSize: 15 }}>Transaction Fee</Text>
                <Text style={{ color: '#fff', fontSize: 15, marginTop: 5 }}>0.00001356 BTC (0.12 USD)</Text>
            </View>

            <View style={{ backgroundColor: 'rgba(255,255,255,0.3)', marginTop: 5, padding: 15, borderRadius: 10 }}>
                <Text style={{ color: '#fff', fontSize: 15 }}>Total</Text>
                <Text style={{ color: '#fff', fontSize: 15, marginTop: 5 }}>{amount}  {token.symbol}</Text>
            </View>

            <TouchableOpacity style={styles.BtnImport} onPress={ConfirmPressed}>
                <Text style={{ color: '#fff', fontSize: 18 }}>Confirm & Send</Text>
            </TouchableOpacity>


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
        marginTop: 60,




    },
});

export default ConfirmSend