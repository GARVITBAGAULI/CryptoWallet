import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddAddress = ({navigation}:any) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    
    const AddressValue = {
        name:name,
        address:address,
    }
    const storeAddress = async (Address:any) => {
  
        try {
            const value = await AsyncStorage.getItem('AddressData')
            if(value!==null){
                 const  jsonValue = JSON.parse(value);
                jsonValue.push(Address)
                await AsyncStorage.setItem('AddressData', JSON.stringify(jsonValue))
            }
            else{
                const empty_array = [];
                empty_array.push(Address);
                await AsyncStorage.setItem('AddressData', JSON.stringify(empty_array));
            }  
         
        } catch (e) {
          console.log(e);
          
          
          
        }
      }
      function onClick(){
            if(name=='' && address==''){
                Alert.alert("Error",'Please enter Recipient Name and Address',[{text: 'OK', onPress: () => console.log('OK Pressed')}])
            }
            else{
              //  console.log(AddressValue);
                storeAddress(AddressValue)
            }
      }
    

    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: "#3E275A" ,justifyContent:'space-between'}}>
            <View>
                <TouchableOpacity style={{ marginTop: 24, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/back.png')} />
                    <Text style={{ color: '#fff', fontSize: 20 }}>  Add Address</Text>
                </TouchableOpacity>

                <Text style={{ color: "#fff", marginTop: 40 }}>Name</Text>
                <TextInput style={{color:"#fff", marginTop: 5, backgroundColor: 'rgba(255,255,255,0.3)', flexDirection: 'row', width: '100%', height: 50, padding: 15, borderRadius: 10, fontSize: 18 }}
                    placeholder="Enter Recipient Name"
                    placeholderTextColor="#B8B8B8"
                    onChangeText={(text: string) => setName(text)}
                />
                <Text style={{ color: "#fff", marginTop: 20 }} >Address</Text>
                <TextInput style={{color:"#fff", marginTop: 5, backgroundColor: 'rgba(255,255,255,0.3)', flexDirection: 'row', width: '100%', height: 50, padding: 15, borderRadius: 10, fontSize: 18 }}
                    placeholder="Enter Recipient Address"
                    placeholderTextColor="#B8B8B8"
                    onChangeText={(text: string) => setAddress(text)}
                />
            </View>
            <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.BtnImport}   onPress={onClick}
        >
                <Text style={{ color: '#fff', fontSize: 18 }}>Add Address</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    BtnImport: {
        backgroundColor: '#A12288',
        height: 55,
        width: "50%",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
 

});
export default AddAddress

