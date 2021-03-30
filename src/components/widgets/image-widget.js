import React from 'react'

const ImageWidget = ({widget, editingWidgets, setEditingWidgets}) => {
    const toggleSrc = (src) => {
        const excludeCurrWidget = editingWidgets.filter(w => w.id !== widget.id);
        widget.src = src
        setEditingWidgets([...excludeCurrWidget, widget])
    }
    const toggleWidth = (width) => {
        const excludeCurrWidget = editingWidgets.filter(w => w.id !== widget.id);
        widget.width = width
        setEditingWidgets([...excludeCurrWidget, widget])
    }
    const toggleHeight = (height) => {
        const excludeCurrWidget = editingWidgets.filter(w => w.id !== widget.id);
        widget.height = height
        setEditingWidgets([...excludeCurrWidget, widget])
    }
    return(
        <div>
            {
                !editingWidgets.includes(widget) &&
                    <img width={widget.width} height={widget.height} src={widget.src}/>
            }
            {
                editingWidgets.includes(widget) &&
                    <>
                        <p>Image URL</p>
                        <input onChange={(event)=>toggleSrc(event.target.value)} value={widget.src} className="form-control"/>
                        <br/>
                        <p>Image width</p>
                        <input onChange={(event)=>toggleWidth(event.target.value)} value={widget.width} className="form-control"/>
                        <br/>
                        <p>Image height</p>
                        <input onChange={(event)=>toggleHeight(event.target.value)} value={widget.height} className="form-control"/>
                    </>
            }
        </div>
    )
}
export default ImageWidget