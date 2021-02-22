import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({course}) =>
  <div className="pb-4 col-sm-6 col-md-4 col-lg-3 col-xl-2">
    <div className="card">
        <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
        <h4 className="my-controls-at-top-right">
            <i className="fas fa-times float-right"></i>
            <i className="fas fa-check float-right"></i>
        </h4>
      <div className="card-body mb-5">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
          <img src={``}/>
        <Link to="/courses/editor">
          <button type="button" className="btn btn-primary">{course.title}</button>
        </Link>
        <h4 className='edit-btn'><i onClick={() => this.setEditing(true)} className="fas fa-edit float-right"></i></h4>
      </div>
    </div>
  </div>

export default CourseCard


// const CourseRow = (
//     {
//         deleteCourse,
//         updateCourse,
//         course,
//         lastModified,
//         title,
//         owner
//     }) => {
//     const [editing, setEditing] = useState(false)
//     const [newTitle, setNewTitle] = useState(title)
//
//     const saveTitle = () => {
//         setEditing(false)
//         const newCourse = {
//             ...course,
//             title: newTitle
//         }
//         updateCourse(newCourse)
//     }

//   return (
//       // <tr>
//       //   <td>
//       //       {
//       //           !editing &&
//       //           <Link to="/courses/editor" >
//       //               {title}
//       //           </Link>
//       //       }
//       //       {
//       //           editing &&
//       //           <input
//       //               onChange={(event) => setNewTitle(event.target.value)}
//       //               value={newTitle}
//       //               className="form-control"/>
//       //       }
//       //   </td>
//       //   <td>{owner}</td>
//       //   <td>{lastModified}</td>
//       //   <td>
//       //       <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
//       //       {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
//       //       {editing && <i onClick={() => saveTitle()} className="fas fa-check"></i>}
//       //   </td>
//       // </tr>
//     <div className="row course">
//         <div className="col-7 col-md-5 col-lg-5">
//             {
//                 !editing &&
//                 <Link to="/courses/editor">
//                     {course.title}
//                 </Link>
//             }
//             {
//                 editing &&
//                 <input
//                     onChange={(event) => setNewTitle(event.target.value)}
//                     value={newTitle}
//                     className="form-control"/>
//             }
//         </div>
//         <div className="col-lg-3 col-md-6 d-none d-md-block d-lg-block">
//             {owner}
//         </div>
//         <div className="col-lg-3 col-md-1 d-none d-lg-block">
//             {lastModified}
//         </div>
//         <div className="col-5 col-md-1 col-lg-1">
//             {/*<i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>*/}
//             {!editing && <h4><i onClick={() => setEditing(true)} className="fas fa-edit float-right"></i></h4>}
//             {editing && <h4>
//                             <i onClick={() => saveTitle()} className="fas fa-check float-right"></i>
//                             <i onClick={() => deleteCourse(course)} className="fas fa-times float-right"></i>
//                         </h4>
//             }
//
//         </div>
//     </div>
//   )
// }
// export default CourseRow