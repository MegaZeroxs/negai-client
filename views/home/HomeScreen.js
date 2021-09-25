import React from 'react';
import { Text, View, Button, SafeAreaView, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
// ..
const win = Dimensions.get('window');
const ratio = win.width / 541; //541 is actual image width

const ItemCard = ({title, price}) => {
    return (
        <View style={styles.card_container}>
            <Image style={styles.card_img} source={require('../../assets/covers/001/cover.jpg')} />
            <Text>{title}</Text>
            <Text>{price}</Text>
        </View>
    );
}

export const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.scroolview_container}>
                <View style={styles.section_container}>
                    <View style={styles.list_container}>
                        <ItemCard title="Houseki no kuni - Vol 1" price="3.99" />
                        <ItemCard title="Houseki no kuni - Vol 1" price="3.99" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scroolview_container: {
        backgroundColor: '#FFFFFF'
    },
    list_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
        width: '100%',
        alignItems: 'center',
    },
    card_container: {
        flexBasis: '50%',
        alignItems: 'center',
    },
    card_img: {
        width: (win.width / 2.4),
        height: 340 * ratio, //340 es la altura de los cover originales
    }
});