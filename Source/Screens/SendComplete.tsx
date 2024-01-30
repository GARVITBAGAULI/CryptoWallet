import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image, Modal, Alert } from 'react-native'
import React, { useState } from 'react'

const SendComplete = ({ navigation }: any) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (

        <View style={{ flex: 1, }}>
            <ImageBackground style={{ flex: 1 ,padding:20,justifyContent:'space-between'}} source={require('../assets/confirm.png')}>

                <TouchableOpacity style={{ marginTop: 24, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('ConfirmSend')}>
                    <Image source={require('../assets/back.png')} />
                    <Text style={{ color: '#fff', fontSize: 20 }}> Send Bitcoin</Text>
                </TouchableOpacity>
                <View style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: '#fff',marginTop:120, fontWeight: '600' }}>Your transaction is on the way!</Text>
                    <Text style={{ fontSize: 18, color: '#BFBFBF', textAlign: 'center', marginTop: 10 }}>You sent 0.00117 BTC($10.00) to an external address</Text>
                    <TouchableOpacity style={styles.BtnImport} onPress={() => setModalVisible(!modalVisible)} >
                        <Text style={{ color: '#fff', fontSize: 16 }}>View Details</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <ImageBackground style={{ padding:20,height: 350 }} source={require('../assets/Modal2.png')}>
                                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', }}>
                                    <Text style={{ fontSize: 15, color: '#fff' }}>Sent Bitcoin </Text>
                                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                        <Image source={require('../assets/CloseModal.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                                    <Image source={require('../assets/modalicon.png')} />
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                                    <Text style={{ color: '#fff', fontSize: 19 }}>-0.00142263 BTC</Text>
                                    <Text style={{ color: '#fff', fontSize: 15 }}>-$12.50</Text>
                                </View>

                                <View style={{ justifyContent: 'center',marginTop:15 }}>
                                    <View style={{ backgroundColor: '#3E275A', padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' ,width:'100%'}}>
                                        <Text style={{ color: '#fff', fontSize: 11 }}>To</Text>
                                        <Text style={{ color: '#fff', fontSize: 11, }}>1GLrWy2GuZi8rg7nT6dAJrW8kxJZZ6dHks</Text>
                                    </View>

                                    <View style={{ backgroundColor: '#3E275A', marginTop: 5, padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',width:'100%' }}>
                                        <Text style={{ color: '#fff', fontSize: 11 }}>Transaction Fee</Text>
                                        <Text style={{ color: '#fff', fontSize: 11, }}>0.00001356 BTC (0.12 USD)</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:15 }} >
                                    <Text style={{color:'#fff'}}>2/13/2021</Text>
                                    <Text style={{color:'#fff'}}>11:54AM</Text>
                                    <TouchableOpacity style={{ backgroundColor: 'yellow', borderRadius: 10,padding:2 }}>
                                        <Text>Pending</Text>

                                    </TouchableOpacity>


                                </View>

                            </ImageBackground>



                        </View>
                    </View>
                </Modal>

            </ImageBackground>

        </View>
    )
}
const styles = StyleSheet.create({

    BtnImport: {
        backgroundColor: '#A12288',
        height: 55,
        width: 212,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,

    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',

    },
    modalView: {
        width: 328,
        height:342,
        borderRadius: 30,


        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },
});

export default SendComplete