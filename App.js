import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import { WelcomeScreen } from './views/welcome/WelcomeScreen';
import { UserContext } from './context/UserContext';
import { useSession } from './hooks/useSession';
import { TabNavigator } from './navigation/TabNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {


  useEffect(() => {

    const sessionStatus = async () => {
      
      try {
        const jsonValue = await AsyncStorage.getItem('sessionData')
        let newObj;
        newObj = JSON.parse(jsonValue);
        if(newObj.success === true){
          setTest('online');
        }else{
          setTest('offline');
        }
      } catch (e) {
        // error reading value
      }
    }

    sessionStatus();

  }, [])

  const [test, setTest] = useState('offline')

  // Hook de la sesión
  const [sessionData, sessionState, setLoginState] = useSession();
  //
  if (test == 'offline') {
    return (
      <UserContext.Provider value={{sessionData, setLoginState}}>
        <WelcomeScreen />
      </UserContext.Provider>);
  } else {
    return (
      
      <UserContext.Provider value={sessionData}>
        <TabNavigator setLoginState={setLoginState} />
      </UserContext.Provider>
    );
  }
}