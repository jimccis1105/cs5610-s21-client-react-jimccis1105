import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        setTitle,
        resetTitle,
        course,
        lastModified,
        title,
        owner
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    const removeCourse = () => {
        setEditing(false)
        deleteCourse(course)
    }

    const setTitleHelper = (e) => {
        setTitle(e)
        setNewTitle(e)
        resetTitle()
    }

    const setEditingHelper = () => {
        setEditing(true);
        setNewTitle(title);
        console.log(title);
        console.log(newTitle);
    }

  return (
      // <tr>
      //   <td>
      //       {
      //           !editing &&
      //           <Link to="/courses/editor" >
      //               {title}
      //           </Link>
      //       }
      //       {
      //           editing &&
      //           <input
      //               onChange={(event) => setNewTitle(event.target.value)}
      //               value={newTitle}
      //               className="form-control"/>
      //       }
      //   </td>
      //   <td>{owner}</td>
      //   <td>{lastModified}</td>
      //   <td>
      //       <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
      //       {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
      //       {editing && <i onClick={() => saveTitle()} className="fas fa-check"></i>}
      //   </td>
      // </tr>
    <div className="row course">
        <div className="col-7 col-md-5 col-lg-5">
            {
                !editing &&
                <Link to="/courses/editor">
                    {course.title}
                </Link>
            }
            {
                editing &&
                <input
                    onChange={(event) => setTitleHelper(event.target.value)}
                    value={newTitle}
                    className="form-control"/>
            }
        </div>
        <div className="col-lg-3 col-md-6 d-none d-md-block d-lg-block">
            {owner}
        </div>
        <div className="col-lg-3 col-md-1 d-none d-lg-block">
            {lastModified}
        </div>
        <div className="col-5 col-md-1 col-lg-1">
            {/*<i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>*/}
            {!editing && <h4><i onClick={() => setEditingHelper()} className="fas fa-edit float-right"></i></h4>}
            {editing && <h4>
                            <i onClick={() => saveTitle()} className="fas fa-check float-right"></i>
                            <i onClick={() => removeCourse()} className="fas fa-times float-right"></i>
                        </h4>
            }

        </div>
    </div>
  )
}
export default CourseRow


// export default class CourseRow
//     extends React.Component {
//     state = {
//         editing: false,
//     }
//     constructor(props) {
//         super(props)
//         console.log(props)
//     }
//     setEditing = (e) => {
//         this.setState((prevState)=>({
//                 ...prevState,
//                 editing:e
//             })
//         )
//     }
//     saveTitle = () => {
//         this.setEditing(false)
//         const newCourse = {
//             ...this.props.course,
//             title: this.props.title
//         }
//         this.props.updateCourse(newCourse)
//     }
//
//     render() {
//         return(
//             <div className="row course">
//                 <div className="col-7 col-md-5 col-lg-5">
//                     {
//                         !this.state.editing &&
//                         <Link to="/courses/editor">
//                             {this.props.course.title}
//                         </Link>
//                     }
//                     {
//                         this.state.editing &&
//                         <input
//                             onChange={(event) => this.props.setTitle(event.target.value)}
//                             value={this.props.title}
//                             className="form-control"/>
//                     }
//                 </div>
//                 <div className="col-lg-3 col-md-6 d-none d-md-block d-lg-block">
//                     {this.props.owner}
//                 </div>
//                 <div className="col-lg-3 col-md-1 d-none d-lg-block">
//                     {this.props.lastModified}
//                 </div>
//                 <div className="col-5 col-md-1 col-lg-1">
//                     {/*<i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>*/}
//                     {!this.state.editing && <h4><i onClick={() => this.setEditing(true)} className="fas fa-edit float-right"></i></h4>}
//                     {this.state.editing && <h4>
//                         <i onClick={() => this.saveTitle()} className="fas fa-check float-right"></i>
//                         <i onClick={() => this.props.deleteCourse(this.props.course)} className="fas fa-times float-right"></i>
//                     </h4>
//                     }
//
//                 </div>
//             </div>
//         )
//     }
// }
