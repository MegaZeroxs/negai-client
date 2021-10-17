import React from 'react';
import { Text, View, Button, StyleSheet, SafeAreaView, ScrollView, TextInput, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart'; // Import package from node modules

import { styles } from '../../assets/Styles';
// ..
export const UserConfigScreen = ({ setLoginState }) => {


    const logOut = async () => {
        try {
            const jsonValue = JSON.stringify({success: false})
            await AsyncStorage.setItem('sessionData', jsonValue)
            RNRestart.Restart();
        } catch (e) {
            // saving error
        }
    }

    return (
        <SafeAreaView style={[styles.scroolview_container, { flex: 1 }]}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={[styles.section_container, style.container]}>
                    <View style={style.config_container}>
                        <View>
                            <Text style={styles.label}>Nombre</Text>
                            <TextInput style={styles.input} keyboardType="default" />
                        </View>
                        <View>
                            <Text style={styles.label}>Apellido</Text>
                            <TextInput style={styles.input} keyboardType="default" />
                        </View>
                        <View>
                            <Text style={styles.label}>Correo</Text>
                            <TextInput style={styles.input} keyboardType="email-address" />
                        </View>
                        <View>
                            <Text style={styles.label}>Teléfono</Text>
                            <TextInput style={styles.input} keyboardType="number-pad" />
                        </View>
                        <View>
                            <Text style={styles.label}>Dirección principal</Text>
                            <TextInput style={styles.input} keyboardType="default" multiline={true} />
                            <Text style={[styles.btn_inline, styles.btn_text_right]}>Agregar dirección</Text>
                        </View>
                    </View>
                    <View style={style.btn_containers}>
                        <Pressable
                            style={[styles.btn, styles.btn_primary]}
                            onPress={() => navigation.navigate('Registrarme')}
                        >
                            <Text style={[styles.btn_text, styles.btn_text_primary]}>
                                Guardar cambios
                            </Text>
                        </Pressable>
                        <Pressable
                            style={[styles.btn, styles.btn_normal]}
                            onPress={logOut}
                        >
                            <Text style={styles.btn_text}>Cerrar sesión</Text>
                        </Pressable>
                        <Text style={styles.btn_text_footer}>&copy; 2021 - Negai</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
        flexDirection: 'column'
    },
    config_container: {
        flex: 1,
    },
    btn_direction: {
        textAlign: 'right',
    },
});
