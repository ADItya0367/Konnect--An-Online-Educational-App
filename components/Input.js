//chat screen hi home hai 
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';
 const Input=props=> {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
     <View style={styles.inputContainer}>
     <Feather name="user" size={24} color="black" style={styles.icon} />
        <TextInput style={styles.inpt}/>
     </View>
     { props.errortext &&
     <View style={styles.errorContainer}>
      <Text style={styles.errortext}>
        {props.errortext}
      </Text>
     </View>
 }
    </View>
  )
}


const styles=StyleSheet.create({
  container:{
    width:'100%',
   
  },
  label:{
      marginVertical:8,
      letterSpacing:0.3,
      color:'#1c1e21'
  },
  inputContainer:{
    width:'100%',
    borderWidth:1,
    borderColor:'black',
    padding:10,
    borderRadius:8,
    flexDirection:'row',
    
  },
  icon:{
    marginRight:10
  },
  inpt:{
     color:"#1c1e21",
     flex:1,
     letterSpacing:0.3,
     paddingTop:0
  },
  errorContainer:{
  marginVertical:2
  },
  errortext:{
      color:'red',
      fontSize:13
  }
})

export default Input;