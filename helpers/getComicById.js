export const getComicById = async (id_comic) => {

    const url = `http://192.168.1.3:8000/comics/${id_comic}`;
    const resp = await fetch(url);
    const data = await resp.json();
    const new_data = data[0];
    const comic = {
        id: new_data.id,
        title: new_data.collection.name,
        vol: new_data.name,
        price: new_data.price,
        image: new_data.image,
        dsc: new_data.description,
        author: new_data.author,
        publisher: new_data.publisher,
        type: new_data.type,
        edition: new_data.edition
    }

    return comic;
}