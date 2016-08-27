import React from 'react';

//TODO: 1) separate the controller and the view to different components
//TODO: 2) one should be active based on the state
//TODO: 3) style with css

const TeamMemberCollapse = (props) => {
    return (
        <div>
            <a className="btn btn-primary" role="button" data-toggle="collapse" href="#member1" aria-expanded="false"
               aria-controls="member1">Member 1</a>
            <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#member2"
                    aria-expanded="false" aria-controls="member2">Member 2</button>
            <div className="collapse" id="member1">
                <div className="well">
                    <h1>Member 1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores autem blanditiis
                        consectetur dignissimos ea eum ex exercitationem fugit hic illum, itaque modi molestias nobis
                        omnis reprehenderit veritatis. Adipisci aliquid animi aperiam earum eos et, iste, iure labore
                        libero, nemo quisquam quo repudiandae totam? Eos molestiae qui ullam. Dolorem dolores illo
                        itaque laborum minus nobis perferendis, repellat soluta. Ad aliquam autem, blanditiis doloremque
                        earum expedita, facere illum in ipsam nihil praesentium quae quas sint. Beatae cum ducimus
                        impedit sequi! Autem blanditiis dolorum et ex ipsum itaque labore, ratione reiciendis unde
                        velit. A amet aperiam autem commodi cupiditate deleniti dignissimos, dolorem ducimus esse est
                        eum eveniet ex, excepturi hic, id illo ipsum labore minus nesciunt non perspiciatis provident
                        quae quaerat quam quas quibusdam quisquam rem repellendus rerum sit totam vel voluptatem
                        voluptatum. Ab enim ipsam labore maiores minus placeat praesentium sapiente? Alias cum dicta
                        nostrum omnis, praesentium quisquam quos rerum sed!</p>
                </div>
            </div>
            <div className="collapse" id="member2">
                <div className="well">
                    <h1>Member 2</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor dolorum inventore nemo
                        numquam sunt suscipit! Ea excepturi, explicabo hic necessitatibus nesciunt provident sunt? A ab
                        alias aut debitis dolorum fugit impedit ipsa, repellendus sequi! Adipisci alias atque, delectus
                        dolor eaque eius esse fugit id incidunt ipsum itaque neque numquam officiis, omnis optio
                        perspiciatis provident quaerat quos ratione rem rerum ullam vero voluptates! Atque facere
                        facilis iure modi, rem repellendus ut. Adipisci alias beatae error expedita nesciunt praesentium
                        quaerat quidem tenetur totam velit! Asperiores est eveniet, expedita inventore ipsam iusto
                        molestias nulla voluptatibus. Dicta fugit nobis voluptatibus. Architecto asperiores ea eaque
                        eius impedit nemo, soluta.</p>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCollapse;
