// import { useState, useEffect } from "react";

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../../hooks/useFetchGifs";
// import { getGifs } from "../../helpers/getGifs";

export const GifGrid = ({ category, onRemoveCategory }) => {

    // const [counter, setCounter] = useState(7)
    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // };

    // // Llamar a getImages() cuando se crea el componente
    // useEffect(() => {
    //     // getGifs(category)
    //     //     .then( newImages => setImages(newImages));
    //     getImages();
    // }, []); // [] indica que sólo se va a disparar la primera vez que se crea y construye el componente


    // Custom hook
    const { images, isLoading } = useFetchGifs( category );

    const onClickBtnRemove = (event) => 
        onRemoveCategory(category);

    return (
        <>
            <h3>{ category }</h3>
            {
                // isLoading 
                //     ? (<h2>Cargando...</h2>)
                //     : null

                isLoading && (<h2>Cargando...</h2>)
                // <LoadingMessage isLoading={ isLoading } />
            }
            {
                !isLoading && (<button onClick={ onClickBtnRemove }>Remover</button>)
            }

            <div className="card-grid">
                {
                    // images.map(({ id, title, url }) => (
                    images.map(img => (
                        // <GifItem key={id} image={{title, url}} />
                        // <GifItem key={id} title={title} url={url} />
                        <GifItem key={img.id} {...img} /> // Esparcir propiedades
                    ))
                }
            </div>
        </>
    );
};