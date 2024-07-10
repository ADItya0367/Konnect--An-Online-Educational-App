//chat screen hi home hai 
import React from 'react'
import { View, Text, Button } from 'react-native'
import Domain from './screens/Domain'
import * as Icon from "react-native-feather";
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native';
import {StatusBar} from 'expo-status-bar'
import tw from 'twrnc'
import { themeColors } from './screens/theme';
import { ScrollView } from 'react-native-gesture-handler';
import Categories from './components/categories';

 const ChatScreen=props=> {
  return (
  
<SafeAreaView style={tw`bg-white `}>
<StatusBar barStyle={'dark-content'}/>
<View style={tw`flex-row items-center px-4 pb-2`}>
  <View className="flex-row flex-1 items-center p-3 rounded-full border border-black mt--0">
   <Icon.Search height={25} width={25} stroke="gray"/>
   <TextInput placeholder='Technologies' className="ml-2 flex-1"/>
   <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300 ">
    <Icon.MapPin height={20} width={20} stroke="gray"/>
    <Text className="text-gray-600">Codepect</Text>
    </View>
    </View>
</View>
<View  style={{backgroundColor:themeColors.bgColor(1)}} className="p-3 rounded-full">
  <Icon.Sliders height={20} width={20} strokeWidth={2.5} stroke="white"/>
</View>

{/* main */}
<ScrollView showsVerticalScrollIndicator={false}
contentContainerStyle={{paddingBottom:20}}
>

</ScrollView>
<Categories/>
</SafeAreaView>
  )
}




export default ChatScreen;