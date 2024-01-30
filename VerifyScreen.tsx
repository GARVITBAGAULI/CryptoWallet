import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Verify = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../assets/Verify.png')} style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{  }}>

        </View>



        <View style={{ justifyContent: 'center', padding: 20, alignItems: "center",marginBottom:50}}>
          <Text style={{ fontSize: 25, color: '#fff', }}>Verify Your Email</Text>
          <Text style={{ fontSize: 14, color: "#DCDCDC", marginTop: 5, textAlign: 'center' }} >We have sent you an email with verification code. Please enter the provided code. </Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={styles.textinput}

            />
            <TextInput
              style={styles.textinput}

            />
            <TextInput
              style={styles.textinput}

            />
            <TextInput
              style={styles.textinput}

            />
            <TextInput
              style={styles.textinput}

            />
            <TextInput
              style={styles.textinput}

            />
          </View>
          <TouchableOpacity style={styles.ContinueBtn} onPress={() => navigation.navigate('BottomTab')}>
            <Text style={{ fontSize: 18, color: '#fff' }}>Continue</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, justifyContent: 'center' }}>
          <Text style={{ color: '#fff' }}>Resend code after 1:52    </Text>
          <TouchableOpacity style={styles.ResendBtn}>
            <Text style={{ color: '#fff' }}>Resend</Text>
          </TouchableOpacity>

        </View>
        </View>


        
      </ImageBackground>
    </View>

  )
}
const styles = StyleSheet.create({
  imagebackground: {


  },
  textinput: {
    width: 45,
    height: 49,
    backgroundColor: '#3E275A',
    marginLeft: 10,
    marginTop: 20,
    borderRadius: 5,
    color: '#fff',

  },
  ContinueBtn: {
    backgroundColor: '#A12288',
    height: 49,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,


  },
  ResendBtn: {
    height: 30,
    width: 90,
    backgroundColor: '#1CCE46E5',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',

  },



});

export default Verify