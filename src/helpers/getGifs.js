const apiKey = 'juUyLdjdxTIEUgZQwhrB8fmPrEZ46K8G';

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=7`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json(); // data = [] para asegurarse que siempre tenga data

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))
    // console.log(gifs);

    return gifs;
}