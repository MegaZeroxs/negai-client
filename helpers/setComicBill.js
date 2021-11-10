import {SERVER_URL} from "@env";

export const setComicBill = async(data_bill) => {

    let urlParameters = Object.entries(data_bill).map(e => e.join('=')).join('&');
    console.log(urlParameters);

    const url = `http://192.168.1.3:8000/bills?${urlParameters}`;
    const resp = await fetch(
        url, {
            method: 'POST',
        }
    );
    const data = await resp.json();

    const comics = data.map( comic => {
        return {
            client_id: comic.client_id,
            comic_id: comic.comic_id,
            state: comic.state,
            updated_at: comic.updated_at,
            created_at: comic.created_at,
            bill_id: comic.id
        }
    });

    return comics;

}