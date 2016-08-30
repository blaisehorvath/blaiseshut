import React from 'react';
import ProjectModal from './ProjectModal';

const modalContent=(
    <div>
        <h3>Lorem ipsum dolor sit.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, assumenda, delectus ex fuga illum magnam odio
            perspiciatis quasi quibusdam quidem sapiente, sunt tenetur unde. A accusantium ad aperiam aut beatae
            consequatur consequuntur corporis cum dignissimos distinctio dolore ea eius est ex explicabo facere id illo
            illum, ipsam magni nihil nisi non nostrum officia officiis pariatur placeat quasi quis quo repellendus
            repudiandae saepe sequi soluta sunt vel velit voluptate? Ab consectetur, dignissimos dolores eaque excepturi
            exercitationem illo inventore ipsum libero magni non nulla odit placeat temporibus tenetur totam vero.
            Deleniti deserunt id quaerat ratione.
        </p>
        <img src="https://www.wagonhq.com/images/posts/react.png" alt=""/>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti ducimus excepturi in incidunt
            molestias mollitia obcaecati placeat tempora voluptate? Odio, quia, unde. Accusamus ad adipisci amet animi,
            aperiam consequuntur culpa cum debitis dignissimos ducimus ea earum, eius exercitationem facere facilis
            harum id in iure laudantium minus modi molestiae nam neque odit pariatur quaerat quam quibusdam quod ratione
            saepe tempora, ullam unde vero? Asperiores enim qui soluta tempore voluptate! Ad aliquam atque cum dolorem
            eaque eligendi exercitationem fuga ipsam magni minus nobis, perspiciatis recusandae rem veniam.
        </p>
        <img src="https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67" alt=""/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio harum, minima! Ab, consequatur dolorum
            ea eligendi iste molestias quis tempora tenetur voluptate! Alias asperiores aspernatur, corporis, culpa
            debitis doloribus enim eveniet fuga fugit iste labore magni numquam? Accusamus accusantium adipisci
            consequatur deserunt dolorum error explicabo illo, saepe suscipit ullam? Id labore libero maiores sunt
            tempora?
        </p>
        <img src="http://berytech.org/wp-content/uploads/2015/11/amazon-aws-logo.jpg" alt=""/>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus earum, est facilis inventore maiores
            natus nulla numquam perspiciatis porro quasi repellendus similique soluta tenetur vel! Cupiditate delectus
            et hic mollitia officia, quo? Odit, sunt!
        </p>
    </div>
);

export default () => <ProjectModal id="webAppModal" title="Web Application Development" children={modalContent} /> ;
