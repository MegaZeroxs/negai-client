import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../../../assets/Styles';

export const ItemScrollCard = ({ id, title = '', price, image, vol = '1', navigation }) => {
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("DetailManga", {id_comic: id})} >
            <View style={styles.card_scroll_container}>
                <Image style={styles.card_img} source={{uri: image}} />
                <Text style={styles.card_title} numberOfLines={1}>
                    {title.length < 22 ? (title).slice(0, 22) : (title).slice(0, 22).concat('...')}
                </Text>
                <Text style={styles.card_price}>{vol} - ${price}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}