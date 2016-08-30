/* This is the modal for the Embedded Systems Development Project */
import React from 'react';
import ProjectModal from './ProjectModal';

const modalContent = (
    <div><h3>Lorem ipsum dolor sit amet.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad architecto
            assumenda at corporis distinctio doloremque doloribus earum eum eveniet fuga illo illum
            inventore itaque libero mollitia nam nesciunt nisi non nulla odio odit optio perferendis
            praesentium quasi recusandae, repudiandae rerum saepe similique ut vero voluptatem
            voluptatibus? Explicabo, quis.
        </p>
        <img style={{width: "70%"}} src="https://www.riot-os.org/images/logo-large.png" alt=""/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur consectetur
            consequuntur, dicta dolorem eaque ex, inventore laboriosam natus officia recusandae sint
            suscipit tempora tempore ullam. Adipisci amet asperiores consequuntur, doloribus eaque ipsa
            iure laborum molestiae natus nisi, optio quae quia tempora? Aspernatur ea eligendi, ipsum
            non quaerat quia soluta. Accusamus aliquid odit quia velit!
        </p>
        <img
            src="https://camo.githubusercontent.com/98c030084e8d0cfbabed30dd534f0134269263d5/687474703a2f2f7777772e75646f6f2e6f72672f77702d636f6e74656e742f75706c6f6164732f323031332f31322f55444f4f2d69636f6e73322e706e67"
            alt=""/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur doloremque eum nobis
            porro quidem reiciendis! Accusamus, adipisci alias atque cum dicta dolorem ea expedita hic
            nam perferendis, praesentium quas quia quis quos ratione rerum.
        </p>
    </div>
);


export default () => <ProjectModal id="iotModal" title="Internet of things engineering" children={modalContent}/>;
