import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to,
        item,
        updateItem,
        deleteItem,
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    return(
        <>
            {
                !editing &&
                <>
                    <Link className={`nav-link ${active?'active':''}`} to={to}>
                        {item.title}
                        <i onClick={() => setEditing(true)} className="fas fa-edit float-right"></i>
                    </Link>
                </>
            }
            {
                editing &&
                <>
                <div className={`nav-link ${active?'active':''}`}>
                    <input
                        onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                        value={itemCache.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(itemCache)
                    }} className="fas fa-check"></i>
                    <i onClick={() => deleteItem(item)} className="fas fa-times"></i>
                </div>
                </>
            }
        </>
    )
}

export default EditableItem