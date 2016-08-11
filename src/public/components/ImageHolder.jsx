import React from 'react'
const ImageHolder = ({imageSrc,width,height}) => {
    return (
        <div className="imageAndText">
            <img src={imageSrc} className="align-center img-responsive"/>
            <div className="col">
                <div className="pull-right col-sm-4">
                    <p>Sunt ignigenaes examinare fortis, lotus lamiaes. Imber messiss, tanquam azureus uria.</p>
                </div>
            </div>
        </div>
    )
};
export default ImageHolder;
/*<img src={imageSrc}  className="img-rounded img-responsive projectImageHolder"/>*/