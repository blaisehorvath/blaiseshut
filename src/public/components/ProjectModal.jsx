import React from 'react';

/**
 * This stateless functional React component can be used as a Bootstrap modal.
 * @param props The props that the component receives
 * @param props.id The id for the component. Bootstrap targets modals via the id.
 * @param props.children The HTML content of the modal.
 * @param props.title The title of the modal showed in the header of the modal.
 * @returns {XML}
 * @constructor
 */
const ProjectModal = (props) => {
    return (
        <div id={props.id} className="modal fade modalContainer" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">{ props.title }</h4>
                    </div>
                    <div className="modal-body">
                        { props.children }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
