import React from 'react'
const ListItem = ({id,title,short_descr,onProjectClick,active}) => {
    return (
            <a href="#" id={id} onClick={()=>onProjectClick(id)} className={active?"list-group-item active":"list-group-item"}>
                <h4 className="list-group-item-heading">{title}</h4>
                <p className="list-group-item-text">{short_descr}</p>
            </a>
    )
}
export default ListItem