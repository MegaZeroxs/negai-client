import React from 'react'
import { SafeAreaView, ScrollView, View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../assets/Styles';
import { HeadComic } from './components/HeadComic';

export const DetailScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.scroolview_container}>
                <View>
                    <TouchableHighlight style={styles.header_go_back} onPress={() => navigation.goBack()} underlayColor="white">
                        <Text style={styles.txt_header_custom}><Icon style={styles.txt_header_icon_custom} name="arrow-back-outline" /> Volver</Text>
                    </TouchableHighlight>
                </View>
                <HeadComic
                    dsc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam turpis at ante fermentum molestie ac eget mi. Sed ultricies facilisis tempor. Duis augue dui, tincidunt eu scelerisque a, venenatis ac odio. Aenean venenatis erat id pellentesque ullamcorper. Sed commodo vehicula erat quis convallis. Nulla porttitor elit rhoncus, tempus leo at, mattis magna. Vivamus bibendum, mi ac finibus sagittis, libero ipsum facilisis dolor, eu aliquam velit ex ac ligula. Vestibulum a ullamcorper lorem."
                    title="Houseki no kuni"
                    vol="1"
                    price="14.99"
                    navigation={navigation}
                />
            </ScrollView>
        </SafeAreaView>
    )
}
