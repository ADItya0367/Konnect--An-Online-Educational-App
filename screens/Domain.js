//community based
import React, { useCallback, useState } from 'react'
import { View, Text, Button, StyleSheet, ImageBackground,TouchableOpacity, Touchable, KeyboardAvoidingView, Platform } from 'react-native'
import BackgroundImage from '../assets/images/domains.png'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons';



 const Domain=props=> {

    const [messageText,setmessageText]=useState("")
    
    const sendMessage = useCallback(()=>{
       setmessageText("")
    },[messageText])

  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.screen} behavior={Platform.OS === 'ios' ? 'padding': undefined} keyboardVerticalOffset={100}>
     <ImageBackground source={BackgroundImage} style={styles.BackgroundImage}>
     
      <View style={styles.input}>
        <TouchableOpacity style={styles.media} onPress={()=>{console.log("pressed")}}>
        <AntDesign name="plussquare" size={24} color="black" />
        </TouchableOpacity >

        <TextInput style={styles.textbox} onChangeText={text=>setmessageText(text)} value={messageText} onSubmitEditing={sendMessage}/>

        {messageText ==='' && <TouchableOpacity style={styles.media} onPress={()=>{console.log("pressed")}}>
        <Entypo name="image-inverted" size={24} color="black" />
        </TouchableOpacity >}

        {messageText !=='' && <TouchableOpacity style={{...styles.media,...styles.back}} onPress={sendMessage}>
        <FontAwesome name="send" size={20} color="white" />
        </TouchableOpacity >}


      </View>
      </ImageBackground> 
      </KeyboardAvoidingView>
    
    </SafeAreaView>
  )
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column'
  },
  screen:{
    flex:1
  },
  BackgroundImage:{
    flex:1
  },
  input:{
    flexDirection:'row',
    paddingVertical:8,
    paddingHorizontal:10,
    marginTop:680,
    
  },
  textbox:{
    flex:1,
    borderWidth:1,
    borderRadius:50,
    borderColor:'black',
    marginHorizontal:15,
    paddingHorizontal:12
  },
  media:{
    alignItems:'center',
    justifyContent:'center',
    width:35
  },
  back:{
    backgroundColor:'black',
    borderRadius:50,
    padding:6,
    width:35

  }
 
})

export default Domain;