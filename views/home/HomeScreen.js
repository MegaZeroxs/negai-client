import React from 'react';
import { Text, View, Button, SafeAreaView, ScrollView, StyleSheet, Image, Pressable, ImageBackground, Dimensions } from 'react-native';
// ..
const win = Dimensions.get('window');
const ratio = win.width / 540; // Anchura de la imagen

const ItemCard = ({ title, price, vol }) => {
    return (
        <View style={styles.card_container}>
            <Image style={styles.card_img} source={require('../../assets/covers/001/cover.jpg')} />
            <Text style={styles.card_title} numberOfLines={1}>{title}</Text>
            <Text style={styles.card_price}>Volumen {vol} - ${price}</Text>
        </View>
    );
}

const HightlightCard = ({ title, dsc }) => {
    return (
        <>
            <View style={styles.hl_img_card_container}>
                <View style={styles.hl_card_container}>
                    <Image style={styles.hl_card_img} source={require('../../assets/covers/001/cover.jpg')} />
                </View>
            </View>
            <View style={styles.hl_card_container}>
                <Text style={styles.hl_card_title} numberOfLines={1}>{title}</Text>
                <Text style={styles.hl_card_dsc} numberOfLines={6}>{dsc}</Text>
                <View style={styles.btn_containers_row}>
                    <Pressable
                        style={[styles.btn, styles.btn_mini]}
                        onPress={() => navigation.navigate('Iniciar sesión')}>
                        <Text style={styles.btn_mini_text}>Ver colección</Text>
                    </Pressable>
                </View>
            </View>
        </>
    );
}

export const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.scroolview_container}>
                <View style={styles.section_container}>
                    <Text style={styles.section_title}>Lo nuevo</Text>
                    <View style={styles.list_container}>

                        <ItemCard title="Houseki no kuni" vol="1" price="14.99" />
                        <ItemCard title="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" vol="11" price="14.99" />
                        <ItemCard title="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" vol="11" price="14.99" />
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

const styles = StyleSheet.create({
    scroolview_container: {
        backgroundColor: '#FFFFFF',
    },
    section_container: {
        padding: 15,
        paddingTop: 0
    },
    list_container: {
        paddingTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
    },
    card_container: {
        flexBasis: '48%',
        paddingBottom: 15
    },
    card_img: {
        width: (win.width / 2.25),
        height: 340 * ratio, //340 es la altura de los cover originales
    },
    card_title: {
        fontFamily: 'CreatoDisplay-Regular',
        color: '#686868',
        fontSize: 15,
        width: '100%'
    },
    card_price: {
        fontFamily: 'CreatoDisplay-Bold',
        color: '#000',
        fontSize: 14
    },
    section_title: {
        fontFamily: 'CreatoDisplay-Regular',
        fontSize: 18
    },
    // Highlight

    section_100_container: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.50)',
    },
    hl_img_card_container: {
        padding: 15,
        paddingTop: 0,
        flexBasis: '40%',
    },
    hl_card_container: {
        paddingVertical: 5,
        paddingRight: 15,
        flexBasis: '60%',
    },
    hl_card_img: {
        width: (win.width / 3),
        height: (340 * ratio) / 1.2, //340 es la altura de los cover originales
    },
    hl_sec_container: {
        paddingTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
    },
    hl_background: {
        flex: 1,
        justifyContent: "flex-start"
    },
    hl_card_title: {
        fontFamily: 'CreatoDisplay-Bold',
        color: '#FFFFFF',
        fontSize: 19,
        width: '100%'
    },
    hl_card_dsc: {
        fontFamily: 'CreatoDisplay-Bold',
        color: '#FFFFFF',
        fontSize: 14,
        marginTop: 5,
        width: '100%',
    },
    btn: {
        backgroundColor: "#FFF",
        color: "#000",
        marginTop: 15,
        padding: 12,
        borderWidth: 2,
        width: "100%",
        alignItems: 'center'
    },
    btn_mini_text: {
        fontSize: 16,
        color: '#FFF',
        fontFamily: 'CreatoDisplay-Bold'
    },
    btn_mini: {
        backgroundColor: 'transparent',
        borderColor: "#FFF",
        padding: 5
    }
});