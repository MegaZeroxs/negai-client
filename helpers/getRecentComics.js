import {SERVER_URL} from "@env";

export const getRecentComics = async() => {

    const url = `http://192.168.1.3:8000/recent/comics`;
    const resp = await fetch( url );
    const data = await resp.json();

    const comics = data.map( comic => {
        return {
            id: comic.id,
            title: comic.collection.name,
            vol: comic.name,
            price: comic.price,
            image: comic.image,
        }
    });

    return comics;

}