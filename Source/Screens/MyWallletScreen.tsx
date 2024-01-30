import { View, Text, ImageBackgroundBase, Image, StyleSheet, TextInput, TouchableOpacity, FlatList, Alert, Modal, ActivityIndicator, Clipboard, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ethers } from 'ethers';
import { daiAbi } from '../ethers/integration'
// const DATA = [
//     {
//         image: require('../assets/BitIcon.png'),
//         token: 'Bitcoin',
//         balance: '0.5 BTC',
//         usd: '$42,285.50',
//         net: '-$399',
//         percent: '-4.43%',
//         forward: require('../assets/forward.png'),
//     },
//     {
//         image: require('../assets/etherIcon.png'),
//         token: 'Etherium',
//         balance: '0.23 ETH',
//         usd: '$2,345.40',
//         net: '--$129',
//         percent: '+7.16%',
//         forward: require('../assets/forward.png'),
//     },
//     {
//         image: require('../assets/tether.png'),
//         token: 'Tether',
//         balance: '0.5 USDT',
//         usd: '$1,333.50',
//         net: '-$399',
//         percent: '-4.43%',
//         forward: require('../assets/forward.png'),
//     },
// ];

interface NetworkType{
    networkName: string,
    newRpcUrl: string,
    chainId: Number,
    currencySymbol: string,
    blockExplorerUrl: string

}




