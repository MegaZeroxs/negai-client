import { useState, useEffect } from 'react'
import { getRecentComics } from '../helpers/getRecentComics';


export const useFetchComicsRecentHome = () => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getRecentComics()
            .then( comics => {
                setState({
                    data: comics,
                    loading: false
                });
            })

    }, [])

    return state; // { data:[], loading: true };

}

