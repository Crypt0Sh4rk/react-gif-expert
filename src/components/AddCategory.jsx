import { useState } from "react";

import PropTypes from 'prop-types';


// export const AddCategory = ({ hookCategories }) => {
export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        // console.log(event.target.value);
        // setInputValue('Hola Mundo');
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        // console.log('Hola Mundo desde el submit')
        event.preventDefault(); // Evita el refresh del navegador
        // console.log(inputValue)
        if (inputValue.trim().length <= 1) return;

        // const categories = hookCategories.categories;
        // hookCategories.setCategories([ inputValue, ...categories]);

        // hookCategories.setCategories(cat => [inputValue, ...cat]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
    };
    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            // onChange= { event => onInputChange(event) }
            />
        </form>
    );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}