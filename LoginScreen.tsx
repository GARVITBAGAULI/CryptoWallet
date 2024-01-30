import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { loginUser } from '../redux/actions/AuthActionCreator';
import { NavigationContainer } from '@react-navigation/native';

const LoginScreen = ({ navigation }: any) => {
 const dispatch = useDispatch();
 const [emailId, setEmailId] = useState('');
 const [password, setPassword] = useState('');
    // function login(){
    //     const objForLogin={
    //         emailId:emailId,
    //         password:password
    //     }

    //      dispatch(loginUser(objForLogin,(response:any)=>{
            
    //         console.log(response.data,"Login Response");
    //         navigation.navigate('FirstScreen');
            
    //     },(error:any)=>{
        
    //         console.log(error,"Error while calling");
    //         Alert.alert('Error',error);
    //     }))
            
    // }
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/LoginBackground.png')} style={styles.imagebackground} resizeMode="cover">
                <View>
                    
                </View>
                <View style={{ alignItems: 'center', width: '100%',marginTop:180 }}>
                    <Text style={{ fontSize: 25, color: '#fff' }}>User Login</Text>
                    <Text style={{ fontSize: 14, color: "#fff", marginTop: 5, marginBottom: 20 }}>Enter your Email and Password for Login up</Text>
                    <View style={styles.textInput}>
                        <TextInput
                              style={{color:'#fff',fontSize:18}}
                            placeholder="Email Address"
                            placeholderTextColor={"#868686"}
                            onChangeText={(text:string)=>setEmailId(text)}
                        />
                        <Image source={require('../assets/email@.png')} />
                    </View>

                    <View style={styles.textInput}>

                        <TextInput
                             style={{color:'#fff',fontSize:18}}
                            placeholder="Password"
                            placeholderTextColor={"#868686"}
                            onChangeText={(text:string)=>setPassword(text)}
                            secureTextEntry={true}
                        />

                        <Image source={require('../assets/lockIcon.png')} />

                    </View>
                    <TouchableOpacity style={styles.LoginBtn} onPress={() => navigation.navigate("FirstScreen")} >
                        <Text style={{ color: '#fff', fontSize: 18 }}>Login </Text>
                        <Image style={{}} source={require('../assets/arrow-right.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{}} onPress={() => navigation.navigate('Forget')}>
                        <Text style={{ color: '#fff', fontSize: 15, marginTop: 20 }}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'flex-end', marginBottom: 14,alignItems:'center' }}>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={{color:'#B2A2B8'}}>New Member?</Text>
                        <Text style={{ color: '#fff', fontSize: 15, }}>  Register Now</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    imagebackground: {
        flex: 1,
        // justifyContent: 'center',
        padding: 20,
        
        justifyContent: 'space-between'
    },

    LoginBtn: {
        backgroundColor: '#A12288',
        height: 49,
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        flexDirection:'row',
        color:'#fff'



    },

    textInput: {
        flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-between',
        height: 60,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        borderRadius: 10,
        borderColor: '#3E275A',
        backgroundColor: '#3E275A',
        
        
    },


});


export default LoginScreen