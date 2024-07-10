//SignUp Page
import React, { useState } from 'react'
import { Text, View,StyleSheet,Linking, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import BackgroundImage from '../assets/splash.png'
import Input from '../components/Input';
import Submit from '../components/Submit';
import SignIn from './SignIn';

 const SignUp=(props)=> {

    
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={BackgroundImage} style={styles.BackgroundImage}>
          
        </ImageBackground>
        <Text style={{fontSize:25,fontWeight:'300'}}> Sign Up</Text>
        <Input label="First Name"/>
        <Input label="Email"/>
        <Submit onPress={()=>{
            console.log("i'm Pressed");
        }} />
      
      <TouchableOpacity style={styles.first} >
        <FontAwesome name="google" size={24} color="black" />
      <Text style={{marginLeft:14}}>Sign Up With Google </Text>
        </TouchableOpacity >
        <Text>____________________________________________________</Text>
       
       <View style={styles.para}> 
        <Text style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}> Terms of Service</Text>
       </View>
       <View >
       <Text>Already have an Account </Text>
      
       <TouchableOpacity style={{alignItems:'center',marginTop:18,borderWidth:1,backgroundColor:'black',borderRadius:10}} onPress={()=>navigation.navigate('SignIn')
        }>
            <Text style={{padding:6,color:'white'}}>Login Now <Entypo name="login" size={20} color="white" /></Text>
        </TouchableOpacity>
       </View>
       
       
       
    </SafeAreaView>
  )
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  first:{
   flexDirection:'row',
   padding:10,
   marginTop:30,
   justifyContent:'space-evenly',
   borderColor:'#c4bcb3',
   borderWidth:1,
   borderRadius:99,
   
  },
  para:{
    flex:0.2,
    textAlign:'auto',
    margin:20,
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    marginTop:15,
    fontWeight:'400',
  },
  BackgroundImage:{
    height:100,
    width:100,
    marginBottom:20,
    

  },
  inputContainer:{
    width:'100%',
    backgroundColor:'red',
    paddingHorizontal:5,
    paddingVertical:15,
    borderRadius:2
  }
})

export default SignUp;