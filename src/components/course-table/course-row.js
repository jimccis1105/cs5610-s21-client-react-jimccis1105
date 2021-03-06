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
    <div className="row course">
        <div className="col-7 col-md-5 col-lg-5">
            {
                !editing &&
                <Link to={`/courses/table/edit/${course._id}`}>
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