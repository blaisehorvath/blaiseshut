import React from 'react'
const ImageHolder = ({imageSrc,width,height}) => {
    return (
        <img src={imageSrc}  className="img-rounded img-responsive" alt="Cinque Terre" />
    )
};
export default ImageHolder