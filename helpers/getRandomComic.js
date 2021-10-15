export const getRandomComic = async () => {

    const url = `http://192.168.1.3:8000/comic/random`;
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
        edition: data.edition
    }

    return comic;
}