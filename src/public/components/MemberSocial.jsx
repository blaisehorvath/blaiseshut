import React from 'react';

const MemberSocial = ({uwUrl, lnUrl, gitUrl}) => {
    return (
        <div className="row">
            <h4>Contact Me</h4>
            <div className="col-sm-12 memberSocial">
                <a className="uwLink" href={uwUrl}><img src="/img/upwork.png" alt="" className="uwIcon"/></a>
                <a className="btn btn-social-icon btn-lg btn-linkedin" href={lnUrl}>
                    <span className="fa fa-linkedin"/>
                </a>
                <a className="btn btn-social-icon btn-lg btn-github" href={gitUrl}>
                    <span className="fa fa-github"/>
                </a>
            </div>
        </div>
    );
};

export default MemberSocial;
