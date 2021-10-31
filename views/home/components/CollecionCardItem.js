import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../../../assets/Styles';

export const CollectionCardItem = ({ id, price, image, vol = '1', navigation }) => {
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("DetailManga", {id_comic: id})} >
            <View style={styles.shopping_card_container}>
                <Image style={styles.card_img} source={{uri: image}} />
                <Text style={styles.card_title} numberOfLines={1}>
                    {vol.length < 22 ? (vol).slice(0, 22) : (vol).slice(0, 22).concat('...')}
                </Text>
                <Text style={styles.card_price}>${price}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}