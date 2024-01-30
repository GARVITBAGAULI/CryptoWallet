import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AddressBook = ({ navigation }: any) => {
    const [data, setData] = useState('');
    const RenderItem = ({ item, }: any) => (
        <TouchableOpacity >
            <View style={styles.item} >
                <Text style={{ color: "#000" }} >{item.name}</Text>
                <Text>{item.address}</Text>
            </View>
        </TouchableOpacity>
    );
    const getAddress = async () => {
        const jsonValue = await AsyncStorage.getItem('AddressData')
        if (jsonValue != null) {
            const dataArray = JSON.parse(jsonValue);
            console.log(dataArray, 'Garvit123');


            setData(dataArray);
        }
    }

    useEffect(() => {
        getAddress()
    }, [])
    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: "#3E275A" }}>
            <TouchableOpacity style={{ marginTop: 24, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/back.png')} />
                <Text style={{ color: '#fff', fontSize: 20 }}> Address Book</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 30, color: "#fff" }}>Address Book</Text>
                <TouchableOpacity onPress={() => navigation.navigate("addAddress")} >
                    <Image style={{ marginLeft: 10 }} source={require('../assets/Creditcard.png')} />
                </TouchableOpacity>
            </View>

            <FlatList

                data={data}
                renderItem={item => <RenderItem item={item.item} />}

            />
        </View>
    )
}

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginTop: 20,
        justifyContent: 'space-between',
       
        borderRadius: 20,
        width: '100%',

    },

});

export default AddressBook

