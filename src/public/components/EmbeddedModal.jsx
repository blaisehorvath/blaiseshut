import React from 'react';

const EmbeddedModal = (props) => {
    return (
        <div id="embeddedModal" className="modal fade modalContainer" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Embedded Systems Design</h4>
                    </div>
                    <div className="modal-body">
                        <h3>Lorem ipsum dolor.</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem cumque doloribus,
                            dolorum ea exercitationem id incidunt inventore iusto labore laudantium magnam maiores
                            minima molestiae natus nostrum possimus provident quam quisquam repellendus rerum, sapiente
                            ut veniam vitae voluptates? Eos eum itaque non possimus tempora. Accusamus at molestiae
                            placeat porro quisquam soluta tenetur. A architecto at aut autem culpa cumque deleniti earum
                            eos, esse exercitationem facere fugiat hic ipsam iure maiores minus natus nihil nostrum
                            officia placeat quos reiciendis repellat soluta, suscipit unde, voluptate voluptatem
                            voluptates.
                        </p>
                        <h3>Lorem ipsum dolor sit.</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum eius esse excepturi
                            ipsam mollitia necessitatibus quidem quisquam repellat tempore! Laudantium officia
                            perspiciatis porro repellat sapiente vel!
                        </p>
                        <img src="https://hackadaycom.files.wordpress.com/2014/11/stm32-closeup.jpg?w=800" alt=""/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem blanditiis corporis
                            cum cupiditate, natus repudiandae sit! A aspernatur culpa cum dicta doloremque eos, minima
                            minus nulla numquam omnis provident quasi velit. Aliquid, eius quasi?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EmbeddedModal;
