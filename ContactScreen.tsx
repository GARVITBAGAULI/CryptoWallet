import { View, Text, ImageBackground, StyleSheet, Image, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Contacts from 'react-native-contacts';

const DATA = [
    {
        image: require('../assets/ContactIcon.png'),
        name: 'Trade #1',
        qrIcon: require('../assets/QrIcon.png'),
        arrow: require('../assets/forward.png'),
    },
    {
        image: require('../assets/ContactIcon.png'),
        name: 'Trade #1',
        qrIcon: require('../assets/QrIcon.png'),
        arrow: require('../assets/forward.png'),
    },
    {
        image: require('../assets/ContactIcon.png'),
        name: 'Trade #1',
        qrIcon: require('../assets/QrIcon.png'),
        arrow: require('../assets/forward.png'),
    },
    {
        image: require('../assets/ContactIcon.png'),
        name: 'Trade #1',
        qrIcon: require('../assets/QrIcon.png'),
        arrow: require('../assets/forward.png'),
    },
    {
        image: require('../assets/ContactIcon.png'),
        name: 'Trade #1',
        qrIcon: require('../assets/QrIcon.png'),
        arrow: require('../assets/forward.png'),
    },
];
const RenderItem = ({ item }: any) => (
    <View style={styles.item}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{ height: 40, width: 40 }} source={require("../assets/profile.png")} />
            <Text style={{ marginLeft: 20, color: '#fff' }}>{item}</Text>
        </View>
        {/* <View style={{flexDirection:'row',alignItems:'center'}}>
       <Image style={{ height: 25, width: 25,marginRight:10 }} source={item.qrIcon} />
        <Image source={item.arrow} /> 
       </View>
        */}

    </View>
);
const ContactScreen = ({ navigation }: any) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        Contacts.getAll().then(contacts => {
            const emptyArray: any = [];

            // for (let i = 0; i < contacts.length; i++) {
            //     let num: any = contacts[i].phoneNumbers.map((x) => x.number)

            //     emptyArray.push(num[0]);
            //     console.log(emptyArray);


            //    setContacts(emptyArray);
            // }
            // console.log(contacts[0].phoneNumbers);
            contacts.map(i => {
                emptyArray.push(i.phoneNumbers[0].number);
                // console.log(emptyArray);
            })
            setContacts(emptyArray)

        });

    }, [])


    return (
        <View style={{ backgroundColor: '#291443', flex: 1, padding: 20 }}>
            <View>
                <TouchableOpacity style={{ marginTop: 50, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('MyWalletScreen')}>
                    <Image source={require('../assets/back.png')} />
                    <Text style={{ color: '#fff', fontSize: 20 }}> Contact</Text>
                </TouchableOpacity>

            </View>

            <View style={{ backgroundColor: '#fff', flexDirection: 'row', borderRadius: 100, height: 36, justifyContent: 'space-between', alignItems: 'center', marginTop: 30, paddingHorizontal: 10, marginBottom: 13 }}>
                <TextInput style={{ height: 36 }} />



                <Image style={{ height: 20, width: 20, }} source={require('../assets/searchIcon.png')} />

            </View>

            <View style={{}}>
                <FlatList
                    data={contacts}
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
        padding: 15,
        marginTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 20,
        width: '100%',

    },
});

export default ContactScreen