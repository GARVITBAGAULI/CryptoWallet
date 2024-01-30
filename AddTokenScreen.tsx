import { View, Text, TouchableOpacity, Image, Switch, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const AddTokenScreen = ({ navigation,route }: any) => {
    const [isEnabled, setIsEnabled] = useState(false);
   const wallet = route.params.wallet
   
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{ flex: 1, backgroundColor: '#291443', padding: 20, justifyContent: 'space-between' }}>

            <View>
                <TouchableOpacity style={{ marginTop: 24, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/back.png')} />
                    <Text style={{ color: '#fff', fontSize: 20 }}> Add Token </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginTop: 17, backgroundColor: 'rgba(255,255,255,0.3)', padding: 15, borderRadius: 10, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ backgroundColor: '#000', padding: 10, borderRadius: 10, marginRight: 20 }}>
                            <Image source={require('../assets/bitcoin1.png')} />
                        </View>
                        <View>
                            <Text style={{ color: '#fff' }}>Bitcoin</Text>
                            <Text style={{ color: '#fff', marginTop: 5 }} >0.5 BTC</Text>
                        </View>
                    </View>
                    <Switch
                       
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 16, backgroundColor: 'rgba(255,255,255,0.3)', padding: 15, borderRadius: 10 ,justifyContent:'space-between'}}>
                   <View style={{flexDirection:'row'}}>
                   <View style={{ backgroundColor: '#040840', padding: 10, borderRadius: 10, marginRight: 20 }}>
                        <Image source={require('../assets/etherIcon.png')} />
                    </View>
                    <View>
                        <Text style={{ color: '#fff' }}>Etherium</Text>
                        <Text style={{ color: '#fff', marginTop: 5 }} >0.5 ETH</Text>
                    </View>
                   </View>
                    <Switch
                        
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                </View>


                <View style={{ flexDirection: 'row', marginTop: 16, backgroundColor: 'rgba(255,255,255,0.3)', padding: 15, borderRadius: 10,justifyContent:'space-between' }}>
                   <View style={{flexDirection:'row'}}>
                   <View style={{ backgroundColor: '#040840', padding: 10, borderRadius: 10, marginRight: 20 }}>
                        <Image source={require('../assets/tether.png')} />
                    </View>
                    <View>
                        <Text style={{ color: '#fff' }}>Tether</Text>
                        <Text style={{ color: '#fff', marginTop: 5 }} >0.5 USDT</Text>
                    </View>
                   </View>
                    <Switch
                     
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />


                </View>


                <View style={{ flexDirection: 'row', marginTop: 16, backgroundColor: 'rgba(255,255,255,0.3)', padding: 15, borderRadius: 10 ,justifyContent:'space-between'}}>
                   <View style={{flexDirection:'row'}}>
                   <View style={{ backgroundColor: '#040840', padding: 10, borderRadius: 10, marginRight: 20 }}>
                        <Image source={require('../assets/BNB.png')} />
                    </View>
                    <View>
                        <Text style={{ color: '#fff' }}>BNB</Text>
                        <Text style={{ color: '#fff', marginTop: 5 }} >0.5 BNB</Text>
                    </View>
                   </View>
                    <Switch
                       
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                </View>

            </View>

            <View>
                <TouchableOpacity style={styles.BtnImport} onPress={() => navigation.navigate('CustomToken',{wallet: wallet})}>
                    <Text style={{ color: '#fff', fontSize: 18 }}>Add Custom Token</Text>
                </TouchableOpacity>
            </View>

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
        marginBottom: 30,



    },
});

export default AddTokenScreen