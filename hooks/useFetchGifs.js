import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false); // En React 18 sólo se renderiza una vez a pesar de dos cambios de estado
    };

    // Llamar a getImages() cuando se crea el componente
    useEffect(() => {
        // getGifs(category)
        //     .then( newImages => setImages(newImages));
        getImages();
    }, []); // [] indica que sólo se va a disparar la primera vez que se crea y construye el componente
    
    return {
        images: images,
        isLoading
    }
}
