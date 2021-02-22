import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable
  extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return(
      <div className="container-fluid">
          {/*<Link to="/courses/grid">*/}
          {/*  <i className="fas fa-2x fa-th float-right"></i>*/}
          {/*</Link>*/}
        {/*<h2>Course Table</h2>*/}
          <div className="row course-header">
              <div className="col-5 col-md-5 col-lg-5 d-md-block d-lg-block">
                  <h4>Title</h4>
              </div>
              <div className="col-3 col-md-2 col-lg-2 d-none d-md-block d-lg-block">
                  <h4>Owned by</h4>
              </div>
              <div className="col-3 col-lg-2 d-none d-lg-block">
                  <h4>Last modified</h4>
              </div>
              <div className="col-5 col-md-3 col-lg-1 d-md-block d-lg-block">
                  <h4>
                      <i className="fas fa-folder float-right"></i>
                  </h4>
              </div>
              <div className="col-1 col-md-1 d-md-block d-lg-block">
                  <h4>
                      {/*<i className="fa fa-sort"></i>*/}
                      <i className="fas fa-sort-alpha-up-alt float-right"></i>
                  </h4>
              </div>
              <div className="col-1 col-md-1 d-md-block d-lg-block">
                  {/*<h4>*/}
                  {/*    <i className="fa fa-th"> </i>*/}
                  {/*</h4>*/}
                  <h4>
                      <Link to="/courses/grid">
                            <i className="fas fa-th float-right"></i>
                      </Link>
                  </h4>

              </div>
          </div>
        <table className="table">
          <tbody>
          {/*<CourseRow title="CS1234" owner="alice" lastModified={"1/12/34"}/>*/}
          {/*<CourseRow title="CS2345" owner="bob"   lastModified={"2/23/24"}/>*/}
          {/*<CourseRow title="CS3456" owner="charlie" lastModified={"3/22/14"}/>*/}
          {/*<CourseRow title="CS4567" owner="dan"   lastModified={"4/12/36"}/>*/}
          {
            this.props.courses.map((course, ndx) =>
              <CourseRow
                  updateCourse={this.props.updateCourse}
                  deleteCourse={this.props.deleteCourse}
                  key={ndx}
                  course={course}
                  title={course.title}
                  owner={course.owner}
                  lastModified={course.lastModified}
                  setTitle={this.props.setTitle}
                  resetTitle={this.props.resetTitle}
              />)
          }
          </tbody>
        </table>
      </div>
    )
  }
}
