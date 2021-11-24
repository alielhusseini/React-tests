// if we fetching data & in some of objects in the array have no key value pair for example missing, or simply they don't have
// we tackle it by the PropTypes:

import PropTypes from 'prop-types'
import defaultImage from 'your-directory-ending-with.jpeg'

const Product = ({image, name, price}) => { // is a component in the map
    const url = image && image.url; // we can't say <img src={imge.url || defaultImage}> since if the image is undefined we won't be able to undefined.url (it will explode)
    return (
        <article>
            <img src={url || defaultImage} alt={name} />  
            <h4>{name || 'default name'}</h4>
            <p>${price || 3.99}</p>
        </article>
    )
}

// setting a condition where every prop must have a value (if it doesn't we are assigning a default value) 
Product.propTypes = {
    image: PropTypes.object.isRequired, // image: {url: "http://..."}
    name: PropTypes.name.isRequired,
    age: PropTypes.number.isRequired,
}

// usually they do the above check in the default
// Product.defaultProps = {
//     name: 'default name',
//     price: 3.99,
//     image: defaultImage
// }