import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import courseService from "../../services/course-service";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})

const store = createStore(reducer)

const CourseEditor = () => {
    const {layout, courseId} = useParams()
    const [title, setTitle] = useState('');
    const getTitle = (courseId) => {
        courseService.findCourseById(courseId)
          .then(course => setTitle(course.title));
    }
    useEffect(() => getTitle(courseId));
    return(
        <Provider store={store}>
            <br/>
            <div>
                <ul className="nav nav-tabs navs-background-color">
                    <div className="course-title-padding">
                            <Link to={`/courses/${layout}`}>
                                <i className="fas fa-arrow-left fa-2x ml-4"></i>
                            </Link>
                    </div>
                    <h4 className="ml-2">{title}</h4>
                </ul>
      <br/>
      <div className="container list-group-margin">
          <div className="row">
              <div className="col-4">
              <ModuleList/>
              </div>
              <div className="col-8">
              <LessonTabs/>
              <TopicPills/>
              </div>
          </div>
      </div>
  </div>
        
    </Provider>)
    }
export default CourseEditor