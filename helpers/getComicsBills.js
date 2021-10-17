export const getComicsBills = async(id_user) => {

    const url = `http://192.168.1.3:8000/client/bills/1`;
    const resp = await fetch( url );
    const data = await resp.json();

    const comics = data.map( comic => {
        return {
            id: comic.comic.id,
            title: comic.comic.collection.name,
            vol: comic.comic.name,
            price: comic.comic.price,
            image: comic.comic.image,
        }
    });

    return comics;

}