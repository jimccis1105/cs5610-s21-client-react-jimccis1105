import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetService from "../../services/widget-service";
import {connect} from "react-redux";

const WidgetList = (
    {
        widgets= [],
        findWidgetsForTopic,
        createWidgetForTopic,
        updateWidget,
        deleteWidget,
    }
    ) => {
    const {topicId} = useParams();
    useEffect(() => {
        console.log("LOAD WIDGETS FOR TOPIC: " + topicId)
            findWidgetsForTopic(topicId)
    }, [topicId])

    const [editingWidgets, setEditingWidgets] = useState([]);

    const toggleEdit = (widget) => {
        setEditingWidgets([...editingWidgets, widget])
    }
    const saveWidget = (widget)=> {
        setEditingWidgets(editingWidgets.filter(w => w.id !== widget.id))
        updateWidget(widget);
    }
    const toggleType = (widget, type) => {
        const excludeCurrWidget = editingWidgets.filter(w => w.id !== widget.id);
        widget.type = type;
        if (!widget.size) {
            widget.size = 1;
        }
        setEditingWidgets([...excludeCurrWidget, widget])
    }
    return(
        <div>
            <i onClick={() => createWidgetForTopic(topicId)} className="fas fa-plus fa-2x float-right"></i>
            <h2>Widget List ({widgets.length}) {editingWidgets.id}</h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {
                                editingWidgets.includes(widget) &&
                                <>
                                    <i onClick={() => {
                                        saveWidget(widget)
                                    }} className="fas fa-2x fa-check float-right"></i>
                                    <i onClick={() => deleteWidget(widget)} className="fas fa-2x fa-trash float-right"></i>
                                </>
                            }
                            {
                                !editingWidgets.includes(widget) &&
                                <i onClick={() => toggleEdit(widget)} className="fas fa-2x fa-cog float-right"></i>
                            }
                            {
                                editingWidgets.includes(widget) &&
                                <select className='form-control mb-2'
                                        value={widget.type}
                                        onChange={(e) =>
                                            toggleType(widget, e.target.value)}>
                                    <option value='PARAGRAPH'>Paragraph</option>
                                    <option value='HEADING'>Heading</option>
                                </select>
                            }
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    editingWidgets={editingWidgets}
                                    setEditingWidgets={setEditingWidgets}
                                    widget={widget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    editingWidgets={editingWidgets}
                                    setEditingWidgets={setEditingWidgets}
                                    widget={widget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})
const dtpm = (dispatch) => ({
    findWidgetsForTopic: (topicId) => {
        console.log("LOAD WIDGETS FOR TOPIC:")
        console.log(topicId)
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                widgets
            }))
    },
    updateWidget: (newItem) => {
        widgetService.updateWidget(newItem.id, newItem)
            .then(status => dispatch({type: "UPDATE_WIDGET", updateWidget: newItem}))
    },
    deleteWidget: (widgetToDelete) => {
        widgetService.deleteWidget(widgetToDelete.id)
            .then(status => dispatch({type: "DELETE_WIDGET", widgetToDelete: widgetToDelete}))
    },
    createWidgetForTopic: (topicId) => {
        console.log("CREATE WIDGET FOR TOPIC: " + topicId)
        widgetService
            .createWidgetForTopic(topicId, {type: "HEADING", size: 1, text: "New Widget"})
            .then(widget => dispatch({
                type: "CREATE_WIDGET",
                widget
            }))
    },

    findAllWidgets: () => {
        console.log("LOAD WIDGETS FOR TOPIC:")
        widgetService.findAllWidgets()
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS",
                widgets
            }))
    },
})
export default connect(stpm, dtpm)(WidgetList);