import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { styles } from '../../assets/Styles'
import { createStackNavigator } from "@react-navigation/stack";
import { DetailScreen } from '../manga/DetailScreen';
import { CheckoutScreen } from '../manga/CheckoutScreen';
import { ShoppingListCards } from './components/ShoppingListCards';

const Stack = createStackNavigator();

export const HomeContent = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.scroolview_container}>
                <ShoppingListCards navigation={navigation} title="Mis compras" />
            </ScrollView>
        </SafeAreaView>
    );
}

export const ShoppingListScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeContent} />
            <Stack.Screen options={{ headerShown: false }} name="DetailManga" component={DetailScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Pago" component={CheckoutScreen} />
        </Stack.Navigator>
    )
}