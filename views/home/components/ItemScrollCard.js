import React from 'react';
import { Text, View, Image} from 'react-native';
import { styles } from '../../../assets/Styles';

export const ItemScrollCard = ({ title, price, vol }) => {
    return (
        <View style={styles.card_scroll_container}>
            <Image style={styles.card_img} source={require('../../../assets/covers/001/cover.jpg')} />
            <Text style={styles.card_title} numberOfLines={1}>
                {title.length < 22 ? (title).slice(0, 22) : (title).slice(0, 22).concat('...')}
            </Text>
            <Text style={styles.card_price}>Volumen {vol} - ${price}</Text>
        </View>
    );
}