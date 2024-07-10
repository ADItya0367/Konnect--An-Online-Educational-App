//SignUp Page
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

 const PageContainer=props=> {
  return (
    <View style={styles.container}>
      {props.children}
     
    </View>
  )
}


const styles=StyleSheet.create({
  container:{
    paddingHorizontal:20,
    
    backgroundColor:'red'
  }
})

export default PageContainer;