import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { styles } from '../../../assets/Styles';
import { useFetchComicBills } from '../../../hooks/useFetchComicBills';
import { ItemShoppingCards } from './ItemShoppingCard';

export const ShoppingListCards = ({ navigation, title }) => {

    const { data:comics, loading } = useFetchComicBills();

    return (
        <View style={styles.section_container}>
            {/*<Text style={styles.section_title}>{title}</Text>*/}
            <View style={styles.list_container}>

                    {loading && <Text>Loading...</Text>}
                    {
                        comics.map(data_comic => (
                            <ItemShoppingCards key={data_comic.id} navigation={navigation} {...data_comic} />
                        ))
                    }

            </View>
        </View>
    )
}