const MyWallletScreen = ({ navigation,route }: any) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [receiveModalVisible, setReceiveModalVisible] = useState(false);
    const [myNetwork,setMyNetwork] = useState<NetworkType>(Object);
    const myWallet = route.params.wallet;
    const[token,setToken] = useState([]);
    const[totalBalance,setTotalBalance]=useState('');
  
    const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com/');
    const getBalance = async()=>{
        const Totalbalance = await provider.getBalance(myWallet.address);
       // console.log(Number(Totalbalance),"garvitBrooooo");
        setTotalBalance((Number(Totalbalance)/Math.pow(10,18)).toString());
    }
    
   
    const RenderItem = ({ item, }: any) => {
        const [individualBalance,setIndividualBalance] = useState('');
        const daiContract = new ethers.Contract(item.smartContract, daiAbi, provider);
        const getBalance=async()=>{
            const balance = await daiContract.balanceOf(myWallet.address);
           // console.log(Number(balance));
            setIndividualBalance((Number(balance)/Math.pow(10,18)).toString());
        }
            
        useEffect(()=>{
    //   console.log(Number(balance),"iqnibru3wbjnaij");
    //   console.log(item);
      getBalance();
      
            
        },[]);
        
       
        return (
        <TouchableOpacity onPress={() => navigation.navigate('Transaction',{token:item,wallet:myWallet,network:myNetwork})}>
            <View style={styles.item} >
                <View style={{ flexDirection: "row",}}>
                    <View style={{ marginRight: 20, backgroundColor: '#000', padding: 5, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ height: 40, width: 40 }} source={require('../assets/BitIcon.png')} />
                    </View>
                    <View>
                        <Text style={styles.title}>{item.name}</Text>
                       
                
               <View style={{flexDirection:"row"}}>
                  {individualBalance == ''?<ActivityIndicator />:<Text style={styles.title}>{individualBalance}  </Text>} 
                   
                   
                    
                <Text style={styles.title}>{item.symbol}</Text>
                </View>
                
                
                      
                    
                       
                       
                        
                    </View>
                </View>
                <View style={{ flexDirection: 'row',alignItems:'center' ,}} >
                    <View>
                        <Text style={styles.title}>$2,345.40</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{color:'#D7BFF5'}} >-$399</Text>
                            <Text style={{ color: '#CE5454',marginLeft:5  }}>-4.43%</Text>
                            
                        </View>
                    </View>

                    <Image style={{marginHorizontal:5}} source={require('../assets/forward.png')} />




                </View>
            </View>
        </TouchableOpacity>
    );
}


    // const getNetwork = async () => {

    //     const jsonValue = await AsyncStorage.getItem('default_Network')
    //     if (jsonValue != null) {
    //         const selectedNetwork = JSON.parse(jsonValue);
    //      setMyNetwork(selectedNetwork);
    //         //  console.log(selectedNetwork, 'tbygby');
    //     }
    // }
    const getTokenAndNetwork = async () => {

        const network = await AsyncStorage.getItem('default_Network')
        if (network != null) {
            const selectedNetwork = JSON.parse(network);
           // console.log(selectedNetwork.chainId,'Froom unction');
            
         setMyNetwork(selectedNetwork);

        const jsonValue = await AsyncStorage.getItem('tokens')
        if (jsonValue != null) {
            const token = JSON.parse(jsonValue);
           // console.log(token,'total');


            
            const filteredToken =token.filter((a:any)=>(a.walletAddress==myWallet.address)  && (a.network.chainId == selectedNetwork.chainId))
           // console.log(filteredToken,'filtered');
            
           setToken(filteredToken);
            //console.log(token, 'blockCoders1234');
           
            
        }
    }
    }

    

  
   
    function onRefresh(){
        getTokenAndNetwork();
    }


    const copyToClipboard = () => {
        Clipboard.setString(myWallet.address);
      };
    // const balance = token.

    useEffect(() => {
        // getNetwork();
       getTokenAndNetwork();
    //    console.log(myNetwork.chainId,'helooooooo');
    //   console.log("ijqodnewiubcn....");
      // console.log(myWallet,'hello');
       getBalance();
       
    }, [])

    return (
        <View style={{ backgroundColor: '#291443', flex: 1 }}>
            <View style={{ flexDirection: 'row', marginTop: 54, justifyContent: 'space-between', marginRight: 10 }}>
                <View style={{ padding: 5, flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.3)', height: 40, alignItems: "center", borderBottomRightRadius: 40, borderTopRightRadius: 40 }}>
                    <View style={{ marginHorizontal: 20 }}>
                        <Text style={{ color: '#fff' }}>{myWallet.walletName}</Text>
                        <Text style={{ color: '#fff' }}>{myNetwork.networkName}</Text>
                    </View>

                    <TouchableOpacity onPress={()=>navigation.goBack()} style={{ backgroundColor: '#000', height: 30, width: 30, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/walletArrow.png')}

                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <TouchableOpacity onPress={() => navigation.navigate('AddressBook')}  >
                    <Image style={{ marginLeft: 10}} source={require('../assets/Creditcard.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('CreateWallet')}>
                        <Image style={{ marginLeft: 15 }} source={require('../assets/wallet-outline.png')} />
                    </TouchableOpacity>

                   <TouchableOpacity onPress={() => navigation.navigate('Network',{onGoBack:()=>onRefresh()})} >
                   <Image style={{ marginLeft: 15 }} source={require('../assets/line-scan.png')} />
                   </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AddToken',{wallet: myWallet})} >
                        <Image style={{ marginLeft: 15 }} source={require('../assets/plus-circle.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 46 }}>
                <Text style={{ fontSize: 14, color: '#fff' }}>Current Balance</Text>
                <Text style={{ color: '#fff', fontSize: 40, marginTop: 5 }}> $  {Number(totalBalance).toFixed(6)}</Text>
                <View style={{ flexDirection: 'row', borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.3)',padding:3,height:30}}>
                    <Text style={{ marginRight: 10,width:'40%' }}>{myWallet.address}</Text>
                   <TouchableOpacity onPress={copyToClipboard }>
                   <Image source={require('../assets/copyIcon.png')} />
                   </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 40, backgroundColor: '#65236D', borderRadius: 30, alignItems: 'center', height: 49 }}>
                    <TouchableOpacity style={{ marginHorizontal: 20 }}>
                        <Image source={require('../assets/arrowleft.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={{ marginHorizontal: 20, backgroundColor: '#5F30EB', padding: 20, borderRadius: 20, width: 100, marginVertical: 7, alignItems: 'center', height: 25, justifyContent: 'center' }}>
                        <Image source={require('../assets/walletArrow.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setReceiveModalVisible(true)} style={{ marginHorizontal: 20 }}>
                        <Image source={require('../assets/arrowDown.png')} />
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ flex: 1, padding: 20 }}>
                <Text style={{ fontSize: 16, color: '#fff' }}>My Portfolio</Text>
                <FlatList

                    data={token}
                    renderItem={item => <RenderItem item={item.item} />}
                // keyExtractor={item => item.id}
                />




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
                        <View style={{ alignItems: 'center', padding: 10,flexDirection: 'row', justifyContent:'center'}} >
                        <Text style={{ fontSize: 25, color: '#4F2377', fontWeight: '500' }}>Trade</Text>
                            <TouchableOpacity
                                style={{ position:'absolute',top:10,right:10  }}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Image source={require('../assets/close1.png')} />
                            </TouchableOpacity>
                          
                        </View>
                        <Text style={{ fontSize: 16 }}>Trade in</Text>
                        <View style={{ flexDirection: 'row', borderColor: '#89549D', width: '100%', borderRadius: 10, marginTop: 5, borderWidth: 2, height: 50, justifyContent: 'space-between',alignItems:'center' }}>
                            
                                <Text style={{ fontSize: 20, }}>  2500</Text>
                            
                            <View style={{ borderLeftWidth: 2, borderColor: '#89549D', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 10 }}>
                                <Image style={{ height: 20, width: 20, marginLeft: 10, marginRight: 10 }} source={require('../assets/tether.png')} />
                                <Text style={{ marginRight: 10 }} >USDT</Text>
                               <Image source={require('../assets/blackdropDown.png')} />
                            </View>

                        </View>


                        <Text style={{ fontSize: 16, marginTop: 26 }}>Trade out</Text>
                        <View style={{ flexDirection: 'row', borderColor: '#89549D', width: '100%', borderRadius: 10, marginTop: 5, borderWidth: 2, height: 50, justifyContent: 'space-between' }}>
                            <View style={{ justifyContent: 'center', }}>
                                <Text style={{ fontSize: 20, }}>  0.13</Text>
                            </View>
                            <View style={{ borderLeftWidth: 2, borderColor: '#89549D', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 10 }}>
                                <Image style={{ height: 20, width: 20, marginLeft: 10, marginRight: 10 }} source={require('../assets/BitIcon.png')} />
                                <Text style={{ marginRight: 10 }} >Bitcoin</Text>
                                <Image source={require('../assets/blackdropDown.png')} />
                            </View>

                        </View>


                        <Text style={{ fontSize: 16, marginTop: 26 }}>Fees</Text>
                        <View style={{ flexDirection: 'row', borderColor: '#89549D', width: '100%', borderRadius: 10, marginTop: 5, borderWidth: 2, height: 50, justifyContent: 'space-between' }}>
                            <View style={{ justifyContent: 'center', }}>
                                <Text style={{ fontSize: 20, }}>  75.00</Text>
                            </View>
                            <View style={{ borderColor: '#89549D', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 10 }}>
                                <Image style={{ height: 20, width: 20, marginLeft: 10, marginRight: 10 }} source={require('../assets/tether.png')} />
                                <Text style={{ marginRight: 10 }} >USTD</Text>
                               
                            </View>

                        </View>

                       <View style={styles.BtnImport}>
                       <TouchableOpacity  onPress={() => setModalVisible(!modalVisible)} >
                            <Text style={{ color: '#fff', fontSize: 18 }}>TRADE NOW</Text>
                        </TouchableOpacity>

                       </View>


                    </View>
                </View>
            </Modal>

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

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',paddingHorizontal:10,width:'100%' }}>
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
        padding: 10,
        marginTop: 20,
        justifyContent:'space-between',
        flexDirection: 'row',
        borderRadius: 20,
        width: '100%',

    },
    title: {
        fontSize: 16,
        color: '#fff',
        marginTop: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal:25

    },
    modalView: {

        height: 500,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        justifyContent:'center',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },
    modalView1: {

        // height: 400,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 20,
        justifyContent: 'space-between',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },
    BtnImport: {
        backgroundColor: '#A12288',
        height: 50,
        width: "60%",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 34,
        marginLeft:50
      




    },



});

export default MyWallletScreen