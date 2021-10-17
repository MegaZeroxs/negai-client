import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { styles } from '../../../assets/Styles';
import { useFetchCollectionComics } from '../../../hooks/useFetchCollectionComics';
import { CollectionCardItem } from './CollecionCardItem';

export const CollectionCards = ({ navigation, title, collection_id }) => {
    const { data: comics, loading } = useFetchCollectionComics(collection_id);
    return (
        <View style={styles.section_container}>
            <Text style={styles.section_title}>Serie: {title}</Text>
            <View style={styles.list_container}>

                    {loading && <Text>Loading...</Text>}
                    {
                        comics.map(data_comic => (
                            <CollectionCardItem key={data_comic.id} navigation={navigation} {...data_comic} />
                        ))
                    }

            </View>
        </View>
    )
}