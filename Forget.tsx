import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Forget = ({navigation}:any) => {
  return (
    <View style={{flex:1}}>
      <ImageBackground source={require('../assets/ForgetPassword.png')} style={styles.imagebackground}>
       
       <View>


       </View>
        <View style={{  justifyContent: 'center', padding: 20, alignItems: "center",marginBottom:130}}>
        <Text style={{fontSize:25,color:'#fff',}}>Forgot Password</Text>
          <Text style={{fontSize:14,color:'#fff',marginTop:10,textAlign:'center'}}>We will send the updated password link on your registered email</Text>
          <View style={styles.textInput}>
                        <TextInput

                            placeholder="Email Address"
                            placeholderTextColor={"#868686"}
                        />
                        <Image source={require('../assets/email@.png')} />
                    </View>
                <TouchableOpacity style={styles.Submit} onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={{color:'#fff'}}>Submit</Text>
                </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
    imagebackground: {
        flex: 1,
         justifyContent:'space-between'
    },
    textInput: {
        marginTop: 25,
        height: 55,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        borderRadius: 10,
        borderColor:'#3E275A',
       backgroundColor:'#3E275A',
       color:'#fff',
       flexDirection:'row',
       justifyContent:'space-between'
       

    },
    Submit:{
        backgroundColor: '#A12288',
        height:49,
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        
    },



});

export default Forget