import React from 'react'

const ParagraphWidget = ({widget, editingWidgets, setEditingWidgets}) => {
    const toggleTextarea = (text) => {
        const excludeCurrWidget = editingWidgets.filter(w => w.id !== widget.id);
        widget.text = text;
        setEditingWidgets([...excludeCurrWidget, widget])
    }
    return(
        <>
            {
                editingWidgets.includes(widget) &&
                <>
                    <textarea onChange={(event)=>toggleTextarea(event.target.value)} value={widget.text} className="form-control"></textarea>
                </>
            }
            {
                !editingWidgets.includes(widget) &&
                <p>
                    {widget.text}
                </p>
            }
        </>
    )
}

export default ParagraphWidget