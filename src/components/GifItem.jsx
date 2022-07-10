
export const GifItem = ({ title, url }) => {
    // const {title, url} = image;
    return (
        <div className='card'>
            <img src={ url } alt={ title }></img>
            <p>{ title }</p>
        </div>
    )
}
