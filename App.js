import React from 'react';
import { Text, View, Button } from 'react-native';
import { WelcomeScreen } from './views/welcome/WelcomeScreen';
import { UserContext } from './context/UserContext';
import { useSession } from './hooks/useSession';
import { TabNavigator } from './navigation/TabNavigator';

export default function App() {

  const HomeScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button onPress={setLoginState} title="Cambiar Estado" />
      </View>
    );
  }
  // Hook de la sesión
  const [sessionData, sessionState, setLoginState] = useSession();
  //
  if (sessionState() === 'offline') {
    return (
      <UserContext.Provider value={sessionData}>
        <WelcomeScreen setLoginState={setLoginState} />
      </UserContext.Provider>);
  } else {
    return (
      <UserContext.Provider value={sessionData}>
        <TabNavigator setLoginState={setLoginState} />
      </UserContext.Provider>
    );
  }
}