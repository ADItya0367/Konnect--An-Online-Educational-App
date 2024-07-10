
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

 const ChatSettings=props=> {
  return (
    <View style={styles.container}>
      <Text>Chat Settings</Text>
      <Button title='click me'/>
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

export default ChatSettings;