import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getComicsBills } from '../helpers/getComicsBills';

const getUserId = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('sessionData')
        let newObj;
        newObj = JSON.parse(jsonValue);
        return newObj[0].id;
    } catch (e) {
        // error reading value
    } 
}

export const useFetchComicBills = () => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getComicsBills(getUserId())
            .then( comics => {
                setState({
                    data: comics,
                    loading: false
                });
            })

    }, [])

    return state; // { data:[], loading: true };

}

