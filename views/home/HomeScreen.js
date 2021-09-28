import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { styles } from '../../assets/Styles'
import { HightlightCard } from './components/HightlightCard';
import { NewContent } from './components/NewContent';
import { createStackNavigator } from "@react-navigation/stack";
import { DetailScreen } from '../manga/DetailScreen';
const Stack = createStackNavigator();

export const HomeContent = ({navigation}) => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.scroolview_container}>
                <NewContent navigation={navigation} />
                <HightlightCard
                    dsc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam turpis at ante fermentum molestie ac eget mi. Sed ultricies facilisis tempor. Duis augue dui, tincidunt eu scelerisque a, venenatis ac odio. Aenean venenatis erat id pellentesque ullamcorper. Sed commodo vehicula erat quis convallis. Nulla porttitor elit rhoncus, tempus leo at, mattis magna. Vivamus bibendum, mi ac finibus sagittis, libero ipsum facilisis dolor, eu aliquam velit ex ac ligula. Vestibulum a ullamcorper lorem."
                    title="Houseki no kuni"
                    vol="1"
                    price="14.99"
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export const HomeScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}}  name="Home" component={HomeContent} />
            <Stack.Screen options={{headerShown: false}} name="DetailManga" component={DetailScreen} />
        </Stack.Navigator>
    )
}