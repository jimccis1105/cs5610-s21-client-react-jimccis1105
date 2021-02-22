import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = (
    {
        deleteCourse,
        updateCourse,
        setTitle,
        resetTitle,
        courses,
    }) =>
  <div className="container-fluid">
      <div className="row course-header">
          <div className="col-5 col-md-5 col-lg-5 d-none d-md-block d-lg-block">
              <h4>Recent Documents</h4>
          </div>
          <div className="col-3 col-md-2 col-lg-4 d-none d-md-block d-lg-block">
              <h4>Owned by me<i className="fas fa-sort-down"></i></h4>
          </div>
          {/*<div className="col-3 col-lg-2 d-none d-lg-block">*/}
          {/*    <h4>Last modified</h4>*/}
          {/*</div>*/}
          <div className="col-10 col-md-3 col-lg-1 d-md-block d-lg-block">
              <h4>
                  <i className="fas fa-folder float-right"></i>
              </h4>
          </div>
          <div className="col-1 col-md-1 col-lg-1 d-md-block d-lg-block">
              <h4>
                  {/*<i className="fa fa-sort"></i>*/}
                  <i className="fas fa-sort-alpha-up-alt float-right"></i>
              </h4>
          </div>
          <div className="col-1 col-md-1 col-lg-1 d-md-block d-lg-block">
              {/*<h4>*/}
              {/*    <i className="fa fa-th"> </i>*/}
              {/*</h4>*/}
              <h4>
                  <Link to="/courses/table">
                      <i className="fas fa-list float-right"></i>
                  </Link>
              </h4>

          </div>
      </div>
    <div className="row">
        {
            courses.map((course, ndx) =>
                <CourseCard
                    updateCourse={updateCourse}
                    deleteCourse={deleteCourse}
                    key={ndx}
                    course={course}
                    title={course.title}
                    owner={course.owner}
                    lastModified={course.lastModified}
                    setTitle={setTitle}
                    resetTitle={resetTitle}
                />)
        }
    </div>
  </div>

export default CourseGrid

// const CourseGrid = ({courses}) =>
//     <div className="container-fluid">
//         <div className="row course-header">
//             <div className="col-5 col-md-5 col-lg-5 d-none d-md-block d-lg-block">
//                 <h4>Recent Documents</h4>
//             </div>
//             <div className="col-3 col-md-2 col-lg-4 d-none d-md-block d-lg-block">
//                 <h4>Owned by me<i className="fas fa-sort-down"></i></h4>
//             </div>
//             {/*<div className="col-3 col-lg-2 d-none d-lg-block">*/}
//             {/*    <h4>Last modified</h4>*/}
//             {/*</div>*/}
//             <div className="col-10 col-md-3 col-lg-1 d-md-block d-lg-block">
//                 <h4>
//                     <i className="fas fa-folder float-right"></i>
//                 </h4>
//             </div>
//             <div className="col-1 col-md-1 col-lg-1 d-md-block d-lg-block">
//                 <h4>
//                     {/*<i className="fa fa-sort"></i>*/}
//                     <i className="fas fa-sort-alpha-up-alt float-right"></i>
//                 </h4>
//             </div>
//             <div className="col-1 col-md-1 col-lg-1 d-md-block d-lg-block">
//                 {/*<h4>*/}
//                 {/*    <i className="fa fa-th"> </i>*/}
//                 {/*</h4>*/}
//                 <h4>
//                     <Link to="/courses/table">
//                         <i className="fas fa-list float-right"></i>
//                     </Link>
//                 </h4>
//
//             </div>
//         </div>
//         <div className="row">
//             {
//                 courses.map(course =>
//                     <CourseCard course={course}/>
//                 )
//             }
//         </div>
//     </div>
//
// export default CourseGrid
