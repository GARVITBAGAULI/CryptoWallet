import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}: any) => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/TcxHome.png')} style={styles.imagebackground} resizeMode="cover">
                <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={{color:'#35469E',fontSize:18}}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.RegisterBtn} onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={{color:'#fff',fontSize:18}}>REGISTER</Text>
                </TouchableOpacity>


            </ImageBackground>

        </View>
    )
};
const styles = StyleSheet.create({
    imagebackground: {

        flex: 1,
        justifyContent: 'flex-end',
        padding: 20,
        alignItems: "center"

    },
    loginBtn: {
        backgroundColor: '#fff',
        padding: 10,
        height:60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        width:'100%',
        marginBottom:20,
    },
    RegisterBtn: {
        backgroundColor: '#A12288',
        height:60,
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 60,
        
    },



});

export default HomeScreen