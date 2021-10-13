import { useState, useEffect } from 'react'
import { getComicById } from '../helpers/getComicById';


export const useFetchComicData = (id_comic) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getComicById(id_comic)
            .then( comic => {
                setState({
                    data: comic,
                    loading: false
                });
            })

    }, [])

    return state; // { data:[], loading: true };

}

