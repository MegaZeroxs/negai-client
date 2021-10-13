import React from 'react'
import { SafeAreaView, ScrollView, View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../assets/Styles';
import { useFetchComicData } from '../../hooks/useFetchComicData';
import { HeadComic } from './components/HeadComic';

export const DetailScreen = ({ route, navigation }) => {
    const { id_comic } = route.params;
    const {data:comic, loading } = useFetchComicData(id_comic);
    return (
        <SafeAreaView>
            <ScrollView style={styles.scroolview_container}>
                <View>
                    <TouchableHighlight style={styles.header_go_back} onPress={() => navigation.goBack()} underlayColor="white">
                        <Text style={styles.txt_header_custom}><Icon style={styles.txt_header_icon_custom} name="arrow-back-outline" /> Volver</Text>
                    </TouchableHighlight>
                </View>
                <HeadComic navigation={navigation} {...comic} />
            </ScrollView>
        </SafeAreaView>
    )
}
