import React from 'react';
import { Text, View, Button } from 'react-native';
import { WelcomeScreen } from './views/welcome/WelcomeScreen';
import { UserContext } from './context/UserContext';
import { useSession } from './hooks/useSession';
import { TabNavigator } from './navigation/TabNavigator';

export default function App() {
  // Hook de la sesión
  const [sessionData, sessionState, setLoginState] = useSession();
  //
  if (sessionState() === 'offline') {
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