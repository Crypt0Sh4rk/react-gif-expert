import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
    // const {title, url} = image;
    return (
        <div className='card'>
            <img src={ url } alt={ title }></img>
            <p>{ title }</p>
        </div>
    )
}

/* Tarea

1. Añadir PropTypes
    a. title obligatorio
    b. url obligatorio

2. Evaluar el snapshot

*/

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}