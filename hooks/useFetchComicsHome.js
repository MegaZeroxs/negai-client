import { useState, useEffect } from 'react'
import { getComics } from '../helpers/getComics';


export const useFetchComicsHome = () => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getComics()
            .then( comics => {
                setState({
                    data: comics,
                    loading: false
                });
            })

    }, [])

    return state; // { data:[], loading: true };

}

