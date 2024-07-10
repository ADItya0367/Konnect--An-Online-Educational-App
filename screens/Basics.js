//chat screen hi home hai 
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

 const Basics=props=> {
  return (
    <View style={styles.container}>
      <Text>Baics Screen</Text>
     
    </View>
  )
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default Basics;