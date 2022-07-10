import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
import { AddCategory, GifGrid } from "./components";
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const onAddCategory = (event) => {
    const onAddCategory = (newCategory) => {
        // Tarea : Agregar Batman
        // setCategories( categories => {
        //     // categories.push('Batman');
        //     // return categories;
        //     return categories.concat(['Batman']);
        // });

        // setCategories([ ...categories, 'Batman']);
        // setCategories( cat => [...cat, 'Batman']);
        // setCategories( categories => categories.concat(['Batman']));

        // Validar que sean únicos los nombres
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    };

    const onRemoveCategory = (category) => {
        // setCategories(categories.splice(categories.indexOf(category), 1));
        setCategories(categories.filter(c => c != category));
    };

    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            {/* setCategories es una función de tipo dispatchSetState */}
            {/* <AddCategory setCategories={ setCategories } />  */}
            <AddCategory
                // hookCategories={ { categories, setCategories } }
                onNewCategory={ onAddCategory }
            />

            {/* Listado de Gif */}
            {/* <button onClick={ onAddCategory }>Agregar</button> */}
            {/* <ol> */}
            {
                // categories.map(category =>
                //     // return <li key={ c }>{ c }</li>
                //     (
                //         // <div key={ category }>
                //         //     <h3>{ category }</h3>
                //         //     <li>{ category }</li>
                //         // </div>
                //     )
                // )
                categories.map(category => (
                    <GifGrid key={category} category={category} onRemoveCategory={ onRemoveCategory } />
                ))
            }
            {/* </ol> */}
            {/* Gif Item */}
        </>
    );
};