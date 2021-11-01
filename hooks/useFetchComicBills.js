import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getComicsBills } from '../helpers/getComicsBills';


export const useFetchComicBills = () => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        const getUserId = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('sessionData')
                let newObj;
                newObj = JSON.parse(jsonValue);
                const userId = newObj['0'].id;
                getComicsBills(userId)
                .then( comics => {
                    setState({
                        data: comics,
                        loading: false
                    });
                })
            } catch (e) {
                // error reading value
            } 
        }

        getUserId();


    }, [])

    return state; // { data:[], loading: true };

}

