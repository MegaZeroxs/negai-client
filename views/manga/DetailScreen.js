import React from 'react'
import { View, Text, Button } from 'react-native';

export const DetailScreen = ({navigation}) => {
    return (
        <View>
            <Text>Test</Text>
            <Button title="Hola" onPress={() => navigation.goBack()} />
        </View>
    )
}
