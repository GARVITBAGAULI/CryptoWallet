import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const WalletList = ({navigation}:any) => {
    const[data,setData]= useState([]);
    const RenderItem = ({ item, }: any) => (
        <TouchableOpacity onPress={() => navigation.navigate('MyWalletScreen',{wallet: item })}>
            <View style={styles.item} >
                <Text>{item.walletName}</Text>
                    </View>

                    



              
           
        </TouchableOpacity>
    );

      const getData = async () => {

        const jsonValue = await AsyncStorage.getItem('walletData')
        if (jsonValue != null) {
            const dataArray = JSON.parse(jsonValue);
            // console.log(dataArray, 'Garvit123');
             
             
           setData(dataArray);
        }
    }

    useEffect( () => {
        getData();
    },[])

  return (
    <View style={{flex:1,padding:20,backgroundColor:"#3E275A"}}>
      <Text style={{fontSize:24,fontWeight:"700",marginTop:20}}>Wallet List</Text>
      <FlatList

data={data}
renderItem={item => <RenderItem item={item.item} />}
// keyExtractor={item => item.id}
/>
    </View>
  )
}

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginTop: 20,
        justifyContent:'space-between',
        flexDirection: 'row',
        borderRadius: 20,
        width: '100%',

    },
});

export default WalletList