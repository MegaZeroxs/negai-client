import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { styles } from '../../../assets/Styles';
import { useFetchComicsHome } from '../../../hooks/useFetchComicsHome';
import { ItemScrollCard } from './ItemScrollCard';

export const ScrollCards = ({ navigation, title }) => {

    const {data:comics, loading } = useFetchComicsHome( );
    return (
        <View style={styles.section_container}>
            <Text style={styles.section_title}>{title}</Text>
            <View style={styles.list_container}>
                <ScrollView horizontal={true}>

                    {loading && <Text>Loading...</Text>}
                    {console.log(comics)}
                    {
                        comics.map(data_comic => (
                            <ItemScrollCard key={data_comic.id} navigation={navigation} {...data_comic} />
                        ))
                    }

                </ScrollView>
            </View>
        </View>
    )
}