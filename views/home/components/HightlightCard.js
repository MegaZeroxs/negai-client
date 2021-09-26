import React from 'react';
import { Text, View, Image, Pressable, ImageBackground } from 'react-native';
import { styles } from '../../../assets/Styles';

export const HightlightCard = ({ title, dsc }) => {
    return (
        <ImageBackground source={require('../../../assets/covers/001/cover.jpg')} resizeMode="cover" style={styles.hl_background}>
            <View style={styles.section_100_container}>
                <View style={styles.hl_sec_container}>
                    <View style={styles.hl_img_card_container}>
                        <View style={styles.hl_card_container}>
                            <Image style={styles.hl_card_img} source={require('../../../assets/covers/001/cover.jpg')} />
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
                </View>
            </View>
        </ImageBackground>
    );
}