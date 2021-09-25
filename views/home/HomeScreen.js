import React from 'react';
import { Text, View, Button, SafeAreaView, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
// ..
const win = Dimensions.get('window');
const ratio = win.width / 541; //541 is actual image width

const ItemCard = ({title, price, vol}) => {
    return (
        <View style={styles.card_container}>
            <Image style={styles.card_img} source={require('../../assets/covers/001/cover.jpg')} />
            <Text style={styles.card_title} numberOfLines={1} style={{ width: '100%'}}>{title}</Text>
            <Text style={styles.card_price}>Volumen {vol} - ${price}</Text>
        </View>
    );
}

export const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.scroolview_container}>
                <View style={styles.section_container}>
                    <Text>Hola</Text>
                    <View style={styles.list_container}>
                        <ItemCard title="Houseki no kuni" vol="1" price="14.99" />
                        <ItemCard title="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" vol="11" price="14.99" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scroolview_container: {
        backgroundColor: '#FFFFFF',
    },
    section_container:{
        padding: 15,
        paddingTop: 0
    },
    list_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
    },
    card_container: {
        flexBasis: '48%',
    },
    card_img: {
        width: (win.width / 2.25),
        height: 340 * ratio, //340 es la altura de los cover originales
    },
    card_title:{
        fontFamily: 'CreatoDisplay-Regular',
        color: '#686868',
        fontSize: 15
    },
    card_price:{
        fontFamily: 'CreatoDisplay-Bold',
        color: '#000',
        fontSize: 14
    }
});