import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';
import { HomeScreen } from '../views/home/HomeScreen';

export const TabNavigator = ({setLoginState}) => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Inicio') {
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
                    tabBarShowLabel: false
                })}

            >
{/*                 <Tab.Screen name="Home">
                    {() => <HomeScreen setLoginState={setLoginState} />}
                </Tab.Screen> */}
                <Tab.Screen name="Inicio" component={HomeScreen} />
                <Tab.Screen name="Búscar" component={HomeScreen} />
                <Tab.Screen name="Mis compras" component={HomeScreen} />
                <Tab.Screen name="Lista de deseos" component={HomeScreen} />
                <Tab.Screen name="Settings" component={HomeScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
