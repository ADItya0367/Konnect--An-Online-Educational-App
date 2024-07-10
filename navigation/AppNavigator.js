import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './MainNavigator';
import Courses from '../screens/Courses';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';

const AppNavigator=()=>{

    const isAuth= true;

    return (
        <NavigationContainer>
       {isAuth && <MainNavigator/> }
       {!isAuth && <SignUp/> }
     </NavigationContainer>
    )
}

export default AppNavigator;