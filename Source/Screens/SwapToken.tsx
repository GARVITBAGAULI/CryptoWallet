import { Alert, FlatList, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import TokenPrice from '../ethers/TokenPrice';
import { ethers } from 'ethers';
import GetBalance from '../ethers/GetBalance';

const SwapToken = ({ navigation, route }: any) => {

    interface tokenType {
        address: String,
        decimals: String,
        logoURI: String,
        name: String,
        symbol: String,
    }
    const [open, setOpen] = useState(false);
    const [wallet, setWallet] = useState(null);
    const [walletList, setWalletList] = useState([]);
    const swapNetwork = route.params.swapNetwork;
    const [sellModalVisible, setSellModalVisible] = useState(false);
    const [buyModalVisible, setBuyModalVisible] = useState(false);
    const [tokens, setTokens] = useState([]);
    const [sellToken, setSellToken] = useState<tokenType>(Object);
    const [buyToken, setBuyToken] = useState<tokenType>(Object);
    const [search, setSearch] = useState('');
    const [originalTokens, setOriginalTokens] = useState([]);
    const [sellAmount, setSellAmount] = useState('1');
    const [buyAmount, setBuyAmount] = useState('');
    const [sellTokenPrice, setSellTokenPrice] = useState(0);
    const [buyTokenPrice, setBuyTokenPrice] = useState(0);
    const [decimals, setDecimals] = useState(0);
    const [buyTokenDecimals, setBuyTokenDecimals] = useState(18);
    const [swapError, setSwapError] = useState(null);
    const provider = new ethers.providers.JsonRpcProvider(swapNetwork.rpcUrls.default);
    const [apiBaseUrl, setApiBaseUrl] = useState("https://api.1inch.io/v5.0/");
    
    async function tokenData() {
        const config = {
            method: "get",
            url: `https://api.1inch.io/v4.0/${swapNetwork.id}/tokens`,
            headers: {},
        };
        let data = await axios(config);
        // console.log(data.data.tokens,"garvit........");
        let d = JSON.stringify(data.data.tokens);
        const newData: any = Object.values(JSON.parse(d));

        //console.log(newData);
        // if(swapNetwork==swapNetwork.mumbai){
        //     setTokens(m)
        // }
        setTokens(newData);
        setOriginalTokens(newData);
    };

    async function setPrices() {
        // await chain?.id;
        setSellTokenPrice(await TokenPrice(sellToken.address, 1, swapNetwork));
        setBuyTokenPrice(await TokenPrice(buyToken.address, 2, swapNetwork));
        // console.log(sellTokenPrice,"hello");
        // console.log(buyTokenPrice,"hii");

    }


    const getData = async () => {

        const jsonValue = await AsyncStorage.getItem('walletData')
        if (jsonValue != null) {
            const dataArray = JSON.parse(jsonValue);
            // console.log(dataArray, 'Garvit123');
            const emptyArray: any = [];

            dataArray.map((wallet: any) => {
                const obj = { label: wallet.walletName, value: wallet };
                emptyArray.push(obj);
            })
            // console.log(emptyArray, 'jo chaiye');
            setWalletList(emptyArray);

            //  setWallet(emptyArray);

            //  setData(dataArray);
        }
    }

    const RenderItem = ({ item }: any) => (
        <TouchableOpacity style={styles.item} onPress={() => {
            setSellToken(item);
            setSellModalVisible(!sellModalVisible);
        }}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: item.logoURI }}
                    style={{ width: 40, height: 40, borderRadius: 20, marginRight: 20 }}
                />
                <View>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}  >{item.name}</Text>
                    <Text style={{ color: "#fff" }}>{item.symbol}</Text>
                </View>
            </View>
            <Text style={{ color: "#fff" }} >{item.decimals}</Text>
        </TouchableOpacity>

    );

    const RenderItemBuy = ({ item }: any) => (
        <TouchableOpacity style={styles.item}
            onPress={() => {
                setBuyToken(item);
                setBuyModalVisible(!buyModalVisible);
            }}
        >
            <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: item.logoURI }}
                    style={{ width: 40, height: 40, borderRadius: 20, marginRight: 20 }}
                />
                <View>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}  >{item.symbol}</Text>
                    <Text style={{ color: "#fff" }}>{item.symbol}</Text>
                </View>
            </View>
            <Text style={{ color: "#fff" }} >{item.decimals}</Text>
        </TouchableOpacity>

    );

    function apiRequestUrl(methodName: any, queryParams: any) {
        let chainId = swapNetwork.id;
        return (
            apiBaseUrl +
            chainId +
            methodName +
            "?" +
            new URLSearchParams(queryParams).toString()
        );
    }
    async function buildTxForApproveTradeWithRouter(tokenAddress: String) {
        const url = apiRequestUrl("/approve/transaction", { tokenAddress });
        console.log(url);
        try {

            const transaction = await fetch(url).then((res) => res.json());
            return transaction
        }
        catch (err: any) {
            console.log(err.data.message);
            Alert.alert("Error", err.data.message, [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
        }
    }
    const swapParams = {
        fromTokenAddress: sellToken?.address, // 1INCHs
        toTokenAddress: buyToken?.address, // 1INCHDAI
        amount: Math.pow(10, decimals) * Number(sellAmount)?.toFixed(5),
        fromAddress: wallet?.address,
        slippage: 1,
        disableEstimate: false,
        allowPartialFill: false,
        referrerAddress: "0x9784Ca49e40da05Ea7220EDE6FA235CF90eD53A4", // Fee receiverS address
        fee: 2, /// Fee
    };

    const   searchFunctionality = () => {
        if (search == '') {
            setTokens(originalTokens);
        } else {
            setTokens(tokens.filter((item: any) => item.name.includes(search) || item.address.includes(search)));
        }

    }
    const assignSellToken = () => {
        setSellToken(originalTokens[0]);

    }

 
    async function approveHandler() {


        if(wallet !== null){
        const transactionForSign = await buildTxForApproveTradeWithRouter(swapParams?.fromTokenAddress);
        console.log(transactionForSign, "transactionFrom");
        try {
          const walletForSigner = new ethers.Wallet(wallet?.privateKey,provider);
          const signer = walletForSigner.connect(provider);
    
          const receipt = await signer.sendTransaction(transactionForSign);
          let { transactionHash,status } = await receipt.wait();
          console.log("From function:",transactionHash);
          if(status == 1){
            console.log('Swapping Approved');
                const url = apiRequestUrl("/swap", swapParams);
                try {
                 
                  
                  let req = await axios.get(url);
                  console.log(req.data);
                  // await AsyncStorage.setItem("quote",
                  //   JSON.stringify({ ...req.data, chainId: network.id })
                  // );
                //  navigation.navigate('ConfirmSwap',{network:network,wallet:wallet,data:req.data});
                  
                } catch (err:any) {
                  console.log(err.response.data.description,'Hello');
                  Alert.alert("Error",err.response.data.description,[{text: 'OK', onPress: () => console.log('OK Pressed')}])
                  setSwapError(err?.response?.data?.description);
                }
            
          }else{
            console.log('Swapping denied');
            
          }
        } catch (error:any) {
          console.log('Error:',error);
          // Alert.alert("Error",error,[{text: 'OK', onPress: () => console.log('OK Pressed')}]);
          
        }
      }else{
        Alert.alert("Error","Please select wallet",[{text: 'OK', onPress: () => console.log('OK Pressed')}]);
      }
      }

useEffect(() => {
    assignSellToken();
}, [originalTokens])

useEffect(() => {
    searchFunctionality();
}, [search])

useEffect(() => {
    getData();
    tokenData();
//  console.log( \buyAmount);


}, [])
useEffect(() => {
    setPrices();

}, [buyToken])
return (
    <View style={{ backgroundColor: '#291443', flex: 1, padding: 20, }}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 24 }}>
            <View>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/back.png')} />
                    <Text style={{ color: '#fff', fontSize: 24, fontWeight: '500' }}>  Swap Tokens </Text>
                </TouchableOpacity>
                <Text style={{ marginTop: 5, color: "#fff" }} >{swapNetwork.name}</Text>
            </View>
            <View style={{ width: '40%', }}>
                <DropDownPicker
                    style={{ backgroundColor: "rgba(255,255,255,0.2)", }}
                    placeholder='Select Wallet'
                    placeholderStyle={{ color: '#fff' }}

                    open={open}
                    value={wallet}
                    items={walletList}
                    setOpen={setOpen}
                    setValue={setWallet}
                    setItems={setWalletList}
                />
            </View>
        </View>

        <View style={{ width: '100%', backgroundColor: '#fff', marginTop: 100, padding: 20, height: 400, borderRadius: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "600" }} >SWAP</Text>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
                <Text style={{ color: "#738CB1" }}>You Sell</Text>
                {(wallet !== null) && <GetBalance token_address={sellToken.address} set={setSellAmount} address={wallet?.address} rpcURL={swapNetwork.rpcUrls.default} />}
            </View>
            <View style={{ marginTop: 5 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }} >
                    <TouchableOpacity style={{ borderWidth: 1, width: '40%', padding: 17, borderRadius: 10, flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'space-between', alignItems: 'center' }}
                        onPress={() => setSellModalVisible(!sellModalVisible)} >
                        <Text style={{ marginRight: 5, }} >{sellToken ? sellToken.symbol : ''}</Text>
                        {sellToken?.logoURI ? <Image style={{ height: 30, width: 30, borderRadius: 20, marginRight: 10 }} source={{ uri: sellToken.logoURI }} /> : <></>}


                        <Image source={require('../assets/dropDown.png')} />
                    </TouchableOpacity>
                    <View style={{ borderWidth: 1, width: '40%', padding: 15, borderRadius: 10 }} >
                        <TextInput
                            style={{ fontSize: 18 }}
                            onChangeText={(text: string) => setSellAmount(text)}
                            value={sellAmount}
                        />
                    </View>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <Text style={{ marginRight: 30 }}>$ {sellTokenPrice}</Text>
                </View>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                <Image source={require('../assets/downArrow.png')} />
            </View>
            <Text style={{ marginTop: 10, fontSize: 16 }} >You Buy</Text>
            <View style={{ marginTop: 5 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }} >
                    <TouchableOpacity onPress={() => setBuyModalVisible(!buyModalVisible)} style={{ borderWidth: 1, width: '40%', padding: 17, borderRadius: 10, flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text>{buyToken.symbol}</Text>
                        <Image source={{ uri: buyToken.logoURI }}
                            style={{ width: 30, height: 30, borderRadius: 20, marginRight: 10 }}
                        />
                        <Image source={require('../assets/dropDown.png')} />
                    </TouchableOpacity>
                    <View style={{ borderWidth: 1, width: '40%', padding: 15, borderRadius: 10 }} >
                        <TextInput
                            style={{ fontSize: 18 }}
                         //   onChangeText={(text:string) => setBuyAmount(text) }
                            value={buyTokenPrice==null?"0":((Number(sellAmount) * sellTokenPrice) / buyTokenPrice).toString()}
                             onChange={(e: any) =>  {setBuyAmount(e.currentTarget.value)}} />

                    </View>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <Text style={{ marginRight: 30 }}>$ {buyTokenPrice}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.Swap} onPress={approveHandler}>
                <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>Swap</Text>
            </TouchableOpacity>
        </View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={sellModalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setSellModalVisible(!sellModalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView1}>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 15, alignItems: 'center', }}>
                        <Text style={{ color: '#000', fontSize: 24, fontWeight: '600' }}>Select a token</Text>
                        <TouchableOpacity style={{ position: 'absolute', top: 5, right: 5 }} onPress={() => setSellModalVisible(!sellModalVisible)}>
                            <Image source={require('../assets/close1.png')} />
                        </TouchableOpacity>
                    </View>

                    <TextInput style={{ marginTop: 5, height: 45, width: '100%', borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.2)', padding: 10, color: '#000', fontSize: 18, borderWidth: 1 }}
                        placeholder='Serch By Token Name'
                        placeholderTextColor={'#959595'}
                        onChangeText={(text: string) => setSearch(text)} />

                    <FlatList

                        data={tokens}
                        renderItem={item => <RenderItem item={item.item} />}

                    />










                </View>
            </View>
        </Modal>



        <Modal
            animationType="slide"
            transparent={true}
            visible={buyModalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setBuyModalVisible(!buyModalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView1}>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 15, alignItems: 'center', }}>
                        <Text style={{ color: '#000', fontSize: 24, fontWeight: '600' }}>Select a token to buy</Text>
                        <TouchableOpacity style={{ position: 'absolute', top: 5, right: 5 }} onPress={() => setBuyModalVisible(!buyModalVisible)}>
                            <Image source={require('../assets/close1.png')} />
                        </TouchableOpacity>
                    </View>

                    <TextInput style={{ marginTop: 5, height: 45, width: '100%', borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.2)', padding: 10, color: '#000', fontSize: 18, borderWidth: 1 }}
                        placeholder='Serch By Token Name'
                        placeholderTextColor={'#959595'}
                        onChangeText={(text: string) => setSearch(text)} />
                    <FlatList

                        data={tokens}
                        renderItem={item => <RenderItemBuy item={item.item} />}

                    />










                </View>
            </View>
        </Modal>


    </View>
)
}

export default SwapToken

const styles = StyleSheet.create(
    {
        Swap: {
            backgroundColor: '#A12288',
            height: 49,
            width: '100%',
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

            height: 450,
            width: '100%',
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 20,


            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            }
        },
        item: {
            backgroundColor: '#5F30EB',
            padding: 15,
            marginTop: 5,
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderRadius: 10,
            width: '100%',

        },
    })