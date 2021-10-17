import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from '../../../assets/Styles';

export const ItemCard = ({ title, price, vol }) => {
    return (
        <View style={styles.card_container}>
            <Image style={styles.card_img} source={require('../../../assets/covers/001/cover.jpg')} />
            <Text style={styles.card_title} numberOfLines={1}>{title}</Text>
            <Text style={styles.card_price}>Volumen {vol} - ${price}</Text>
        </View>
    );
}