import React from 'react';
import { SafeAreaView, ScrollView, View, TouchableHighlight, Text } from 'react-native';
import { styles } from '../../../assets/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from "@react-navigation/stack";
import { CollectionCards } from './CollectionCards';

export const CollectionDetailsScreen = ({ navigation, route }) => {
    const { collection_id, collection_name } = route.params;
    return (
        <SafeAreaView>
            <View>
                <TouchableHighlight style={styles.header_go_back} onPress={() => navigation.goBack()} underlayColor="white">
                    <Text style={styles.txt_header_custom}><Icon style={styles.txt_header_icon_custom} name="arrow-back-outline" /> Volver</Text>
                </TouchableHighlight>
            </View>
            <ScrollView style={styles.scroolview_container}>
                <CollectionCards collection_id={collection_id} navigation={navigation} title={collection_name} />
            </ScrollView>
        </SafeAreaView>
    );
}