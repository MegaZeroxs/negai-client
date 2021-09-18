import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { UserContext } from '../../context/UserContext';

const LoginScreen = () => {

    const {setLoginState} = useContext(UserContext);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Iniciar sesion</Text>
            <Button onPress={setLoginState} title="Iniciar sesión" />
        </View>
    )
}

export default LoginScreen