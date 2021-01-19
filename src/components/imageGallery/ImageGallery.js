import React from 'react'
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types';


const ImageGallery = ({imgSrc, openModal}) => {
    
    
    
    return (
        <ul className="ImageGallery App">
            
           { imgSrc.map(item => <ImageGalleryItem imgSrcc={item.webformatURL} key={item.id} onClick={openModal} data={item.id} tags={item.tags}/>)}
        </ul>
    );
}

ImageGallery.propTypes = {
    imgSrc: PropTypes.array,
    openModal: PropTypes.func,
  };

export default ImageGallery;