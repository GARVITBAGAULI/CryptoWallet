import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Modal, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import QRCode from 'react-native-qrcode-svg';

const DATA = [

    {
        icon: require('../assets/rightArrow.png'),
        transaction: 'Sent Bitcoin',
        status: 'Pending',
        usd: '-0.00142263 BTC',
        net: '-$12.50',
        statusIcon: require('../assets/Yellow.png'),
        forward: require('../assets/forward.png'),
    },

    {
        icon: require('../assets/downArrow.png'),
        transaction: 'Received Bitcoin',
        status: 'Success',
        usd: '-0.09263 BTC',
        net: '-$12.50',
        statusIcon: require('../assets/green.png'),
        forward: require('../assets/forward.png'),
    },
    {
        icon: require('../assets/rightArrow.png'),
        transaction: 'Sent Bitcoin',
        status: 'Pending',
        usd: '-0.00142263 BTC',
        net: '-$12.50',
        statusIcon: require('../assets/Yellow.png'),
        forward: require('../assets/forward.png'),
    },
    {
        icon: require('../assets/rightArrow.png'),
        transaction: 'Sent Bitcoin',
        status: 'Pending',
        usd: '-0.00142263 BTC',
        net: '-$12.50',
        statusIcon: require('../assets/Yellow.png'),
        forward: require('../assets/forward.png'),
    },
    {
        icon: require('../assets/rightArrow.png'),
        transaction: 'Sent Bitcoin',
        status: 'Pending',
        usd: '-0.00142263 BTC',
        net: '-$12.50',
        statusIcon: require('../assets/Yellow.png'),
        forward: require('../assets/forward.png'),
    },
    {
        icon: require('../assets/rightArrow.png'),
        transaction: 'Sent Bitcoin',
        status: 'Pending',
        usd: '-0.00142263 BTC',
        net: '-$12.50',
        statusIcon: require('../assets/Yellow.png'),
        forward: require('../assets/forward.png'),
    },


];



const RenderItem = ({ item }: any) => (
    <View style={styles.item}>
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Image style={{ marginRight: 10 }} source={item.icon} />
                <Text style={{ color: '#fff' }}>{item.transaction}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ marginLeft: 20 }} source={item.statusIcon} />
                <Text style={{ marginLeft: 10, color: "#959595" }}>{item.status}</Text>
            </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
            <View >
                <Text style={{ color: '#fff' }}> {item.usd}</Text>
                <Text style={{ marginLeft: 50, marginTop: 5, color: '#959595' }}>{item.net}</Text>
            </View>

            <Image style={{ marginLeft: 10, marginTop: 10 }} source={item.forward} />
        </View>


    </View>
);

const TransactionWallet = ({ navigation,route }: any) => {
    const [receiveModalVisible, setReceiveModalVisible] = useState(false);
 const token = route.params.token;
 const network = route.params .network;
 const wallet = route.params.wallet;

 useEffect(() =>{
//console.log(wallet,'hello');

 },[])
    return (
        <View style={{ backgroundColor: "#291443", flex: 1, padding: 20, position:'relative'}}>

            <TouchableOpacity style={{ marginTop: 24, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/back.png')} />
                <Text style={{ color: '#fff', fontSize: 20, marginLeft: 10 }}>Bitcoin</Text>
            </TouchableOpacity>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
                <Image source={require('../assets/BitIcon.png')} />
                <Text style={{ fontSize: 39, color: '#fff', marginTop: 6 }}>0.5 BTC</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30, backgroundColor: '#89549D', padding: 20, borderRadius: 30 }}>
                <TouchableOpacity >
                    <Text style={{ color: '#fff' }}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{ color: '#fff' }}>Sent</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{ color: '#fff' }}>Received</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{ color: '#fff' }}>Deposit</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 32, }}>
                <FlatList
                    data={DATA}
                    renderItem={item => <RenderItem item={item.item} />}
                // keyExtractor={item => item.id}
                />
            </View>
            <View style={{width:'100%', position: 'absolute',bottom:30,left:'20%'}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 10, borderRadius: 100, backgroundColor: '#89549D', width: '70%', alignItems: 'center' }}>
                    <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => {
                        navigation.navigate('SendBitcoin',{token:token,wallet:wallet,network:network});

                    }}>
                        <Image source={require('../assets/arrowleft.png')} />
                        <Text style={{ color: '#fff' }}>Sent</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setReceiveModalVisible(true)} >
                        <Image source={require('../assets/arrowDown.png')} />
                        <Text style={{ color: '#fff' }}>Received</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('BuyBitcoin')}>
                        <Image source={require('../assets/wallet-outline.png')} />
                        <Text style={{ color: '#fff', marginTop: 5 }}>Buy</Text>
                    </TouchableOpacity>
                </View>
            </View>


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

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, padding: 15, alignItems: 'center', }}>
                            <Text style={{ color: '#000', fontSize: 19, marginLeft: 100 }}>Wallet Address</Text>
                            <TouchableOpacity onPress={() => setReceiveModalVisible(!receiveModalVisible)}>
                                <Image source={require('../assets/close1.png')} />
                            </TouchableOpacity>

                        </View>

                        <View style={{ padding: 20, alignItems: 'center' }}>
                            <QRCode
                                //QR code value
                                value={'9119748016'}
                                //size of QR Code
                                size={200}
                                //Color of the QR Code (Optional)
                                color="black"
                                //Background Color of the QR Code (Optional)
                                backgroundColor="white"
                            />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text>1GLrWy2GuZi8rg7nT6dAJrW8kxJZZ6dHks</Text>
                            <Image source={require("../assets/copyIcon.png")} />
                        </View>
                        <View >
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 20, justifyContent: 'center' }}>
                                <Image source={require('../assets/share.png')} />
                                <Text style={{ marginLeft: 10, }}>Share this</Text>
                            </TouchableOpacity>
                        </View>








                    </View>
                </View>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#3E275A',
        padding: 15,
        marginTop: 5,
justifyContent:'space-between',
        flexDirection: 'row',
        borderRadius: 20,
        width: '100%',

    },
    modalView1: {

        height: 400,
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        justifyContent: 'space-between',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'

    },
});
export default TransactionWallet