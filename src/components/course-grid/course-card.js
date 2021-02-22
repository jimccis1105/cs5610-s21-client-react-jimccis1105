import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = (
    {
        deleteCourse,
        updateCourse,
        setTitle,
        resetTitle,
        course,
        title,
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
    }

    return (
    <div className="pb-4 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div className="card">
            <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
            {!editing &&
            <h4 className='edit-btn'>
                <i onClick={() => setEditingHelper()} className="fas fa-edit float-right"></i>
            </h4>
            }

            {editing && <h4 className="my-controls-at-top-right">
                            <i onClick={() => removeCourse()} className="fas fa-times float-right"></i>
                            <i onClick={() => saveTitle()} className="fas fa-check float-right"></i>
                        </h4>
            }
            <div className="card-body mb-5">
                {
                    !editing && <h5 className="card-title">{title}</h5>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setTitleHelper(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <img src={``}/>
                <Link to="/courses/editor">
                    <button type="button" className="btn btn-primary">{course.title}</button>
                </Link>
            </div>
        </div>
    </div>

    )
}
export default CourseCard