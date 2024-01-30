import { View, Text, TouchableOpacity, StyleSheet, Image, ImageComponent, FlatList } from 'react-native'
import React, { useEffect } from 'react'

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
        usd: '-0.00142263 BTC',
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
            <View style={{ flexDirection: 'row',alignItems:'center' }}>
                <Image style={{ marginRight: 10 }} source={item.icon} />
                <View>
                    <Text style={{ color: '#fff',marginBottom:6 }}>{item.transaction}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={item.statusIcon} />
                        <Text style={{ color: "#9F9E9E", marginLeft: 5 }}>{item.status}</Text>
                    </View>
                </View>

            </View>


        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#fff' }}> {item.usd}</Text>
                <Text style={{ marginTop: 5, color: '#959595', marginLeft: 50 }}>{item.net}</Text>
            </View>
            <Image style={{ marginHorizontal: 5 }} source={item.forward} />

        </View>


    </View>
);


const HistoryScreen = ({ navigation }: any) => {
    function webSocket(){
        let ws = new WebSocket(`wss://stream.binance.com:9443`);

        ws.onmessage = (event) =>{
            let stockObject = JSON.parse(event.data);
            console.log(stockObject);
        }
    }

    useEffect(() => {
       webSocket();
        // console.log(asset.symbol.toLowerCase());
        
    }, [])
    return (
        <View style={{ backgroundColor: '#291443', flex: 1, padding: 20 }}>
            <TouchableOpacity style={{ marginTop: 40, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('MyWalletScreen')}>
                <Image source={require('../assets/back.png')} />
                <Text style={{ color: '#fff', fontSize: 20 }}>  Transaction History</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 20, flex: 1 }}>
                <FlatList
                    data={DATA}
                    renderItem={item => <RenderItem item={item.item} />}
                // keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    item: {
        backgroundColor: '#3E275A',
        padding: 20,
        marginTop: 10,
        justifyContent: "space-between",
        flexDirection: 'row',
        borderRadius: 20,
        width: '100%',
        flex: 1

    },
});

export default HistoryScreen