import React from 'react'
const ImageHolder = ({imageSrc,width,height}) => {
    return (
        <img src={imageSrc}  className="img-rounded img-responsive"/>
    )
};
export default ImageHolder