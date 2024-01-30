import { View, Text, TouchableOpacity, Image, Switch, ScrollView } from 'react-native'
import React from 'react'

const SettingsScreen = ({ navigation }: any) => {
    return (
        <View style={{ backgroundColor: '#291443', flex: 1, padding: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20,marginBottom:10 }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }} onPress={() => navigation.navigate('MyWalletScreen')}>
                    <Image source={require('../assets/back.png')} />
                    <Text style={{ color: '#fff', fontSize: 20 }}>  Settings</Text>
                </TouchableOpacity>
                <Image style={{ height: 20, width: 20, }} source={require('../assets/settingsIcon.png')} />
            </View>
            <ScrollView>
                <View style={{ marginTop: 33, flexDirection: 'row', backgroundColor: '#3E275A', padding: 20, borderRadius: 20, justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image style={{ marginRight: 10 }} source={require('../assets/profile.png')} />
                        <View style={{}}>
                            <Text style={{ fontSize: 16, color: '#fff', }}>Profile Information</Text>
                            <Text style={{ color: '#F3F3F3', fontSize: 14 }}>Change your account information</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/forward.png')} />

                </View>

                <View style={{ marginTop: 9, flexDirection: 'row', backgroundColor: '#3E275A', padding: 20, borderRadius: 20, justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image style={{ marginRight: 10 }} source={require('../assets/lock.png')} />
                        <View style={{}}>
                            <Text style={{ fontSize: 16, color: '#fff', }}>Change Password</Text>
                            <Text style={{ color: '#F3F3F3', fontSize: 14 }}>Change your password</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/forward.png')} />

                </View>

                <View style={{ marginTop: 9, flexDirection: 'row', backgroundColor: '#3E275A', padding: 20, borderRadius: 20, justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image style={{ marginRight: 10 }} source={require('../assets/Creditcard.png')} />
                        <View style={{}}>
                            <Text style={{ fontSize: 16, color: '#fff', }}>Payment Methods</Text>
                            <Text style={{ color: '#F3F3F3', fontSize: 14 }}>Add your credit & debit cards</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/forward.png')} />

                </View>

                <View style={{ marginTop: 9, flexDirection: 'row', backgroundColor: '#3E275A', padding: 20, borderRadius: 20, justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image style={{ marginRight: 10 }} source={require('../assets/refer.png')} />
                        <View style={{}}>
                            <Text style={{ fontSize: 16, color: '#fff', }}>Refer to Friends</Text>
                            <Text style={{ color: '#F3F3F3', fontSize: 14 }}>Get $10 for reffering friends</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/forward.png')} />

                </View>
                <Text style={{ marginTop: 27, fontSize: 20, color: '#fff' }}>NOTIFICATIONS</Text>

                <View style={{ marginTop: 40, flexDirection: 'row', backgroundColor: '#3E275A', padding: 20, borderRadius: 20, justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ marginRight: 10 }} source={require('../assets/bell.png')} />

                        <View>
                            <Text style={{ fontSize: 16, color: '#fff', }}>SMS Notifications</Text>
                            <Text style={{ color: '#F3F3F3', fontSize: 14 }}>Add Facebook, Twitter etc</Text>
                        </View>
                    </View>
                    <View>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                        // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        />
                    </View>
                </View>

                <View style={{ marginTop: 10, flexDirection: 'row', backgroundColor: '#3E275A', padding: 20, borderRadius: 20, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ marginRight: 10 }} source={require('../assets/bell.png')} />

                        <View>
                            <Text style={{ fontSize: 16, color: '#fff', }}>Promotional Notifications</Text>
                            <Text style={{ color: '#fff', fontSize: 14 }}>Add Facebook, Twitter etc</Text>
                        </View>
                    </View>
                    <View>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                        // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default SettingsScreen