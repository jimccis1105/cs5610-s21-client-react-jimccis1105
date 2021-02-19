import React from 'react'
import CourseTable from "../course-table";
import CourseGrid from "../course-grid";
import CourseEditor from "../course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../../services/course-service";
import "./course-manager-style.css";

class CourseManager extends React.Component {
    state = {
        courses: [],
        qwe: 123,
        sdf: 456,
        title:''
    }

    updateCourse = (course) => {
        console.log(course)
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)

                // courses: prevState.courses.map(c => {
                //   if(c._id === course._id) {
                //     return course
                //   } else {
                //     return c
                //   }
                // })
            })))
    }

    updateTitle
    componentDidMount = () =>
        // findAllCourses()
        //     .then(actualCourses => this.setState({
        //       courses: actualCourses
        //     }))
        findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = () => {
        const newCourse = {
            title: this.state.title,
            owner: "New Owner",
            lastModified: "Never"
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        course,
                        ...prevState.courses
                    ]
                })))

        // this.state.courses.push(newCourse)
        // this.setState(this.state)
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                // const newCourses = this.state.courses
                //     .filter(course => course !== courseToDelete)
                // this.setState({
                //   courses: newCourses
                // })
                // this.setState((prevState) => {
                //   // let nextState = {...prevState}
                //   // nextState.courses =
                //   //     prevState
                //   //         .courses
                //   //         .filter(course => course !== courseToDelete)
                //
                //   let nextState = {
                //     ...prevState,
                //     courses: prevState.courses.filter
                //               (course => course !== courseToDelete)
                //   }
                //
                //   return nextState
                // })

                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter
                    (course => course !== courseToDelete)
                }))
            })
    }

    setTitle = (e) => {
        this.setState(
            (prevState) => ({
                ...prevState,
                title:e
            })
        )
    }



    render() {
        return(
            <div>
                <Link to="/">
                    <i className="fas fa-2x fa-home float-right"></i>
                </Link>
                {/*<h1>Course Manager</h1>*/}
                {/*<button onClick={this.addCourse}>Add Course</button>*/}
                <div className="wbdv-sticky-top wbdv-padding-5px">
                    <div className="row">
                        <div className="col-2 col-md-1">
                            <i className="fa fa-bars fa-2x color-white padding-top-icon  padding-left"></i>
                        </div>
                        <div className="col-md-2 color-white padding-top-h4 d-none d-lg-block">
                            <h4>Course Manager</h4>
                        </div>
                        <div className="col-7 col-md-6 padding-top-input">
                            <input className="form-control color-white"
                                   placeholder="New Course Title"
                                   onChange={(event) => this.setTitle(event.target.value)}
                                   value={this.state.title}/>
                        </div>
                        <div className="col-3 col-md-3">
                            <button className="btn" onClick={this.addCourse}>
                                <i className="fa fa-plus color-white"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>
                <Route path="/courses/table">
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid">
                    <CourseGrid
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                {/*<Route path="/courses/editor">*/}
                {/*    <CourseEditor/>*/}
                {/*</Route>*/}
                {/*<Route path="/courses/editor"*/}
                {/*       render={(props) => <CourseEditor props={props}/>}>*/}
                {/*</Route>*/}
                <Route path="/courses/editor"
                       render={(props) => <CourseEditor {...props}/>}>
                </Route>
            </div>
        )
    }
}

export default CourseManager