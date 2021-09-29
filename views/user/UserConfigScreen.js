import React from 'react';
import { Text, View, Button } from 'react-native';
// ..
export const UserConfigScreen = ({ setLoginState }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
            <Text>Desloguearse</Text>
            <Button onPress={setLoginState} title="Ir offline" />
        </View>
    )
}
