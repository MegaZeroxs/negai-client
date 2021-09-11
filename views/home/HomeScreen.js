import React from 'react';
import { Text, View, Button } from 'react-native';

export const HomeScreen = ({ setLoginState }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Button onPress={setLoginState} title="Cambiar Estado" />
        </View>
    )
}
