import React, { useContext } from 'react';
import { Text, View, Image, Pressable, StyleSheet, ImageBackground } from 'react-native';
import { UserContext } from '../../context/UserContext';
import LoginScreen from '../login/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from '../register/RegisterScreen';

const WelcomeOptionScreen = ({navigation}) => {
    
    const { setLoginState } = useContext(UserContext);
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/test_img/login.jpg')} resizeMode="cover" style={styles.image}>
                <View style={styles.header}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/logo.png')}
                    />
                </View>
                <View style={styles.btn_containers}>
                    <View style={styles.btn_containers_row}>
                        <Text style={styles.big_title}>Compra tu serie favorita... ¿O tal vez la próxima?</Text>
                        <Pressable style={[styles.btn, styles.btn_normal]} onPress={() => navigation.navigate('Iniciar sesión')}><Text style={styles.btn_text}>Iniciar sesión</Text></Pressable>
                        <Pressable style={[styles.btn, styles.btn_primary]} onPress={() => navigation.navigate('Registrarme')}><Text style={[styles.btn_text, styles.btn_text_primary]}>Registrarse</Text></Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const Stack = createStackNavigator();
export const WelcomeScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{headerShown: false}} component={WelcomeOptionScreen} />
                <Stack.Screen name="Iniciar sesión" component={LoginScreen} />
                <Stack.Screen name="Registrarme" component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        resizeMode: 'contain',
        width: '40%',
        height: 75
    },
    header: {
        backgroundColor: "#FFF",
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        justifyContent: "flex-start"
    },
    big_title: {
        fontSize: 24.5,
        fontFamily: 'CreatoDisplay-Black',
        marginBottom: 15
    },
    btn_containers: {
        justifyContent: "flex-end",
        flex: 1,
    },
    btn_containers_row: {
        backgroundColor: "#FFF",
        paddingVertical: 35,
        alignItems: 'center',
        paddingHorizontal: 32,
    },
    btn: {
        backgroundColor: "#FFF",
        color: "#000",
        marginTop: 15,
        padding: 12,
        borderWidth: 2,
        width: "100%",
        alignItems: 'center'
    },
    btn_text: {
        fontSize: 20,
        fontFamily: 'CreatoDisplay-Bold'
    },
    btn_primary: {
        borderColor: "#f04e98",
    },
    btn_text_primary: {
        color: "#f04e98"
    }
});