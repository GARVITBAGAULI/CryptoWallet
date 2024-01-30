import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
const NETWORKS = [

    {
        id: 1,
        name: 'Ethereum Mainnet',
        network: 'Ethereum',
        nativeCurrency: {
            decimals: 18,
            name: 'ETH',
            symbol: 'ETH',
        },
        rpcUrls: {
            default: 'https://api.mycryptoapi.com/eth/',
        },
        blockExplorers: {
            default: { name: 'ETH Scan', url: 'https://etherscan.io/' },
        },
        testnet: false,
    },
    {
        id: 137,
        name: 'Polygon',
        network: 'Polygon',
        nativeCurrency: {
            decimals: 6,
            name: 'MATIC',
            symbol: 'MATIC',
        },
        rpcUrls: {
            default: 'https://polygon-rpc.com',
        },
        blockExplorers: {
            default: { name: 'Polygon Scan', url: 'https://polygonscan.com/' },
        },
        testnet: false,
    },
    {
        id: 10,
        name: 'Optimism',
        network: 'Optimism',
        nativeCurrency: {
            decimals: 18,
            name: 'OP',
            symbol: 'OP',
        },
        rpcUrls: {
            default: 'https://mainnet.optimism.io/',
        },
        blockExplorers: {
            default: { name: 'Optimism Scan', url: 'https://optimistic.etherscan.io/' },
        },
        testnet: false,
    },
    {
        id: 42161,
        name: 'Arbitrum One',
        network: 'Arbitrum One',
        nativeCurrency: {
            decimals: 18,
            name: 'ETH',
            symbol: 'ETH',
        },
        rpcUrls: {
            default: 'https://arb1.arbitrum.io/rpc',
        },
        blockExplorers: {
            default: { name: 'Arbitrum Scan', url: 'https://arbiscan.io/' },
        },
        testnet: false,
    },
    {
        id: 56,
        name: 'BNB Smart Chain Mainnet',
        network: 'BSC Mainnet',
        nativeCurrency: {
            decimals: 18,
            name: 'BNB',
            symbol: 'BNB',
        },
        rpcUrls: {
            default: 'https://bsc-dataseed1.binance.org/',
        },
        blockExplorers: {
            default: { name: 'BSC Scan', url: 'https://bscscan.com/' },
        },
        testnet: false,
    },
    {
        id: 100,
        name: 'Gnosis Chain',
        network: 'Gnosis Chain',
        nativeCurrency: {
            decimals: 18,
            name: 'Gnosis Chain',
            symbol: 'xDAI',
        },
        rpcUrls: {
            default: 'https://rpc.gnosischain.com',
        },
        blockExplorers: {
            default: { name: 'Gnosis Scan', url: 'https://gnosisscan.io' },
        },
        testnet: false,
    },
    {
        id: 43114,
        name: 'Avalanche C-Chain',
        network: 'Avalanche C-Chain',
        nativeCurrency: {
            decimals: 18,
            name: 'Avalanche',
            symbol: 'AVAX',
        },
        rpcUrls: {
            default: 'https://api.avax.network/ext/bc/C/rpc',
        },
        blockExplorers: {
            default: { name: 'Snowtrace', url: 'https://snowtrace.io' },
        },
        testnet: false,
    },
    {
        id: 1313161554,
        name: 'Aurora Mainnet',
        network: 'Aurora Mainnet',
        nativeCurrency: {
            decimals: 18,
            name: 'Ethereum',
            symbol: 'ETH',
        },
        rpcUrls: {
            default: 'https://mainnet.aurora.dev',
        },
        blockExplorers: {
            default: { name: 'Aurora Scan', url: 'https://aurorascan.dev/' },
        },
        testnet: false,
    },
    {

        id: 250,
        name: 'Fantom',
        network: 'Fantom',
        nativeCurrency: {
            decimals: 18,
            name: 'Fantom',
            symbol: 'FTM',
        },
        rpcUrls: {
            default: 'https://rpc.ftm.tools',
        },
        blockExplorers: {
            default: { name: 'Fantom Scan', url: 'https://ftmscan.com' },
        },
        testnet: false,
    },
    {

        id: 8217,
        name: 'Klaytn Mainnet Cypress',
        network: 'Klaytn',
        nativeCurrency: {
            decimals: 18,
            name: 'Klaytn',
            symbol: 'KLAY',
        },
        rpcUrls: {
            default: 'https://public-node-api.klaytnapi.com/v1/cypress',
        },
        blockExplorers: {
            default: { name: 'Klaytn Scope', url: 'https://scope.klaytn.com' },
        },
        testnet: false,
    },
    {

        id: 80001,
        name: 'Mumbai Testnet',
        network: 'Mumbai testnet',
        nativeCurrency: {
            decimals: 18,
            name: 'MATIC',
            symbol: 'MATIC',
        },
        rpcUrls: {
            default: 'https://rpc-mumbai.maticvigil.com/',
        },
        blockExplorers: {
            default: { name: 'Matic', url: 'https://polygonscan.com/' },
        },
        testnet: true,
    },
];

const NetworkSwap = ({navigation}:any) => {

    const RenderItem = ({ item, }: any) => (
       
        <TouchableOpacity style={styles.item} onPress={ () => navigation.navigate("swapToken",{swapNetwork:item})}>
<Text style={{fontSize:18,fontWeight:'600'}}>{item.name}</Text>
        </TouchableOpacity>

          

    );
  return (
    <View style={{backgroundColor:'#291443',flex:1,padding:20}}>
      <Text style={{fontSize:25,color:'#fff',marginTop:24}}>NetworkSwap</Text>
  <FlatList

                data={NETWORKS}
                renderItem={item => <RenderItem item={item.item} />}
            // keyExtractor={item => item.id}
            />
        </View>
    
  )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 25,
        marginTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 10,
        width: '100%',

    },
})
export default NetworkSwap

