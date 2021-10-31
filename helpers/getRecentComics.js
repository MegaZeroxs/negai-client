import {SERVER_URL} from "@env";

export const getRecentComics = async() => {

    const url = `${SERVER_URL}/recent/comics`;
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