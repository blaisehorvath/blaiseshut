import React from 'react';

//TODO: write docs
const SkillItem = ({language, skill, description}) => {
    return (
        <div className="skillItem">
            <div className="skillHeader row">
                <div className="skillItemTitle col-xs-6">{language}</div>
                <div className="skillBar col-xs-6">
                    <div className="progress">
                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60"
                             aria-valuemin="0" aria-valuemax="100" style={{width: `${skill * 10}%`}}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row skillDesc">{description}</div>
        </div>
    );
};

export default SkillItem;
