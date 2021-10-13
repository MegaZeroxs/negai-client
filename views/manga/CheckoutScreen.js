import React, {useState} from 'react';
import { styles } from '../../assets/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View, Image, Pressable, ImageBackground, FlatList, ScrollView, SafeAreaView, TouchableHighlight } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useFetchComicData } from '../../hooks/useFetchComicData';

export const CheckoutScreen = ({route, navigation }) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const { id_comic } = route.params;
    const {data:comic, loading } = useFetchComicData(id_comic);
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.scroolview_container}>
                <View>
                    <TouchableHighlight style={styles.header_go_back} onPress={() => navigation.goBack()} underlayColor="white">
                        <Text style={styles.txt_header_custom}><Icon style={styles.txt_header_icon_custom} name="arrow-back-outline" /> Volver</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.section_100_container_black}>
                    <View style={styles.hl_sec_container}>
                        <View style={styles.hl_img_card_container}>
                            <View style={styles.hl_card_container}>
                                <Image style={styles.hl_card_img} source={{uri: comic.image}} />
                            </View>
                        </View>
                        <View style={styles.hl_card_container}>
                            <Text style={styles.hl_card_title} numberOfLines={1}>{comic.title}</Text>
                            <Text style={styles.hl_card_dsc} numberOfLines={6}>{comic.vol}</Text>
                            <View style={styles.checkout_detail_container}>
                                <Text style={styles.checkout_detail_text}>Autor: {comic.author}</Text>
                                <Text style={styles.checkout_detail_text}>Editorial: {comic.publisher}</Text>
                                <Text style={styles.checkout_detail_text}>Tipo: {comic.type}</Text>
                                <Text style={styles.checkout_detail_text}>Edición: {comic.edition}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.detail_container}>
                    <View style={styles.padding_container}>
                        <Text style={styles.dsc_title} numberOfLines={1}><Icon style={styles.txt_subtitle_icon_custom} name="cart-outline" /> Entrega:</Text>
                        <Picker
                            textStyle={styles.text_picker_style}
                            style={styles.picker_style}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>
                            <Picker.Item label="Casita" value="1" />
                            <Picker.Item label="Casita #2" value="2" />
                        </Picker>
                        <Text style={[styles.dsc_title, styles.padding_top]} numberOfLines={1}><Icon style={styles.txt_subtitle_icon_custom} name="cash-outline" /> Detalles del producto:</Text>
                    </View>
                    <View style={styles.padding_top}>
                        <View style={styles.detail_checkout}><Text style={styles.detail_text_checkout}>{comic.title} - {comic.vol} + IVA</Text><Text style={styles.detail_price_checkout}>${parseFloat(comic.price).toFixed(2)}</Text></View>
                        <View style={styles.detail_checkout}><Text style={styles.detail_text_checkout}>Vinland Saga Volumen 15 + IVA</Text><Text style={styles.detail_price_checkout}>$2.99</Text></View>
                        <View style={[styles.detail_checkout, styles.padding_top]}><Text style={styles.detail_text_checkout}></Text><Text style={styles.detail_price_checkout}>Total: ${(parseFloat(comic.price) + 2.99).toFixed(2)}</Text></View>
                    </View>
                    <View style={[styles.btn_containers_row, styles.flex_end]}>
                        <Pressable style={[styles.btn, styles.btn_primary]} onPress={() => navigation.navigate('Registrarme')}><Text style={[styles.btn_text, styles.btn_text_primary]}>Ordenar</Text></Pressable>
                        <Pressable style={[styles.btn, styles.btn_cancel]} onPress={() => navigation.navigate('Iniciar sesión')}><Text style={[styles.btn_text, styles.btn_text_cancel]}>Cancelar</Text></Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}