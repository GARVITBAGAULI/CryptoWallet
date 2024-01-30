import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollViewComponent, ScrollView, Modal, Alert, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SendBitcoin = ({ navigation, route }: any) => {
    const token = route.params.token;
    const network = route.params.network;
    const wallet = route.params.wallet;
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [receiveModalVisible, setReceiveModalVisible] = useState(false);

    const [data, setData] = useState('');
    const RenderItem = ({ item, }: any) => (
        <TouchableOpacity onPress={() => {
            setRecipient(item.address);
            setReceiveModalVisible(false)
        }}>
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
            //console.log(dataArray, 'Garvit123');


            setData(dataArray);
        }
    }

    useEffect(() => {
        getAddress()
    }, [])

    useEffect(() => {
        //console.log(wallet,"garvitmmmm");
        console.log(token,"garvitBhai");
        
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: '#291443', padding: 20 }}>
            <View>
                <TouchableOpacity style={{ marginTop: 24, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/back.png')} />
                    <Text style={{ color: '#fff', fontSize: 20 }}>  Send Bitcoin </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {/* <Text style={{ color: '#fff', fontSize: 16, marginTop: 39 }}>Currency</Text>
            <View style={{ borderColor: '#89549D', alignItems: 'center', flexDirection: 'row', padding: 15, backgroundColor: 'rgba(255,255,255,0.2)', marginTop: 6, borderRadius: 10, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ height: 30, width: 30, marginRight: 10 }} source={require('../assets/BitIcon.png')} />
                    <Text style={{ marginRight: 10, color: '#B8B8B8', fontSize: 18 }} >Bitcoin</Text>
                </View>
                <Image source={require('../assets/dropDown.png')} />

            </View> */}

                <Text style={{ color: '#fff', fontSize: 16, marginTop: 23 }}>Recipient</Text>
                <View style={{ borderColor: '#89549D', flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.2)', marginTop: 10, borderRadius: 10, height: 60, justifyContent: 'space-between' }}>
                    <TextInput style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 10, color: "#fff", fontSize: 18, width: '75%' }}
                        placeholder="Paste or scan address"
                        placeholderTextColor="#B8B8B8"
                        onChangeText={(text: string) => setRecipient(text)}
                        value={recipient}
                    />
                    <View style={{ borderLeftWidth: 1, borderLeftColor: 'rgba(255,255,255,0.2)', alignItems: 'center', justifyContent: 'center', width: '20%', flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => setReceiveModalVisible(true)}  >
                            <Image style={{ marginLeft: 10 }} source={require('../assets/Creditcard.png')} />
                        </TouchableOpacity>
                        <Image style={{ marginHorizontal: 10 }} source={require('../assets/QrIcon.png')} />
                    </View>
                </View>

                <Text style={{ marginTop: 20, color: '#fff', fontSize: 16 }}>Amount</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
                    <TextInput style={{ backgroundColor: 'rgba(255,255,255,0.3)', flexDirection: 'row', width: '40%', height: 50, padding: 15, borderRadius: 10, fontSize: 18 }}
                        placeholder="-                BTC"
                        placeholderTextColor="#B8B8B8"
                        onChangeText={(text: string) => setAmount(text)}
                    />

                    <Image source={require('../assets/PathArrow.png')} />

                    <View style={{ backgroundColor: 'rgba(255,255,255,0.3)', flexDirection: 'row', justifyContent: 'space-between', width: '40%', height: 50, padding: 15, borderRadius: 10 }}>
                        <View><Text style={{ color: '#fff' }}>-</Text></View>
                        <View><Text style={{ color: '#B8B8B8', fontSize: 18 }}>USD</Text></View>
                    </View>

                </View>

                {/* <Text style={{ color: '#fff', marginTop: 20 }}>Description</Text>
            <TextInput
                style={{ backgroundColor: 'rgba(255,255,255,0.3)', height: 120, borderRadius: 10, marginTop: 5 }} /> */}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 }}>
                    <Text style={{ color: '#fff' }}>Transaction Fee:</Text>
                    <Text style={{ color: '#fff' }}>0.00001356 BTC (0.12 USD)</Text>
                </View>
                <TouchableOpacity style={styles.BtnImport} onPress={() => navigation.navigate('ConfirmSend', { token: token, to: recipient, amount: amount, wallet: wallet, network: network })}>
                    <Text style={{ color: '#fff', fontSize: 18 }}>Continue</Text>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={receiveModalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setReceiveModalVisible(!receiveModalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView1}>

                            <View style={{ flexDirection: 'row', justifyContent: 'center', borderBottomWidth: 1, padding: 15, alignItems: 'center', }}>
                                <Text style={{ color: '#000', fontSize: 19 }}>Wallet Address</Text>
                                <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }} onPress={() => setReceiveModalVisible(!receiveModalVisible)}>
                                    <Image source={require('../assets/close1.png')} />
                                </TouchableOpacity>

                            </View>



                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10, width: '100%' }}>
                                <FlatList

                                    data={data}
                                    renderItem={item => <RenderItem item={item.item} />}

                                />
                            </View>








                        </View>
                    </View>
                </Modal>
            </ScrollView>
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
        marginTop: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: 25

    },
    modalView1: {

        // height: 400,
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 20,
        justifyContent: 'space-between',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginTop: 20,
        justifyContent: 'space-between',

        borderRadius: 20,
        width: '100%',

    },
});

export default SendBitcoin