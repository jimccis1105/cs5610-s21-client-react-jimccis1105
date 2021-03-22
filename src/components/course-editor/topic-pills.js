import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from '../../services/topic-service.js'

const TopicPills = (
    {
        topics,
        findTopicsForLesson,
        createTopicForLesson,
        updateTopic,
        deleteTopic
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        console.log("LOAD TOPICS FOR LESSON: " + lessonId)
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])
    return(
    <div>
        <h2>Topics</h2>
        <ul className="nav nav-pills nav-tabs"> 
            {
                topics.map(topic =>
                    <li key={topic._id} className= "nav-item nav-topic-item">
                        <EditableItem
                            active={topic._id === topicId}
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                            updateItem={updateTopic}
                            deleteItem={deleteTopic}
                            item={topic}/>
                    </li>
                )
            }
            <li>
                {lessonId &&
                    <i onClick={() => createTopicForLesson(lessonId)} className="fas fa-plus"></i>
                }
            </li>
        </ul>
    </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
        console.log("LOAD TOPICS FOR LESSON:")
        console.log(lessonId)
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS",
                topics
            }))
    },
    updateTopic: (newItem) => {
        topicService.updateTopic(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_TOPIC", updateTopic: newItem}))
    },
    deleteTopic: (topicToDelete) => {
        topicService.deleteTopic(topicToDelete._id)
            .then(status => dispatch({type: "DELETE_TOPIC", topicToDelete: topicToDelete}))
    },
    createTopicForLesson: (lessonId) => {
        console.log("CREATE LESSON FOR MODULE: " + lessonId)
        topicService
            .createTopicForLesson(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    },

    //not mentioned in the rubric, implemented it for future use.
    findAllTopics: () => {
        console.log("LOAD TOPICS FOR LESSON:")
        topicService.findAllTopics()
            .then(topics => dispatch({
                type: "FIND_TOPICS",
                topics
            }))
    },
})

export default connect(stpm, dtpm)(TopicPills)