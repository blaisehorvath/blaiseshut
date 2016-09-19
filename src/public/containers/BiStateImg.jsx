import React from 'react';
import {connect} from 'react-redux'

/**
 * This function returns the source of proper img based on the displayWidth.
 * @param displayWidth {string} The Bootstrap display width type name and an additional <i>mobile</i> or <i>wide</i>.
 * @param small {string} The url of the small image.
 * @param big {string} The url of the big image.
 */
const getSrcImg = (displayWidth, small, big) => ([ "mobile", "sm" ].indexOf(displayWidth) !== -1)  ? small : big;

/**
 * A stateless functional React container that wraps an img tag. The source of the img is changed when the displayWidth in the store changes.
 * @param displayWidth {string} The Bootstrap display width type name and an additional <i>mobile</i> or <i>wide</i>.
 * @param smallImgSrc {string} The url of the small image.
 * @param bigImgSrc {string} The url of the big image.
 * @returns {XML}
 * @constructor
 */
const BiStateImg = ({displayWidth, smallImgSrc, bigImgSrc}) => {
    return (
        <img className="img-responsive projectImage" src={getSrcImg(displayWidth, smallImgSrc, bigImgSrc)}/>
    );
};

export default connect((state)=>({displayWidth : state.displayWidth}))(BiStateImg);