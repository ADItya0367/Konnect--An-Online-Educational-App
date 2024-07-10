import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import AppNavigator from './navigation/AppNavigator';

SplashScreen.preventAutoHideAsync()

export default function App() {

 const [appIsloaded, setappIsLoaded] = useState(false);

 useEffect(() => {

  setTimeout(() => {
    setappIsLoaded(true);
    SplashScreen.hideAsync();
  }, 3000);

 
 }, []);

  return (
    <SafeAreaProvider style={styles.container} >
      <AppNavigator/>
      </SafeAreaProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
    justifyContent: 'center',
  },
  but:{
    color: 'black',
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 10,
    margin: 100
  },
  txt:{
    color: 'black',
    fontSize: 25,
    fontFamily: 'Caudex-Regular',
    fontWeight: 'bold',
  }
});
