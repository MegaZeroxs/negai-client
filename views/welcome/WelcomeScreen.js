import React, { useContext } from 'react';
import { Text, View, Image, Pressable, StyleSheet, ImageBackground } from 'react-native';
import { UserContext } from '../../context/UserContext';

export const WelcomeScreen = ({ setLoginState }) => {

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
                        <Text style={styles.big_title}>Compra tu serie favorita, ¿O tal vez la próxima?</Text>
                        <Pressable style={[styles.btn, styles.btn_normal]} onPress={setLoginState}><Text style={styles.btn_text}>Iniciar sesión</Text></Pressable>
                        <Pressable style={[styles.btn, styles.btn_primary]} onPress={setLoginState}><Text style={[styles.btn_text, styles.btn_text_primary]}>Registrarse</Text></Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        resizeMode: 'contain',
        width: '45%',
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
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: "CreatoDisplay-ExtraBold"
    },
    btn_containers: {
        justifyContent: "flex-end",
        flex: 1,
    },
    btn_containers_row: {
        backgroundColor: "#FFF",
        paddingVertical: 40,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    btn: {
        backgroundColor: "#FFF",
        color: "#000",
        marginTop: 15,
        padding: 15,
        borderWidth: 2,
        width: "100%",
        alignItems: 'center'
    },
    btn_text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    btn_primary: {
        borderColor: "#c92976",
    },
    btn_text_primary: {
        color: "#c92976"
    }
});