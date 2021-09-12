import React, { useContext } from 'react'
import { Image, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from '../views/home/HomeScreen';
import { useHeaderHeight } from '@react-navigation/elements';

export const TabNavigator = ({ setLoginState }) => {
    function LogoHeader() {
        return (
            <View style={{ flexDirection: 'column-reverse', flexWrap: 'wrap', marginBottom: 5 }}>
                <Text style={{
                    fontSize: 40,
                    fontFamily: 'CreatoDisplay-Black',
                }}>N</Text>
                <Text style={{
                    fontSize: 26,
                    marginBottom: 3,
                    fontFamily: 'CreatoDisplay-Black',
                }}>EGAI</Text>
            </View>
        );
    }

    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Inicio') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Buscar') {
                            iconName = focused ? 'search' : 'search-outline';
                        } else if (route.name === 'Mis compras') {
                            iconName = focused ? 'book' : 'book-outline';
                        } else if (route.name === 'Lista de deseos') {
                            iconName = focused ? 'bookmarks' : 'bookmarks-outline';
                        } else if (route.name === 'Configuración') {
                            iconName = focused ? 'person-circle' : 'person-circle-outline';
                        }

                        // You can return any component that you like here!
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#f04e98',
                    tabBarInactiveTintColor: 'gray',
                    tabBarShowLabel: false
                })}>
                {/*                 <Tab.Screen name="Home">
                    {() => <HomeScreen setLoginState={setLoginState} />}
                </Tab.Screen> */}
                <Tab.Screen name="Inicio" options={{
                    headerTitle: props =>
                        <LogoHeader />
                }} component={HomeScreen} />
                <Tab.Screen name="Buscar" component={HomeScreen} />
                <Tab.Screen name="Mis compras" component={HomeScreen} />
                <Tab.Screen name="Lista de deseos" component={HomeScreen} />
                <Tab.Screen name="Configuración" component={HomeScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
