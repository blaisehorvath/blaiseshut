import React from 'react'
const ListItemWithImage = ({id,title,imagesrc,onClick,active}) => {
    return (
        <div className="list-group" id={id} onClick={()=>onClick(id)}>
            <a href="#" className={active?"list-group-item active":"list-group-item"}>
                <div>
                    <div className="row"><h4 className="list-group-item-heading memberName">{title}</h4></div>
                    <div className="row"><img src={imagesrc} className="img-rounded img-responsive memberPicture"></img></div>
                </div>
            </a>
        </div>
    )
};
export default ListItemWithImage