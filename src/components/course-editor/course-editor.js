// import React from 'react'
// import {Link, useParams, useHistory} from "react-router-dom";
// const CourseEditor = ({history}) =>
//   <div>
//       <ul className="nav nav-tabs navs-background-color">
//           <div className="course-title-padding">
//                   <i className="fas fa-arrow-left fa-2x ml-4" onClick={() => history.goBack()}></i>
//           </div>
//           <li className="nav-item">
//               <a className="nav-link" aria-current="page" href="#">
//                   Build
//               </a>
//           </li>
//           <li className="nav-item">
//               <a className="nav-link active" href="#">Pages</a>
//           </li>
//           <li className="nav-item">
//               <a className="nav-link" href="#">Theme</a>
//           </li>
//           <li className="nav-item">
//               <a className="nav-link" href="#">Store</a>
//           </li>
//           <li className="nav-item">
//               <a className="nav-link" href="#">Apps</a>
//           </li>
//           <li className="nav-item">
//               <a className="nav-link" href="#">Settings</a>
//           </li>
//           <li className="nav-item">
//               <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
//                   <i className="fa fa-plus"></i>
//               </a>
//           </li>
//       </ul>
//       <br/>
//       <div className="container list-group-margin">
//           <div className="row">
//               <div className="col-4">
//                   <ul className="list-group">
//                       <li className="list-group-item active">
//                           Module 1 - jQuery
//                           <i className="float-right fas fa-times"></i>
//                       </li>
//                       <li className="list-group-item">
//                           Module 2 - React
//                           <i className="float-right fas fa-times"></i>
//                       </li>
//                       <li className="list-group-item">
//                           Module 3 - Redux
//                           <i className="float-right fas fa-times"></i>
//                       </li>
//                       <li className="list-group-item">
//                           Module 4 - Native
//                           <i className="float-right fas fa-times"></i>
//                       </li>
//                       <li className="list-group-item">
//                           Module 5 - Angular
//                           <i className="float-right fas fa-times"></i>
//                       </li>
//                       <li className="list-group-item">
//                           Module 6 - Node
//                           <i className="float-right fas fa-times"></i>
//                       </li>
//                       <li className="list-group-item">
//                           Module 7 - Mongo
//                           <i className="float-right fas fa-times"></i>
//                       </li>
//                   </ul>
//                   <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
//                       <i className="fa fa-plus float-right"></i>
//                   </a>
//               </div>
//               <div className="col-8">
//                   <ul className="nav nav-pills">
//                       <li className="nav-item nav-topic-item">
//                           <a className="nav-link" aria-current="page" href="#">Topic 1</a>
//                       </li>
//                       <li className="nav-item nav-topic-item">
//                           <a className="nav-link active" href="#">Topic 2</a>
//                       </li>
//                       <li className="nav-item nav-topic-item">
//                           <a className="nav-link" href="#">Topic 3</a>
//                       </li>
//                       <li className="nav-item nav-topic-item">
//                           <a className="nav-link" href="#">Topic 4</a>
//                       </li>
//                       <li className="nav-item nav-topic-item">
//                           <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
//                               <i className="fa fa-plus"></i>
//                           </a>
//                       </li>
//                   </ul>
//               </div>
//           </div>
//       </div>
//   </div>

// export default CourseEditor


import React from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
// import lessonReducer from "../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
// import LessonTabs from "./lesson-tabs";

const reducer = combineReducers({
    moduleReducer: moduleReducer
    // lessonReducer: lessonReducer
})

const store = createStore(reducer)

const CourseEditor = ({history, params}) => {
    const {layout, courseId, moduleId} = useParams();
    return(
        <Provider store={store}>
            <div>
                <ul className="nav nav-tabs navs-background-color">
                    <div className="course-title-padding">
                            <i className="fas fa-arrow-left fa-2x ml-4" onClick={() => history.goBack()}></i>
                    </div>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">
                            Build
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Pages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Theme</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Store</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Apps</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Settings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                            <i className="fa fa-plus"></i>
                        </a> 
                    </li>
                </ul>
      <br/>
      <div className="container list-group-margin">
          <div className="row">
              <div className="col-4">
              <ModuleList/>
                  {/* <ul className="list-group">
                      <li className="list-group-item active">
                          Module 1 - jQuery
                          <i className="float-right fas fa-times"></i>
                      </li>
                      <li className="list-group-item">
                          Module 2 - React
                          <i className="float-right fas fa-times"></i>
                      </li>
                      <li className="list-group-item">
                          Module 3 - Redux
                          <i className="float-right fas fa-times"></i>
                      </li>
                      <li className="list-group-item">
                          Module 4 - Native
                          <i className="float-right fas fa-times"></i>
                      </li>
                      <li className="list-group-item">
                          Module 5 - Angular
                          <i className="float-right fas fa-times"></i>
                      </li>
                      <li className="list-group-item">
                          Module 6 - Node
                          <i className="float-right fas fa-times"></i>
                      </li>
                      <li className="list-group-item">
                          Module 7 - Mongo
                          <i className="float-right fas fa-times"></i>
                      </li>
                  </ul> */}
                  {/* <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                      <i className="fa fa-plus float-right"></i>
                  </a> */}
              </div>
              <div className="col-8">
                  <ul className="nav nav-pills">
                      <li className="nav-item nav-topic-item">
                          <a className="nav-link" aria-current="page" href="#">Topic 1</a>
                      </li>
                      <li className="nav-item nav-topic-item">
                          <a className="nav-link active" href="#">Topic 2</a>
                      </li>
                      <li className="nav-item nav-topic-item">
                          <a className="nav-link" href="#">Topic 3</a>
                      </li>
                      <li className="nav-item nav-topic-item">
                          <a className="nav-link" href="#">Topic 4</a>
                      </li>
                      <li className="nav-item nav-topic-item">
                          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                              <i className="fa fa-plus"></i>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
        
    </Provider>)
    }
// const CourseEditor = () => {
//   return (
//     <h1>Course Editor</h1>
//   )
// }
export default CourseEditor



{/* <div>
        <ul className="nav nav-tabs navs-background-color">
          <div className="course-title-padding">
                  <i className="fas fa-arrow-left fa-2x ml-4" onClick={() => history.goBack()}></i>
          </div>
          <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                  Build
              </a>
          </li>
          <li className="nav-item">
              <a className="nav-link active" href="#">Pages</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">Theme</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">Store</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">Apps</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">Settings</a>
          </li>
          <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                  <i className="fa fa-plus"></i>
              </a>
          </li>
      </ul>
      <h1>
          <Link to="/courses/table">
            <i className="fas fa-arrow-left"></i>
          </Link>
          Course Editor
          <i className="fas fa-times float-right"
             onClick={() => history.goBack()}></i>
      </h1>
        <div className="row">
            <div className="col-3">
                <ModuleList/>
            </div>
            {/* <div className="col-9">
                <LessonTabs/>
            </div> */}
    //     </div>
    // </div> */}