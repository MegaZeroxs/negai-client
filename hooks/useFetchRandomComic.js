import { useState, useEffect } from 'react'
import { getRandomComic } from '../helpers/getRandomComic';


export const useFetchRandomComic = (id_comic) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getRandomComic(id_comic)
            .then( comic => {
                setState({
                    data: comic,
                    loading: false
                });
            })

    }, [])

    return state; // { data:[], loading: true };

}

