import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';
import { WelcomeScreen } from './views/welcome/WelcomeScreen';
import { UserContext } from './context/UserContext';
import { useSession } from './hooks/useSession';

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
  const Tab = createBottomTabNavigator();
  if (sessionState() === 'offline') {
    return (
      <UserContext.Provider value={sessionData}>
        <WelcomeScreen setLoginState={setLoginState} />
      </UserContext.Provider>);
  } else {
    return (
      <UserContext.Provider value={sessionData}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'ios-list-box' : 'ios-list';
                }
                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={HomeScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    );
  }
}