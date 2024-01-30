import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { regsisterUser} from '../redux/actions/AuthActionCreator';

const RegisterScreen = ({navigation}:any) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    const dispatch = useDispatch();
    const[name,setName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
       function register(){
           const objForRegister={
               fullName:name,
               emailId:emailId,
               password:password,
               confirmPassword:confirmPassword
           }
   
            dispatch(regsisterUser(objForRegister,(response:any)=>{
               
               console.log(response.data,"register Response");
               navigation.navigate('VerifyScreen');
               
           },(error:any)=>{
           
               console.log(error,"Error while calling");
               Alert.alert('Error',error);
           }))
               
       }

    return (
        <View style={{ flex: 1 ,}}>
            <ImageBackground source={require('../assets/RegisterBackground.png')} style={{flex:1,justifyContent:'space-between'}} resizeMode='stretch'>
            <View style={{marginBottom:50}}>
                </View>
                <View style={{padding:20,flex: 1,alignItems: 'center', justifyContent:'center',marginTop:130}}>
                <Text style={{ color: '#fff',fontSize: 25, }}>Create a New Account</Text>
             <Text style={{ color: '#D5D5D5', marginTop: 11, fontSize: 14,textAlign:'center', }}>Create an account so you can manage your crypto balance</Text>
            
                <TextInput
                    style={styles.textInput}
                    placeholder='Full Name'
                    placeholderTextColor={'#868686'}
                    onChangeText={(text:string) => setName(text)}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Email Address'
                    placeholderTextColor={'#868686'}
                    onChangeText={(text:string) => setEmailId(text)}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Password'
                    placeholderTextColor={'#868686'}
                    onChangeText={(text:string) => setPassword(text)}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Confirm Password'
                    placeholderTextColor={'#868686'}
                    onChangeText={(text:string) => setConfirmPassword(text)}
                />
                <Text style={{fontSize:14,color:'#D5D5D5',marginTop:10}}>I agree to our Terms of Services and Privacy Policy.</Text>
                <TouchableOpacity style={styles.ContinueBtn} onPress={register}>
                    <Text style={{color:'#fff',fontSize:18}}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:14,flexDirection:'row',alignItems:'center'}} onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={{color:'#89549D'}}>Joined us before? </Text>
                    <Text style={{color:'#fff',fontSize:15}}>Login</Text>
                </TouchableOpacity>

                    </View>    
             
            
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({

   
    textInput: {
        marginTop: 10,
        height: 50,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        borderRadius: 10,
        borderColor:'#3E275A',
        backgroundColor:'#3E275A',
        color:'#fff'

    },
    ContinueBtn: {
        backgroundColor: '#A12288',
        height:49,
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        color:'#fff'
       
    },



});

export default RegisterScreen