import {SERVER_URL} from "@env";

export const getRandomComic = async () => {

    const url = `${SERVER_URL}/comic/random`;
    const resp = await fetch(url);
    const data = await resp.json();
    const comic = {
        id: data.id,
        title: data.collection.name,
        vol: data.name,
        price: data.price,
        image: data.image,
        dsc: data.description,
        author: data.author,
        publisher: data.publisher,
        type: data.type,
        edition: data.edition,
        collection_id: data.collection_id
    }

    return comic;
}