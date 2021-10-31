import { useState, useEffect } from 'react'
import { setComicBill } from '../helpers/setComicBill';


export const useFetchPostComicBill = (data_bill) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        setComicBill(data_bill)
            .then( bill => {
                setState({
                    data: bill,
                    loading: false
                });
            })

    }, [])

    return state; // { data:[], loading: true };

}

