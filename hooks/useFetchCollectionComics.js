import { useState, useEffect } from 'react'
import { getCollectionComics } from '../helpers/getCollectionComics';


export const useFetchCollectionComics = (collection_id) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getCollectionComics(collection_id)
            .then( comics => {
                setState({
                    data: comics,
                    loading: false
                });
            })

    }, [])

    return state; // { data:[], loading: true };

}

