import React from 'react';
import { Text, View, Image, Pressable, ImageBackground, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { styles } from '../../../assets/Styles';

export const HeadComic = ({ id, title, dsc, vol, price, author, edition, publisher, type, release, navigation, image }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.scroolview_container}>
                <ImageBackground source={{uri: image}} resizeMode="cover" style={styles.hl_background}>
                    <View style={styles.section_100_container}>
                        <View style={styles.hl_sec_container}>
                            <View style={styles.hl_img_card_container}>
                                <View style={styles.hl_card_container}>
                                    <Image style={styles.hl_card_img} source={{uri: image}} />
                                </View>
                            </View>
                            <View style={styles.hl_card_container}>
                                <Text style={styles.hl_card_title} numberOfLines={1}>{title}</Text>
                                <Text style={styles.hl_card_dsc} numberOfLines={6}>{vol}</Text>
                                <View style={styles.btn_containers_row}>
                                    <Pressable
                                        style={[styles.btn, styles.btn_mini]}
                                        onPress={() => navigation.navigate('Iniciar sesión')}>
                                        <Text style={styles.btn_mini_text}>Añadir a lista de deseos</Text>
                                    </Pressable>
                                    <Pressable
                                        style={[styles.btn, styles.btn_mini]}
                                        onPress={() => navigation.navigate('Pago', {id_comic: id})}>
                                        <Text style={styles.btn_mini_text}>Ordenar ${price}</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.detail_container}>
                    <View style={styles.padding_container}>
                        <Text style={styles.dsc_title} numberOfLines={1}>Descripción:</Text>
                        <Text style={styles.dsc_text} numberOfLines={5}>{dsc}</Text>
                        <Text style={styles.dsc_title} numberOfLines={1}>Detalles del producto:</Text>
                    </View>
                    <View style={styles.list_detail_container}>
                        <Text style={styles.list_text}>Autor: {author}</Text>
                        <Text style={styles.list_text}>Editorial: {publisher}</Text>
                        <Text style={styles.list_text}>Tipo: {type}</Text>
                        <Text style={styles.list_text}>Edición: {edition}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}