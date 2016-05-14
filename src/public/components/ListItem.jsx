import React from 'react'
const ListItem = ({id,title,short_descr,onProjectClick,active}) => {
    return (
        <div className="list-group" id={id} onClick={()=>onProjectClick(id)}>
            <a href="#" className={active?"list-group-item active":"list-group-item"}>
                <h4 className="list-group-item-heading">{title}</h4>
                <p className="list-group-item-text">{short_descr}</p>
            </a>
        </div>
    )
}
export default ListItem