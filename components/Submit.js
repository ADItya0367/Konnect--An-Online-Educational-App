import React from 'react'
import { StyleSheet, TouchableOpacity,Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const Submit=(props)=>{
      const enabledBgColor ='black'
      const disabledBgColor='#c4bcb3'
      const bgColor= props.disabled ? disabledBgColor : enabledBgColor
    return (
        <TouchableOpacity onPress={props.disabled ? ()=>{}: props.onPress} 
        style={{alignItems:'center',marginTop:18,borderWidth:1,backgroundColor:'black',borderRadius:10,paddingHorizontal:16}}>
        <Text style={{padding:6,color:'white'}}>Submit <AntDesign name="rightcircle" size={16} color="white" /></Text>
    </TouchableOpacity>
    )
}

const styles=StyleSheet.create({

})

export default Submit