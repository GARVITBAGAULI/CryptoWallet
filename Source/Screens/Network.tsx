import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { id } from 'ethers/lib/utils';

const Network = ({route, navigation }: any) => {
    const DATA = [
        {
            id: 1,
            title: 'ETH',
            properties: {
                networkName: 'Ethereum Mainnet',
                newRpcUrl: 'https://mainnet.infura.io/v3/2f1576eee5c64b46929eb193487076b6',
                chainId: 1,
                currencySymbol: 'ETH',
                blockExplorerUrl: 'https://etherscan.io'
            }

        },
        {
            id: 2,
            title: 'MATIC',
            properties: {
                networkName: 'Matic Mainnet',
                newRpcUrl: 'https://polygon-rpc.com/',
                chainId: 137,
                currencySymbol: 'MATIC',
                blockExplorerUrl: 'https://explorer.matic.network/'
            }
        },
        {
            id: 3,
            title: 'BNB',
            properties: {
                networkName: 'Smart Chain',
                newRpcUrl: 'https://bsc-dataseed.binance.org/',
                chainId: 56,
                currencySymbol: 'BNB',
                blockExplorerUrl: 'https://bscscan.com'
            }
        },
        {
            id: 4,
            title: 'FANTOM',
            properties: {
                networkName: 'Fantom Opera',
                newRpcUrl: 'https://www.ankr.com/rpc/fantom/',
                chainId: 250,
                currencySymbol: 'FTM',
                blockExplorerUrl: 'https://ftmscan.com/'
            }
        },
        {
            id: 5,
            title: 'AVAX',
            properties: {
                networkName: 'Avalanche Network',
                newRpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
                chainId: 43114,
                currencySymbol: 'AVAX',
                blockExplorerUrl: 'https://snowtrace.io/'
            }
        },
        {
            id: 6,
            title: 'MATIC TESTNET',
            properties: {
                networkName: 'Mumbai Testnet',
                newRpcUrl: 'https://rpc-mumbai.maticvigil.com/',
                chainId: 80001,
                currencySymbol: 'MATIC',
                blockExplorerUrl: 'https://polygonscan.com/'
            }
        } 
    ]
    const [selected,setSelected]= useState(1);
   
    

    const storeData = async (network:any) => {
        
  
        try {
                await AsyncStorage.setItem('default_Network', JSON.stringify(network));
         
        } catch (e) {
          console.log(e);
          
          
          
        }
      }
      const getNetwork = async () => {

        const jsonValue = await AsyncStorage.getItem('default_Network')
        if (jsonValue != null) {
            const selectedNetwork = JSON.parse(jsonValue);
            console.log(selectedNetwork, 'tbygby');
            DATA.filter(a=> {
                if(a.properties.chainId == selectedNetwork.chainId){
                    setSelected(a.id);
                }
            });
            
        }
    }
    useEffect(() => {
        getNetwork();
       
    }, [])

     
   

    
    const RenderItem = ({ item, }: any) => (
       
        <TouchableOpacity onPress={() => {setSelected(item.id); storeData(item.properties) }}
        style={item.id === selected ? styles.item2: styles.item1}  >
            <Text style={{ fontSize: 20, fontWeight: '600' }}>{item.title}</Text>
        </TouchableOpacity>

          

    );

   


    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: '#291443' }}>
            <TouchableOpacity style={{ marginTop: 24, flexDirection: 'row', alignItems: 'center' }} onPress={ () => 
                {
                    navigation.goBack();
                    route.params.onGoBack();

                }}>
                <Image source={require('../assets/back.png')} />
                <Text style={{ color: '#fff', fontSize: 20, marginLeft: 10 }}>Network</Text>
            </TouchableOpacity>

            <FlatList

                data={DATA}
                renderItem={item => <RenderItem item={item.item} />}
            // keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    item1: {
        backgroundColor: '#fff',
        padding: 20,
        marginTop: 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 20,
        width: '100%',

    },

    item2: {
        backgroundColor: '#65236D',
        padding: 20,
        marginTop: 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 20,
        width: '100%',

    },
});

export default Network