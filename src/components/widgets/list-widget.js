import React from 'react'

const ListWidget = ({widget, editingWidgets, setEditingWidgets}) => {
    const toggleTextarea = (text) => {
        const excludeCurrWidget = editingWidgets.filter(w => w.id !== widget.id);
        widget.text = text;
        setEditingWidgets([...excludeCurrWidget, widget])
    }
    const toggleOrderd = () => {
        const excludeCurrWidget = editingWidgets.filter(w => w.id !== widget.id);
        widget.ordered = !widget.ordered
        setEditingWidgets([...excludeCurrWidget, widget])
    }
    return(
        <div>
            {
                editingWidgets.includes(widget) &&
                    <>
                        <input onClick={()=>toggleOrderd()} checked={widget.ordered} type="checkbox"/> Ordered
                        <br/>
                        Item list
                        <textarea onChange={(event)=>toggleTextarea(event.target.value)} value={widget.text} rows={10} className="form-control"></textarea>
                        {/* {JSON.stringify(widget)} */}
                    </>
            }
            {
                !editingWidgets.includes(widget) &&
                    <>
                        {
                            widget.ordered &&
                            <ol>
                                {
                                    widget.text.split("\n").map((item) => {
                                        return(
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        }
                        {
                            !widget.ordered &&
                            <ul>
                                {
                                    widget.text.split("\n").map((item) => {
                                        return(
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </>
            }
        </div>
    )
}

export default ListWidget