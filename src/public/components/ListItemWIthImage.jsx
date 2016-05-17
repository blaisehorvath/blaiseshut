import React from 'react'
const ListItemWithImage = ({id,title,imagesrc,onClick,active}) => {
    return (
        <div className="list-group" id={id} onClick={()=>onClick(id)}>
            <a href="#" className={active?"list-group-item active":"list-group-item"}>
                <div className="row">
                    <div className="col-xs-3"><h4 className="list-group-item-heading">{title}</h4></div>
                    <div className="col-xs-9"><img src={imagesrc} className="img-rounded img-responsive"></img></div>
                </div>
            </a>
        </div>
    )
}
export default ListItemWithImage