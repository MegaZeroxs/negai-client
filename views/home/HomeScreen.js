import React from 'react';
import { Text, View, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { styles } from '../../assets/Styles'
import { HightlightCard } from './components/HightlightCard';
import { ItemScrollCard } from './components/ItemScrollCard';

export const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.scroolview_container}>
                <View style={styles.section_container}>
                    <Text style={styles.section_title}>Lo nuevo</Text>
                    <View style={styles.list_container}>
                        <ScrollView horizontal={true}>
                            <ItemScrollCard title="Houseki no kuni" vol="1" price="14.99" />
                            <ItemScrollCard title="Vinland Saga" vol="11" price="14.99" />
                            <ItemScrollCard title="Vinland Saga" vol="11" price="14.99" />
                        </ScrollView>
                    </View>
                </View>
                <ImageBackground source={require('../../assets/covers/001/cover.jpg')} resizeMode="cover" style={styles.hl_background}>
                    <View style={styles.section_100_container}>
                        <View style={styles.hl_sec_container}>
                            <HightlightCard
                                dsc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam turpis at ante fermentum molestie ac eget mi. Sed ultricies facilisis tempor. Duis augue dui, tincidunt eu scelerisque a, venenatis ac odio. Aenean venenatis erat id pellentesque ullamcorper. Sed commodo vehicula erat quis convallis. Nulla porttitor elit rhoncus, tempus leo at, mattis magna. Vivamus bibendum, mi ac finibus sagittis, libero ipsum facilisis dolor, eu aliquam velit ex ac ligula. Vestibulum a ullamcorper lorem."
                                title="Houseki no kuni"
                                vol="1"
                                price="14.99"
                            />
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}