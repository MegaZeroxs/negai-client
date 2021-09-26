import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from '../../../assets/Styles';
import { ItemScrollCard } from '../components/ItemScrollCard';

export const NewContent = () => {
    return (
        <View style={styles.section_container}>
            <Text style={styles.section_title}>Lo nuevo</Text>
            <View style={styles.list_container}>
                <ScrollView horizontal={true}>
                    <ItemScrollCard title="Houseki no kuni" vol="1" price="14.99" />
                    <ItemScrollCard title="Vinland Saga" vol="11" price="14.99" />
                    <ItemScrollCard title="Vinland Saga" vol="11" price="14.99" />
                </ScrollView>
            </View>
        </View>
    )
}