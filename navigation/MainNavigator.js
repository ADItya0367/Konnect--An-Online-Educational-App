import React from 'react'
import ChatSettings from '../screens/ChatSettings'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from '../ChatScreen';
import Settings from '../screens/Settings';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Basics from '../screens/Basics';
import Courses from '../screens/Courses';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Domain from '../screens/Domain';

const Stack = createStackNavigator()


const Tab = createBottomTabNavigator();

const TabNavigator = ()=>{

  return (
    <Tab.Navigator screenOptions={{ headerTitle:'' }}>
      <Tab.Screen name="ChatScreen" component={ChatScreen} options={{
        tabBarLabel:'Home',tabBarIcon:({color,size})=>{
             return <MaterialCommunityIcons name="home-circle" size={size} color={color } />
        }
      }}/>
      <Tab.Screen name="Settings" component={Settings} options={{
        tabBarLabel:'Tech',tabBarIcon:({color,size})=>{
          return <Entypo name="500px" size={size} color={color }  />
     }
      }}/>
       <Tab.Screen name="Baics" component={Basics} options={{
        tabBarLabel:'Basics',tabBarIcon:({color,size})=>{
          return <Ionicons name="newspaper" size={size} color={color }  />
     }
      }}/>
       <Tab.Screen name="Courses" component={Courses} options={{
        tabBarLabel:'Course',tabBarIcon:({color,size})=>{
          return <Entypo name="book" size={size} color={color }  />
     }
      }}/>
    </Tab.Navigator>
  )

}

const MainNavigator=()=>{
  return (
    <Stack.Navigator >
    <Stack.Screen name="Home" component={TabNavigator} options={{headerShown:false}} />
    <Stack.Screen name="ChatSettings" component={ChatSettings} options={{
      gestureEnabled:true,headerTitle:'Settings',headerTitleAlign:'center',headerBackTitle:"Back",
    } } />
    <Stack.Screen name="Domain" component={Domain} options={{headerShown:false}} />
   
  </Stack.Navigator>

  )
}

export default MainNavigator;