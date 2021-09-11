import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { UserContext } from '../../context/UserContext';

export const WelcomeScreen = ({ setLoginState }) => {
    const { status } = useContext(UserContext)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings</Text>
            <Button onPress={setLoginState} title="Cambiar Estado" />
        </View>
    );
};