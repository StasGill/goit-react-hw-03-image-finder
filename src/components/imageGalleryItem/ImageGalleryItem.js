import React from 'react'
import PropTypes from 'prop-types';

const ImageGalleryItem = ({imgSrcc,onClick,data,tags}) => {
    
    return (
        <li className="ImageGalleryItem" onClick={onClick} data-id={data}>
            <img src={imgSrcc} alt={tags} className="ImageGalleryItem-image" data-id={data} />
        </li>
    );
}

ImageGalleryItem.propTypes = {
    imgSrcc: PropTypes.string,
    onClick: PropTypes.func,
    data: PropTypes.number,
    tags: PropTypes.string,
    
  };

export default ImageGalleryItem;    